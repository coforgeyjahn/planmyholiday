import { Routes, Route, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import './App.css';
import SetOptions from "./SetOptions.js";
import Results from "./Results.js"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/set-options" element={<SetOptions />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App-container bg-gradient-to-r from-blue-500 to-teal-400 text-white">
      <img src={logo} className="App-logo" alt="logo" />
        <div className="App-text">
          <h1 className="App-header-text text-4xl font-bold mb-4">Plan Your Dream Vacation</h1>
          <p className="App-description text-4xl mb-8">
            Discover the perfect destination tailored to your preferences.
          </p>
          <button
            className="App-button"
            onClick={() => navigate("/set-options")}
          >
            Find the Perfect Vacation for You
          </button>
      </div>
    </div>
  );
}

export default App;
