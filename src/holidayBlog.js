import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const LOCATIONS = [
  {
    id: "dubrovnik-croatia",
    country: "Croatia",
    city: "Dubrovnik",
    title: "Dubrovnik",
    date: "2025-08-25",
    itinerary: [
      {
        day: 1,
        activities: [
          "Walking tour of Dubrovnik Old Town",
          "Swimming and cliff jumping at Buza Bar",
          "Night out at Revelin"
        ]
      },
      {
        day: 2,
        activities: [
          "Cable car to Mount Srđ",
          "Visit Lokrum Island",
          "Dinner at Panorama Restaurant"
        ]
      }
    ],
    photos: [
      require("./imgs/croatia0.jpeg"),
      require("./imgs/croatia1.jpeg"),
      require("./imgs/croatia2.jpeg"),
      require("./imgs/croatia3.jpeg"),
    ],
  },
  {
    id: "downtown-finland",
    country: "Finland",
    city: "Helsinki",
    title: "Helsinki",
    date: "2025-07-28",
    itinerary: [
      {
        day: 1,
        activities: [
          "Exploring old town",
        ]
      },
      {
        day: 2,
        activities: [
          "Trip to Estonia Tallinn"
        ]
      }
    ],
    photos: [
      "https://images.unsplash.com/photo-1526045478516-99145907023c",
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    ],
  },
  {
    id: "albania-tirana",
    country: "Albania",
    city: "Tirana",
    title: "Tirana",
    date: "2025-10-13",
    itinerary: [
      {
        day: 1,
        activities: [
          "Exploring Tirana, run around Tirana Lake",
          "Irish Pub for Dinner and Drinks, Karaoke",
          "Staying in Bearded Dad Hostel"
        ]
      },
      {
        day: 2,
        activities: [
          "Visit the House of Leaves Spy Museum",
          "Sightseeing at the mosque and pyramid",
          "Lunch and drinks at Lake View Bar."
        ]
      },
    ],
    photos: [
      require("./imgs/croatia0.jpeg"),
      require("./imgs/croatia1.jpeg"),
      require("./imgs/croatia2.jpeg"),
      require("./imgs/croatia3.jpeg"),
    ],
  },
  {
    id: "albania-shkoder",
    country: "Albania",
    city: "Shkoder",
    title: "Shkoder",
    date: "2025-10-15",
    itinerary: [
      {
        day: 1,
        activities: [
          "Get city bus to Shkoder",
          "Check into Hostel - Galley party hostel",
          "Short hike to fortress on the hill"
        ]
      },
      {
        day: 2,
        activities: [
          "Rent bikes and spend the day swimming at Shkoder Lake"
        ]
      }
    ],
    photos: [
      require("./imgs/croatia0.jpeg"),
      require("./imgs/croatia1.jpeg"),
      require("./imgs/croatia2.jpeg"),
      require("./imgs/croatia3.jpeg"),
    ],
  },
  {
    id: "albania-alps",
    country: "Albania",
    city: "Alps",
    title: "Theth & Valbone",
    date: "2025-10-17",
    itinerary: [
      {
        day: 1,
        activities: [
          "Get bus to Theth Village in the Albanian Alps",
          "Leave on 7 hour/20k hike to Valbona",
          "Check into accomodation, we stayed in a hut at Centre Park"
        ]
      },
      {
        day: 2,
        activities: [
          "FULL travel day back to Tirana - bus, then beautiful ferry ride, then bus",
        ]
      },
    ],
    photos: [
      require("./imgs/croatia0.jpeg"),
      require("./imgs/croatia1.jpeg"),
      require("./imgs/croatia2.jpeg"),
      require("./imgs/croatia3.jpeg"),
    ],
  },
];

function groupByCountry(locations) {
  return locations.reduce((acc, loc) => {
    acc[loc.country] = acc[loc.country] || [];
    acc[loc.country].push(loc);
    return acc;
  }, {});
}

function uniqueCountries(locations) {
  locations.map((l) => console.log("country : ", l.country))
  return Array.from(new Set(locations.map((l) => l.country))).sort();
}

function LocationCard({ location }) {
  return (
    <div className="card">
      <h3>{location.title}</h3>
      <div className="meta">
        <span>{location.country}</span> · <span>{location.city}</span> ·{" "}
        <span>{new Date(location.date).toLocaleDateString()}</span>
      </div>
      <div>
        <h4>Itinerary</h4>
        {location.itinerary.map((dayPlan, i) => (
          <div key={i}>
            <strong>Day {dayPlan.day}:</strong>
            <ul>
              {dayPlan.activities.map((activity, j) => (
                <li key={j}>{activity}</li>
              ))}
            </ul>
          </div>
        ))}
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
