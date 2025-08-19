import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * TravelBlogTemplate (Plain React + CSS)
 * ---------------------------------------------------------
 * A React template for a travel blog containing:
 * - Country headers
 * - Itineraries (things you did)
 * - Photo galleries for each location
 * - Scales nicely to 20+ locations with search and filters
 *
 * How to use:
 * 1) Replace LOCATIONS with your own data (at least 20 items supported).
 * 2) Add your photos and itineraries.
 * 3) Adjust CSS in the <style> block at the bottom.
 */

// ---- 🔧 Sample Data (Replace with your own) ---------------------------------

const LOCATIONS = [
  {
    id: "tokyo-sensoji",
    country: "Japan",
    city: "Tokyo",
    title: "Asakusa & Sensō-ji",
    date: "2024-05-12",
    itinerary: [
      "Strolled Nakamise Shopping Street",
      "Visited Sensō-ji Temple",
      "Took a river cruise on Sumida",
    ],
    photos: [
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6",
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
    ],
  },
  {
    id: "paris-louvre",
    country: "France",
    city: "Paris",
    title: "The Louvre & Seine",
    date: "2023-09-03",
    itinerary: [
      "Morning at the Louvre",
      "Picnic by the Seine",
      "Twilight at Pont Alexandre III",
    ],
    photos: [
      "https://images.unsplash.com/photo-1526045478516-99145907023c",
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    ],
  },
  // 👉 Add more locations here
];

// ---- 🧰 Helpers -------------------------------------------------------------

function groupByCountry(locations) {
  return locations.reduce((acc, loc) => {
    acc[loc.country] = acc[loc.country] || [];
    acc[loc.country].push(loc);
    return acc;
  }, {});
}

function uniqueCountries(locations) {
  return Array.from(new Set(locations.map((l) => l.country))).sort();
}

// ---- 🖼️ Components ----------------------------------------------------------

function LocationCard({ location }) {
  return (
    <div className="card">
      <h3>{location.title}</h3>
      <div className="meta">
        <span>{location.country}</span> · <span>{location.city}</span> · <span>{new Date(location.date).toLocaleDateString()}</span>
      </div>
      <div>
        <h4>Itinerary</h4>
        <ul>
          {location.itinerary.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Photos</h4>
        <div className="photos">
          {location.photos.map((src, i) => (
            <img key={i} src={src} alt={`${location.title} ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CountryFilter({ locations, activeCountries, setActiveCountries }) {
  const countries = useMemo(() => uniqueCountries(locations), [locations]);

  function toggleCountry(c) {
    setActiveCountries((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  }

  return (
    <div className="filters">
      <button onClick={() => setActiveCountries([])} className={activeCountries.length === 0 ? "active" : ""}>
        All
      </button>
      {countries.map((c) => (
        <button
          key={c}
          onClick={() => toggleCountry(c)}
          className={activeCountries.includes(c) ? "active" : ""}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search locations..."
      className="search"
    />
  );
}

// ---- 🌎 Main App ------------------------------------------------------------

export default function HolidayBlog() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeCountries, setActiveCountries] = useState([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = LOCATIONS;
    if (activeCountries.length > 0) {
      list = list.filter((l) => activeCountries.includes(l.country));
    }
    if (q) {
      list = list.filter((l) => {
        const hay = [l.title, l.city, l.country, l.itinerary.join(" ")].join(" ").toLowerCase();
        return hay.includes(q);
      });
    }
    return list.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [query, activeCountries]);

  const grouped = useMemo(() => groupByCountry(filtered), [filtered]);

  const returnHome = () => {
    navigate("/");
  }

  return (
    <div className="container">
      <button onClick={returnHome}>Back to Holiday Planning</button>
      <header>
        <h1>My Travel Blog</h1>
        <p>A visual diary of places I've been.</p>
      </header>

      <SearchBar query={query} setQuery={setQuery} />
      <CountryFilter
        locations={LOCATIONS}
        activeCountries={activeCountries}
        setActiveCountries={setActiveCountries}
      />

      <main>
        {Object.entries(grouped).map(([country, list]) => (
          <section key={country}>
            <h2>{country}</h2>
            <div className="grid">
              {list.map((loc) => (
                <LocationCard key={loc.id} location={loc} />
              ))}
            </div>
          </section>
        ))}

        {filtered.length === 0 && <p>No results found.</p>}
      </main>

      <footer>
        <p>© {new Date().getFullYear()} My Travel Blog</p>
      </footer>

      <style>{`
        .container {
          max-width: 1000px;
          margin: auto;
          padding: 1rem;
          font-family: Arial, sans-serif;
        }
        header {
          text-align: center;
          margin-bottom: 2rem;
        }
        h1 { font-size: 2rem; }
        .filters button {
          margin: 0.25rem;
          padding: 0.5rem 1rem;
          border: 1px solid #ccc;
          background: #f9f9f9;
          cursor: pointer;
        }
        .filters button.active {
          background: #333;
          color: #fff;
        }
        .search {
          display: block;
          width: 100%;
          padding: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1rem;
          background: #fff;
          margin-bottom: 1rem;
        }
        .card h3 { margin-top: 0; }
        .meta {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 0.5rem;
        }
        .photos {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 0.5rem;
        }
        .photos img {
          width: 100%;
          height: auto;
          border-radius: 4px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }
        footer {
          margin-top: 2rem;
          text-align: center;
          color: #666;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}
