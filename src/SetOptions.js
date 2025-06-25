import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./SetOptions.css";
import { GoogleGenAI } from "@google/genai";
import { REACT_APP_GOOGLE_API_KEY } from "./keys";
import Loading from './Loading.js';

const ai = new GoogleGenAI({ apiKey: REACT_APP_GOOGLE_API_KEY });

const travelPreferences = [
  "Adventure",
  "Relaxation",
  "Cultural",
  "Food & Drink",
  "Nature",
  "Beach",
  "City Life",
  "History",
  "Wildlife",
];

const pastelColors = [
  "#FFB3BA", // Soft pink
  "#FFDFBA", // Peach
  "#FFFFBA", // Light yellow
  "#BAFFC9", // Mint green
  "#BAE1FF", // Light blue
  "#D5BAFF", // Lavender
  "#FFBAC5", // Rose
  "#B4D6FF", // Sky blue
  "#FFD6BA", // Light coral
];

const SetOptions = () => {
  const navigate = useNavigate();
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const togglePreference = (preference) => {
    if (selectedPreferences.includes(preference)) {
      setSelectedPreferences(
        selectedPreferences.filter((pref) => pref !== preference)
      );
    } else if (selectedPreferences.length < 3) {
      setSelectedPreferences([...selectedPreferences, preference]);
    }
  };

  const isSelected = (preference) => selectedPreferences.includes(preference);

  async function findTravelDestinations() {
    setLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Can you find me the top 3 travel destinations that combine the following three attributes: ${selectedPreferences[0]}, ${selectedPreferences[1]}, ${selectedPreferences[2]}?`,
      });
       // Simulate delay so users see loading animation
      setTimeout(() => {
        navigate("/results", { state: { response, selectedPreferences } });
      }, 10000);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching travel destinations:", error);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="set-options-viewport">
      <h1 className="prompt">Pick Your Top 3 Priorities for Your Next Holiday</h1>
      <div className="bubbles-container">
        {travelPreferences.map((preference, index) => (
          <motion.div
            key={`${preference}-${index}`}
            onClick={() => togglePreference(preference)}
            className={`bubble ${isSelected(preference) ? "selected" : ""}`}
            style={{
              backgroundColor: pastelColors[index % pastelColors.length],
              color: isSelected(preference) ? "white" : "black",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {preference}
          </motion.div>
        ))}
      </div>

      <div className="set-options-selected mt-6 text-center text-white">
        {selectedPreferences.length > 0 && (
          <div className="set-options-selected-options">
            <div className="text-xl font-semibold mb-2">
              Your Preferences: <p>{selectedPreferences.join(", ")}</p>
            </div>
          </div>
        )}
        {selectedPreferences.length === 3 && (
          <button
            className="set-options-confirm"
            onClick={findTravelDestinations}
          >
            Confirm Selection
          </button>
        )}
      </div>
    </div>
  );
};

export default SetOptions;
