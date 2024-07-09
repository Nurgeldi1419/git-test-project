import React from "react";
import Mainbox from "./components/Mainbox";
import Section from "./components/Section";
import Intro from "./components/Intro";
import Cta from "./components/Cta";
import IntroCopy from "./components/IntroCopy";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
// import IntroCopy from "./components/Section3";

function App() {
  return (
    <section>
      <Mainbox />
      <Section />
      <Intro />
      <IntroCopy />
      <Cta />
      <Pricing />
      <Footer />
    </section>
  );
}

export default App;
