import { Routes, Route, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import './App.css';
import SetOptions from "./SetOptions.js"; // Import the SetOptions component
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
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-header-text text-4xl font-bold mb-4">Plan Your Dream Vacation</h1>
        <p className="text-lg mb-8">
          Discover the perfect destination tailored to your preferences.
        </p>
        <button
          className="bg-white text-teal-500 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-teal-500 hover:text-white transition-all duration-300"
          onClick={() => navigate("/set-options")}
        >
          Find the Perfect Vacation for You
        </button>
      </header>
    </div>
  );
}

export default App;
