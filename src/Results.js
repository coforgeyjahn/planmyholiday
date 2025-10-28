import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { createApi } from "unsplash-js";
import "./Results.css";
import { UNSPLASH_ACCESS_KEY } from "./keys";

const unsplash = createApi({
  accessKey: UNSPLASH_ACCESS_KEY,
});

function Results() {
  const navigate = useNavigate();
  const location = useLocation();

  // --- Extract response & preferences safely ---
  const response =
    location.state?.response?.candidates?.[0]?.content?.parts?.[0]?.text ||
    (() => {
      try {
        return JSON.parse(localStorage.getItem("travelResponse"));
      } catch {
        return null;
      }
    })();

  const preferences =
    location.state?.selectedPreferences ||
    (() => {
      try {
        return JSON.parse(localStorage.getItem("travelPreferences"));
      } catch {
        return [];
      }
    })();

  // --- Redirect if no valid data ---
  useEffect(() => {
    const hasValidData = response && preferences?.length;
    if (!hasValidData) {
      navigate("/", { replace: true });
    }
  }, [response, preferences, navigate]);

  // --- Destinations parsing ---
  const destinations = useMemo(() => {
    if (!response) return [];

    const normalizedText = response.replace(/\r\n/g, "\n");
    const matches = Array.from(
      normalizedText.matchAll(/(\d+)\.\s(.+?)\n([\s\S]*?)(?=\n\d+\.|$)/g)
    );

    return matches.map((match, index) => ({
      title: match[2]?.trim() || `Untitled Destination ${index + 1}`,
      description: match[3]?.trim() || "No description available.",
    }));
  }, [response]);

  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  // --- fetchImages wrapped in useCallback ---
  const fetchImages = useCallback(async () => {
    const imagePromises = destinations.map(async (destination) => {
      try {
        const result = await unsplash.search.getPhotos({
          query: destination.title,
          page: 1,
          perPage: 1,
        });
        if (result.errors) {
          console.error(`Error for ${destination.title}:`, result.errors[0]);
          return [destination.title, null];
        }
        const photo = result.response.results[0];
        return [destination.title, photo?.urls?.regular || null];
      } catch (error) {
        console.error(`Error fetching image for ${destination.title}:`, error);
        return [destination.title, null];
      }
    });

    const results = await Promise.all(imagePromises);
    setImages(Object.fromEntries(results));
    setLoading(false);
  }, [destinations]);

  // --- Trigger image fetching ---
  useEffect(() => {
    if (destinations.length > 0) {
      fetchImages();
    }
  }, [destinations, fetchImages]);

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
    <div className="results-rendering" style={{ padding: "20px", fontFamily: "'Arial', sans-serif" }}>
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
          <div>
            <p>Check out this awesome hostel site:</p>
            <a href="https://www.hostelworld.com/" target="_blank" rel="noopener noreferrer">
              Visit Hostelworld
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
