import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./SetOptions.css";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyAWiZ2bLXmhSO8uUV9bZgKD2HWk7FXn2AQ" });

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
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Can you find me the top 2 travel destinations that combine the following three attributes: ${selectedPreferences[0]}, ${selectedPreferences[1]}, ${selectedPreferences[2]}?`,
      });

      console.log("Querying travel preferences: ", selectedPreferences, response);

      // Navigate to the Results page and pass the response as state
      navigate("/results", { state: { response, selectedPreferences }});
    } catch (error) {
      console.error("Error fetching travel destinations:", error);
    }
  }

  return (
    <div className="set-options-viewport">
      <h1 className="prompt">Choose Your Travel Preferences</h1>
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
            <h2 className="text-xl font-semibold mb-2">Your Preferences:</h2>
            <p>{selectedPreferences.join(", ")}</p>
          </div>
        )}
        {selectedPreferences.length === 3 && (
          <button
            className="set-options-confirm mt-6 py-2 px-6 rounded-full shadow-md hover:bg-blue-500 transition-all duration-200"
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
