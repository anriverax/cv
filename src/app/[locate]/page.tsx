"use client";

import AOS from "aos";
import { About } from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Header from "@/components/ui/Header";
import Portfolio from "@/components/ui/Portfolio";
import Skill from "@/components/ui/Skill";
import { Timelie } from "@/components/ui/Timeline";
import Wrapper from "@/components/ui/Wrapper";
import { useEffect } from "react";
import Btn from "@/components/Btn";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 300,
      easing: "ease-in-sine",
      once: true
    });
  });

  return (
    <div>
      <main className="relative bg-[#20396f] ">
        <Header />

        <div className="h-screen" id="home">
          <div className="mx-auto max-w-7xl">
            <Wrapper />
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 40" preserveAspectRatio="none">
              <path className="fill-white">
                <animate
                  attributeName="d"
                  begin="0s"
                  dur="5s"
                  repeatCount="indefinite"
                  values="
                      M0,0 C200,7.11236625e-15 200,40 400,40 C600,40 800,0 1000,0 L1000,50 L0,50 L0,0 Z;
                      M0,40 C200,40 400,0 600,0 C800,0 800,40 1000,40 L1000,50 L0,50 L0,40 Z;
                      M0,30 C200,30 200,0 400,0 C600,0 800,40 1000,40 L1000,50 L0,50 L0,30 Z;
                      M0,0 C200,7.11236625e-15 200,40 400,40 C600,40 800,0 1000,0 L1000,50 L0,50 L0,0 Z;"
                ></animate>
              </path>
            </svg>
          </div>
        </div>
      </main>

      <About />

      <Skill />
      <Portfolio />
      <Timelie />
      <Contact />
      <footer className="py-2">
        <div className="relative mx-auto max-w-7xl text-center">
          Copyright © {new Date().getFullYear()} - Aníbal A. Rivera
        </div>
      </footer>
      <Btn />
    </div>
  );
}
