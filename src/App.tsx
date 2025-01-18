import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Headline from "./components/Headline";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Main from "./components/ProdSolGetStarted";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Clients />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
