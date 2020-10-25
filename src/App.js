import React from "react";
import CounterGroup from "./components/CounterGroup";
import "./App.css";

function App() {
  const size = 3;
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup size={size} />
      </header>
    </div>
  );
}

export default App;
