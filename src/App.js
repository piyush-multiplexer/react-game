import React from "react";
import NavBar from "./components/NavBar";
import Log from "./components/Log";
import "./demo.css";

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Log />
    </div>
  );
}
