"use client";
import { StarsCanvas } from "../components/canvas";
import {Navbar,Hero,About,Tech,Works,Experience,Contact,Footer} from "@/components";
export default function Home() {
  return (
    <div className="relative z-0 bg-primary ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <Experience />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer/>
        </div>
      </div>
  )
}
