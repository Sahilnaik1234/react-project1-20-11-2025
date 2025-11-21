import React from "react";
import NavBar from "./components/navBar";
import Card from "./components/card";
import "./App.css";  

function App() {
  return (
    <div className="app-con">
      <NavBar />

      <div className="card-container">
        <Card title="Card 1" description="This is the first card." />
        <Card title="Card 2" description="This is the second card." />
        <Card title="Card 3" description="This is the third card." />
      </div>
    </div>
  );
}

export default App;
