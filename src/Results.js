import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { createApi } from "unsplash-js";
import "./Results.css";
import { REACT_APP_UNSPLASH_ACCESS_KEY } from "./keys";

const unsplash = createApi({
  accessKey: REACT_APP_UNSPLASH_ACCESS_KEY,
});

function Results() {
  const navigate = useNavigate();
  const location = useLocation();

  const responseText =
    location.state?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "";

  const preferences = location.state?.selectedPreferences || [];

  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  const destinations = useMemo(() => {
    if (!responseText) {
      console.error("Response text is empty or undefined.");
      return [];
    }

    const normalizedText = responseText.replace(/\r\n/g, "\n"); // Normalize line endings
    const matches = Array.from(
      normalizedText.matchAll(/###\s?\d+\.\s?\*\*(.+?)\*\*\n+([\s\S]+?)(?=---|$)/g)
    );

    const extracted = matches.map((match, index) => ({
      title: match[1]?.trim() || `Untitled Destination ${index + 1}`,
      description: match[2]?.trim() || "No description available.",
    }));

    setLoading(false); // Parsing is complete
    return extracted;
  }, [responseText]);

  useEffect(() => {
    if (destinations.length > 0) {
      fetchImages();
    }
  }, [destinations]);

  const fetchImages = async () => {
    const newImages = {};
    for (const destination of destinations) {
      try {
        const response = await unsplash.search.getPhotos({
          query: destination.title,
          page: 1,
          perPage: 1,
        });

        if (response.errors) {
          console.error("Error occurred: ", response.errors[0]);
        } else {
          const photo = response.response.results[0];
          if (photo) {
            newImages[destination.title] = photo.urls.regular;
          }
        }
      } catch (error) {
        console.error("Error fetching photo: ", error);
      }
    }
    setImages(newImages);
  };

  const handleClick = () => {
    navigate("/set-options");
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>Loading your holiday recommendations...</p>
      </div>
    );
  }

  return (
    <div
      className="results-rendering"
      style={{ padding: "20px", fontFamily: "'Arial', sans-serif" }}
    >
      <button className="back-button" onClick={handleClick}>
        Go back and edit preferences
      </button>
      <h1 style={{ color: "#2c3e50", fontSize: "2.5em", marginBottom: "10px" }}>
        Your Perfect Holiday
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
            src={images[destination.title] || "https://via.placeholder.com/400"}
            alt={destination.title}
            style={{
              width: "65%",
              height: "500px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
          <div style={{ color: "#555", fontSize: "1em", lineHeight: "1.6em" }}>
            <ReactMarkdown>{destination.description}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
