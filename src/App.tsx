import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Headline from "./components/Headline";
import Clients from "./components/Clients";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Clients />
    </div>
  );
}

export default App;
