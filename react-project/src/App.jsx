import React, { useState } from "react";
import Navbar from "./compnents/navbar/Navbar";
import Hero from "./compnents/Hero/Hero";
import Types from "./compnents/Types/Types";
import Title from "./compnents/title/Title";
import About from "./compnents/About/About";
import Plant from "./compnents/plant/Plant";
import Feedback from "./compnents/feedback/Feedback";
import Contact from "./compnents/cantact/Contact";
import Footer from "./compnents/footer/Footer";
import Vedio from "./compnents/vedio/Vedio";

function App() {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        <Title subtitle="Our services" title="what we offer" />
        <Types />
        <About setPlayState={setPlayState} />
        <Title subtitle="Shop" title="Category" />
        <Plant />
        <Title subtitle="Feedback" title="What they Say about us" />
        <Feedback />
        <Title subtitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <Vedio playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
