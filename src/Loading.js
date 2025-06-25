import React from 'react';
import './Loading.css';
import logo from './logo.png';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="plane-container">
        <div className="plane-container">
            <img
                src={logo}
                alt="Plane logo"
                width="60"
                height="60"
                className="plane"
            />
            </div>
          <path d="M2 12l19-7-7 7 7 7-19-7z" />
      </div>
      <p className="loading-text">Dream holiday pending...</p>
    </div>
  );
};

export default Loading;
