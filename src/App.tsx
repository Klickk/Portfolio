import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Experience from "./components/pages/Experience";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content overflow-y-auto">
        <Header />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}

export default App;
