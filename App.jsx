import React from "react";
import "./index.css";

const sports = [
  { name: "Football", icon: "⚽" },
  { name: "Basketball", icon: "🏀" },
  { name: "Cycling", icon: "🚴‍♂️" },
  { name: "Athletics", icon: "🥇" },
];

function App() {
  return (
    <div className="app">
      <h1 className="title">Trek Sports</h1>
      <div className="sports-grid">
        {sports.map((sport) => (
          <div key={sport.name} className="card">
            <div className="icon">{sport.icon}</div>
            <h2>{sport.name}</h2>
            <button className="explore-btn">Explore</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
