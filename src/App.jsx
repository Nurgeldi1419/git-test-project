import React from "react";
import Navbar from "./components/Navbar";
import Mainbox from "./components/Mainbox";
import Section from "./components/Section";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <section>
      <Navbar />
      <Mainbox />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Pricing />
      <Footer />
    </section>
  );
}

export default App;
