import React from "react";
import Aabout from "./components/Aabout";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer."

export default function App() {
  return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <Aabout />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
  );
}
