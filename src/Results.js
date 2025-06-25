import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Results() {
  const navigate = useNavigate()
  const location = useLocation();
  console.log("response: ", location.state?.response?.candidates?.[0]?.content)

  const responseText = location.state?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "";


  const preferences = location.state?.selectedPreferences || [];

  function handleClick() {
    navigate('/set-options')
  }

  // Example function to extract destinations from responseText
  const extractDestinations = (text) => {
    const destinations = [];
    const destinationPattern = /### \d+\.\s\*\*(.+?)\*\*/g; // Matches "### 1. **Title**"
    const descriptionPattern = /.+?\*\*\n\n([\s\S]+?)(?=(\n\n###|$))/g; // Matches description until the next "###" or end

    let match;
    while ((match = destinationPattern.exec(text))) {
      destinations.push({ title: match[1], description: "" });
    }

    let i = 0;
    while ((match = descriptionPattern.exec(text)) && i < destinations.length) {
      destinations[i].description = match[1].trim();
      i++;
    }

    return destinations;
  };

  console.log("preferences: ", preferences)
  const destinations = extractDestinations(responseText);

  return (
    <div style={{ padding: "20px", fontFamily: "'Arial', sans-serif" }}>
      <button className="back-button" onClick={handleClick}>Go back and edit preferences</button>
      <h1 style={{ color: "#2c3e50", fontSize: "2.5em", marginBottom: "10px" }}>
        Your Dream Travel Destination
      </h1>
      {preferences.length > 0 ? (
    <p>
        Based on your travel preferences of{" "}
        {preferences.map((pref, index) =>
        index === preferences.length - 1 ? `and ${pref}` : `${pref}, `
        )}
        , here are your top recommendations:
    </p>
    ) : (
    <p>No preferences provided.</p>
    )}


      {destinations.map((destination, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#34495e", fontSize: "1.8em", marginBottom: "10px" }}>
            {index + 1}. {destination.title}
          </h2>
          <img
            src={`https://via.placeholder.com/800x400.png?text=${encodeURIComponent(
              destination.title
            )}`}
            alt={destination.title}
            style={{
              width: "100%",
              borderRadius: "10px",
              maxHeight: "200px",
              objectFit: "cover",
              marginBottom: "10px",
            }}
          />
          <div style={{ color: "#555", fontSize: "1em", lineHeight: "1.6em" }}>
            {destination.description}
          </div>
        </div>
      ))}

      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          border: "1px solid #ddd",
        }}
      >
        <p style={{ color: "#7f8c8d", fontSize: "0.9em" }}>
          Honorable Mentions:
        </p>
      </div>
    </div>
  );
}

export default Results;
