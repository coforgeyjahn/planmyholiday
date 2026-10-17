import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";

import "./styles/SetOptions.css";

import Loading from "./Loading.js";

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
  const [noBudgetPreference, setNoBudgetPreference] = useState(false);

  const [tripDetails, setTripDetails] = useState({
    departure: "",
    budget: 500,
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

    const matches = airports
      .filter(a => {
        const city = a.City?.toLowerCase() || "";
        const name = a.Name?.toLowerCase() || "";
        const iata = a.IATA?.toLowerCase() || "";
        const search = value.toLowerCase();
        return city.includes(search) || name.includes(search) || iata.includes(search);
      })
      .slice(0, 10);

    setFilteredAirports(matches);
  };

  // ---------------- AI Prompt ----------------


const buildPrompt = () => {
  const [preference1, preference2, preference3] = selectedPreferences;

  const departureInstruction = tripDetails.departure.trim()
    ? `The traveller's departure airport is ${tripDetails.departure}. Consider flight prices and travel times from this location.`
    : `The traveller has not specified a departure airport. Recommend destinations based on their preferences, and give general indicative travel cost guidance without assuming a departure city.`;

  const budgetInstruction = tripDetails.budget
    ? `The traveller's flight budget is £${tripDetails.budget} per person for return flights. Prioritise destinations where this budget may be realistic, taking the departure location into account if provided.`
    : `The traveller has not specified a flight budget. Do not assume a budget or exclude destinations based on price. Give general indicative price guidance where possible.`;

  return `
Find the top 3 travel destinations that best combine these three preferences:
${preference1}, ${preference2}, and ${preference3}.

TRAVEL DETAILS:
${departureInstruction}
${budgetInstruction}

Important:
- The departure airport and flight budget are optional.
- Never refuse to recommend destinations because either detail is missing.
- Do not invent exact flight prices or travel times. If the departure location is unknown, explain that these vary by origin.
- Prioritise how well each destination matches all three preferences.

FORMAT YOUR RESPONSE EXACTLY LIKE THIS:

PASSPORT_NAME:
A funny, light-hearted travel persona name based on the three preference traits.

For each of the 3 destinations, use these fields:

DESTINATION_1_CONTINENT: The continent in lowercase, hyphenated format (e.g. europe, asia, north-america).

DESTINATION_1_COUNTRY: The country in lowercase, hyphenated format (e.g. united-kingdom, south-africa, united-states).

DESTINATION_1_CITY_SLUG: The city in lowercase, hyphenated format (e.g. cape-town, new-york, los-angeles).

**Flight Details:**: One line describing indicative return flight prices and travel time. If the departure location is unknown, say that these depend on the traveller's origin.

*${preference1}*: A few sentences explaining why this destination suits this preference.

*${preference2}*: A few sentences explaining why this destination suits this preference.

*${preference3}*: A few sentences explaining why this destination suits this preference.

*Why it fits*: A final paragraph tying all three preferences together.

Repeat the format for destinations 2 and 3, changing the destination field numbers accordingly.

Use a warm, informative tone. Do not use markdown headings or bullet points in the generated response. Use clearly labelled, structured plain text.
  `.trim();
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

      const res = await fetch("/.netlify/functions/find-destinations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      const { response } = await res.json();

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
            <label className="form-label" htmlFor="budget">Flight budget:</label>
            <div className="form-input budget-controls">
              <input
                id="budget"
                type="range"
                min="100"
                max="3000"
                step="50"
                value={tripDetails.budget || 500}
                disabled={noBudgetPreference}
                onChange={(e) =>
                  setTripDetails(prev => ({
                    ...prev,
                    budget: Number(e.target.value)
                  }))
                }
                className="slider"
              />

              <span className="budget-value">
                {noBudgetPreference
                  ? "Any"
                  : `£${Number(tripDetails.budget || 500).toLocaleString()}`}
              </span>

              <label className="no-budget-toggle">
                <input
                  type="checkbox"
                  checked={noBudgetPreference}
                  onChange={(e) => {
                    setNoBudgetPreference(e.target.checked);
                    setTripDetails(prev => ({
                      ...prev,
                      budget: e.target.checked ? "" : 500
                    }));
                  }}
                />
                No budget preference
              </label>
            </div>
          </div>

        </div>
      )}

      {selectedPreferences.length === 3 && (
        <button className="find-btn" onClick={findTravelDestinations}>
          <div className="shimmer" />
          <div className="plane-wrap">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2A1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="white" />
            </svg>
          </div>
          <div className="btn-text">
            <span className="btn-label">Find Destinations</span>
            <span className="btn-sub">explore flights from your city</span>
          </div>
          <span className="btn-arrow">→</span>
        </button>
      )}
    </div>
  );
};

export default SetOptions;
