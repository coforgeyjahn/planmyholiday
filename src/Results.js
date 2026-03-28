import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { createApi } from "unsplash-js";
import "./styles/Results.css";
import { UNSPLASH_ACCESS_KEY } from "./keys";

const unsplash = createApi({
  accessKey: UNSPLASH_ACCESS_KEY,
});

// ── Deep link builders ──
function buildLinks(departureFull, destinationIATA, destination) {
  const iataMatch = departureFull?.match(/\(([A-Z]{3})\)/);
  const fromIATA = iataMatch ? iataMatch[1] : "";
  const toIATA = destinationIATA?.toUpperCase() || "";

  const skyscannerUrl =
    fromIATA && toIATA
      ? `https://www.skyscanner.net/transport/flights/${fromIATA}/${toIATA}/`
      : `https://www.skyscanner.net/flights/`;

  const { continent, country, citySlug, city } = destination;
  const hostelworldUrl =
    continent && country && citySlug
      ? `https://www.hostelworld.com/hostels/${continent}/${country}/${citySlug}/`
      : `https://www.hostelworld.com/search?search=${encodeURIComponent(city)}`;

  return { skyscannerUrl, hostelworldUrl };
}

function Results() {
  const navigate = useNavigate();
  const location = useLocation();

  // ── Extract response & preferences ──
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

  const tripDetails =
    location.state?.tripDetails ||
    (() => {
      try {
        return JSON.parse(localStorage.getItem("tripContext"))?.details;
      } catch {
        return {};
      }
    })();

  // ── Redirect if no valid data ──
  useEffect(() => {
    if (!response || !preferences?.length) {
      navigate("/", { replace: true });
    }
  }, [response, preferences, navigate]);

  // ── Parse PASSPORT_NAME, destinations, and IATA codes ──
  const { passportName, destinations } = useMemo(() => {
    if (!response) return { passportName: "", destinations: [] };

    const lines = response.split("\n");
    let passportName = "";
    const dests = [];
    let currentDest = null;

    lines.forEach((line) => {
      const trimmed = line.trim();
    
      if (trimmed.startsWith("PASSPORT_NAME:")) {
        passportName = trimmed.replace("PASSPORT_NAME:", "").trim();
      } else if (/^DESTINATION_\d+_CONTINENT:/.test(trimmed)) {
        // New destination starts here
        if (currentDest) dests.push(currentDest);
        currentDest = { title: "", iata: "", city: "", continent: "", country: "", citySlug: "", flightSummary: "", description: "" };
        currentDest.continent = trimmed.replace(/^DESTINATION_\d+_CONTINENT:/, "").trim();
      } else if (/^DESTINATION_\d+_COUNTRY:/.test(trimmed)) {
        if (currentDest) currentDest.country = trimmed.replace(/^DESTINATION_\d+_COUNTRY:/, "").trim();
      } else if (/^DESTINATION_\d+_CITY_SLUG:/.test(trimmed)) {
        if (currentDest) {
          currentDest.citySlug = trimmed.replace(/^DESTINATION_\d+_CITY_SLUG:/, "").trim();
          // Derive a display name from the slug e.g. "cape-town" → "Cape Town"
          currentDest.city = currentDest.citySlug
            .split("-")
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");
          currentDest.title = currentDest.city;
        }
      } else if (/^DESTINATION_\d+_IATA:/.test(trimmed)) {
        if (currentDest) currentDest.iata = trimmed.replace(/^DESTINATION_\d+_IATA:/, "").trim();
      } else if (/^DESTINATION_\d+_CITY:/.test(trimmed)) {
        if (currentDest) {
          currentDest.city = trimmed.replace(/^DESTINATION_\d+_CITY:/, "").trim();
          currentDest.title = currentDest.city;
        }
      } else if (/^DESTINATION_\d+_/.test(trimmed)) {
        return; // skip any other unknown DESTINATION_X_ lines
      } else if (currentDest) {
        currentDest.description += trimmed + "\n";
      }
    });

    if (currentDest) dests.push(currentDest);

    return { passportName, destinations: dests };
  }, [response]);

  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchImages = useCallback(async () => {
    const imagePromises = destinations.map(async (destination) => {
      try {
        const result = await unsplash.search.getPhotos({
          query: destination.city || destination.title,
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

  useEffect(() => {
    if (destinations.length > 0) fetchImages();
  }, [destinations, fetchImages]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>Loading your holiday recommendations...</p>
      </div>
    );
  }

  return (
    <div className="results-rendering" style={{ padding: "20px", fontFamily: "'Arial', sans-serif" }}>
      <button className="back-button" onClick={() => navigate("/set-options")}>
        Go back and edit preferences
      </button>

      {passportName && (
        <h1 style={{ color: "#2c3e50", fontSize: "2.5em", marginBottom: "10px" }}>
          Passport Name: {passportName}
        </h1>
      )}

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

      {destinations.map((destination, index) => {
        const { skyscannerUrl, hostelworldUrl } = buildLinks(
          tripDetails?.departure,
          destination.iata,
          destination
        );

        return (
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
              {index + 1}. {destination.city || destination.title.replace(/\*\*(.+?)\*\*/g, "$1")}
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
              <ReactMarkdown>{`**Flight Details:** ${destination.description}`}</ReactMarkdown>
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "12px", justifyContent: "center"}}>
              <a
                href={skyscannerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="result-link flight-link"
                onClick={() =>
                  window.gtag("event", "click_flights_link", {
                    destination: destination.city,
                    from: tripDetails?.departure,
                    url: skyscannerUrl,
                  })
                }
              >
                ✈ Browse flights
              </a>
              <a
                href={hostelworldUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="result-link accom-link"
                onClick={() =>
                  window.gtag("event", "click_accommodation_link", {
                    destination: destination.city,
                    url: hostelworldUrl,
                  })
                }
              >
                🏨 Browse accommodation
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Results;