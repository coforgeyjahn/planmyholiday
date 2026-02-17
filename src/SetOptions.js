import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";

import "./styles/SetOptions.css";
import { GoogleGenAI } from "@google/genai";
import { MAP_API_KEY } from "./keys.js";
import Loading from "./Loading.js";

const ai = new GoogleGenAI({ apiKey: MAP_API_KEY });

const travelPreferences = [
  "Adventure", "Relaxation", "Cultural", "Food & Drink", "Nature", "Beach",
  "City Life", "History", "Wildlife", "Nightlife", "Shopping", "Romance",
  "Warm Weather", "Snow Sports", "Health & Wellness", "Family-friendly"
];

const pastelColors = [
  "#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF", "#D5BAFF",
  "#FFBAC5", "#B4D6FF", "#FFD6BA", "#AEC6CF", "#C5B4E3", "#B5EAD7",
  "#FADADD", "#FFDAB9", "#D4F1F4", "#FFE5B4"
];

const SetOptions = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);

  // ---------------- State ----------------

  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [loading, setLoading] = useState(false);

  const [tripDetails, setTripDetails] = useState({
    departure: "",
    budget: "",
  });

  const [airports, setAirports] = useState([]);
  const [filteredAirports, setFilteredAirports] = useState([]);

  // ---------------- Effects ----------------

  useEffect(() => {
    fetch("/data/airports.csv")
      .then(res => res.text())
      .then(text => {
        const parsed = Papa.parse(text, {
          header: true,
          skipEmptyLines: true
        });
  
        const cleaned = parsed.data.filter(a =>
          a.Type === "airport" && a.IATA
        );
  
        setAirports(cleaned);
      });
  }, []);
  

  useEffect(() => {
    if (selectedPreferences.length === 3 && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedPreferences]);

  // ---------------- Preference Logic ----------------

  const togglePreference = (preference) => {
    if (selectedPreferences.includes(preference)) {
      setSelectedPreferences(prev => prev.filter(p => p !== preference));
    } else if (selectedPreferences.length < 3) {
      setSelectedPreferences(prev => [...prev, preference]);
    }
  };

  const isSelected = (preference) =>
    selectedPreferences.includes(preference);

  // ---------------- Input Handlers ----------------

  const handleDestinationChange = (e) => {
    const value = e.target.value;

    setTripDetails(prev => ({
      ...prev,
      departure: value
    }));

    if (!value) {
      setFilteredAirports([]);
      return;
    }

    console.log("Airports: ", airports)

    const matches = airports
    .filter(a => {
      const city = a.City?.toLowerCase() || "";
      const name = a.Name?.toLowerCase() || "";
      const iata = a.IATA?.toLowerCase() || "";
  
      const search = value.toLowerCase();
  
      return (
        city.includes(search) ||
        name.includes(search) ||
        iata.includes(search)
      );
    })
    .slice(0, 10);
  
    setFilteredAirports(matches);
  };

  // ---------------- AI Prompt ----------------

  const buildPrompt = () => {
    return `
    Can you find me the top 3 travel destinations that combine the following three attributes: ${selectedPreferences[0]}, ${selectedPreferences[1]}, and ${selectedPreferences[2]}?
    Please try to find flights within the ${tripDetails.budget} from the listed ${tripDetails.departure} destination.
      
    Please format your response exactly like this, using markdown headings and bold titles:
    
    PASSPORT_NAME:
    A funny, light-hearted travel persona name based on the three preferences traits

    1. DESTINATION_1_CITY:

    Exactly one line of text explaining the average return flight price and travel time from the departure location.

    *${selectedPreferences[0]}*: A few sentences explaining why this destination is great for preference 1.

    *${selectedPreferences[1]}*: A few sentences explaining why this destination is great for preference 2.

    *${selectedPreferences[2]}*: A few sentences on how this destination offers preference 3.

    *Why it fits*: A final paragraph tying all three together and explaining why this destination is a well-rounded match.

    Repeat this exact format for destinations 2 and 3. Ensure each section is clearly labeled and written in a warm, informative tone. Do not use markdown or bullet points—just structured plain text.      
    `.trim()
  };

  // ---------------- Validation ----------------

  const validateForm = () => {
    if (selectedPreferences.length !== 3) return false;

    return true;
  };

  // ---------------- API Call ----------------

  async function findTravelDestinations() {
    if (!validateForm()) return;

    setLoading(true);

    try {
      const prompt = buildPrompt();

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
      });

      localStorage.setItem("travelResponse", JSON.stringify(response));
      localStorage.setItem(
        "tripContext",
        JSON.stringify({
          preferences: selectedPreferences,
          details: tripDetails
        })
      );

      navigate("/results", {
        state: { response, selectedPreferences, tripDetails }
      });

    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  const returnHome = () => navigate("/");

  // ---------------- Loading ----------------

  if (loading) return <Loading />;

  // ---------------- UI ----------------

  return (
    <div className="set-options-viewport">

      <button className="home-bubble" onClick={returnHome}>
        <span className="arrow">⇦</span> Home
      </button>

      <div className="bubble-hero">
        <h1 className="prompt">
          Pick Your Top 3 Priorities for Your Next Holiday
        </h1>

        <div className="bubbles-container">
          {travelPreferences.map((preference, index) => (
            <motion.div
              key={`${preference}-${index}`}
              onClick={() => togglePreference(preference)}
              className={`bubble ${isSelected(preference) ? "selected" : ""}`}
              style={{
                backgroundColor: pastelColors[index % pastelColors.length],
                color: isSelected(preference) ? "white" : "black"
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {preference}
            </motion.div>
          ))}
        </div>
      </div>

      {selectedPreferences.length === 3 && (
        <div ref={formRef} className="trip-details-section">

          <div className="form-row">
            <label className="form-label" htmlFor="departure">Departure:</label>
            <div className="form-input">
              <div className="autocomplete">
                <input
                  id="departure"
                  name="departure"
                  placeholder="Departure city"
                  value={tripDetails.departure}
                  onChange={handleDestinationChange}
                />
                {filteredAirports.length > 0 && (
                  <ul className="dropdown">
                    {filteredAirports.map((airport, i) => (
                      <li
                        key={i}
                        onClick={() => {
                          setTripDetails(prev => ({
                            ...prev,
                            departure: `${airport.City} (${airport.IATA})`
                          }));
                          setFilteredAirports([]);
                        }}
                      >
                        {airport.City} — {airport.Name} ({airport.IATA})
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="form-row">
            <label className="form-label">Budget:</label>
            <div className="form-input">
              <div className="slider-wrapper">
                <div className="slider-container">
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={tripDetails.budget || 100} // default to min
                    onChange={(e) =>
                      setTripDetails(prev => ({ ...prev, budget: Number(e.target.value) }))
                    }
                    className="slider"
                    style={{
                      background: `linear-gradient(to right, #007bff 0%, #007bff ${
                        ((tripDetails.budget - 100) / (10000 - 100)) * 100
                      }%, #ddd ${((tripDetails.budget - 100) / (10000 - 100)) * 100}%, #ddd 100%)`,
                    }}
                  />
                  <div
                    className="slider-bubble"
                    style={{
                      left: `calc(${((tripDetails.budget - 100) / (10000 - 100)) * 100}% - 10px)`,
                    }}
                  >
                    ${tripDetails.budget}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedPreferences.length === 3 && <button
        className="set-options-confirm"
        onClick={findTravelDestinations}
        >
        Find Destinations
      </button>
      }
    </div>
  );
};

export default SetOptions;
