"use client"

import AboutUs from "./components/AboutUs";
import Charts from "./components/Charts";
import Hero from "./components/Hero";
import News from "./components/News";
import OurServices from "./components/OurServices";
import Partners from "./components/Partners";
import Philosophy from "./components/Philosophy";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
  <>
    <Hero />
    <Partners />
    <AboutUs />
    <OurServices />
    <Philosophy />
    <Charts />
    <News />
    <Pricing />
    {/* <Testimonials /> */}
  </>
  );
}
