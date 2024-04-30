// App.js

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin} from "gsap/all";
import {Element as ScrollableElement} from "react-scroll";
import { Hero } from "./Hero.js";
import ProjectSection from "./ProjectSection.js";
import About from "./About.js";
import Contact from "./Contact.js";
import "./main.css";
import "./projectcard.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SpeedDialTooltipOpen  from "./SpeedDial";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  useEffect(() => {
    let panels = gsap.utils.toArray(".panel"),
        observer = ScrollTrigger.normalizeScroll(true),
        scrollTween;

    // on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
    document.addEventListener("touchstart", e => {
      if (scrollTween) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }, {capture: true, passive: false})

    const goToSection = (i) => {
      scrollTween = gsap.to(window, {
        scrollTo: {y: i * window.innerHeight, autoKill: false},
        onStart: () => {
          observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
          observer.enable();
        },
        duration: 1,
        onComplete: () => scrollTween = null,
        overwrite: true
      });
    }

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=199%",
        onToggle: self => self.isActive && !scrollTween && goToSection(i)
      });
    });

    ScrollTrigger.create({
      start: 0, 
      end: "max",
      snap: 1 / (panels.length - 1)
    });

     
  }, []);

  const scrollToSection = (sectionName) => {
    const element = document.querySelector(`[name="${sectionName}"]`);
    if (element) {
        const targetPosition = element.offsetTop;
        gsap.to(window, {
            scrollTo: { y: targetPosition, autoKill: false },
            duration: 1, // Adjust the duration as needed
            ease: "power2.inOut" // Adjust the easing function as needed
        });
    }
};


  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/">
      <ScrollableElement name="Hero">
        <Hero />
      </ScrollableElement>
      </Route>
      <Route path="/About">
      <ScrollableElement name="About"> 
        <About />
      </ScrollableElement>
      </Route>
      <Route path="/ProjectSection">
      <ScrollableElement name="ProjectSection">
        <ProjectSection />
      </ScrollableElement>
      </Route>
      <Route path="/Contact ">
      <ScrollableElement name="Contact">
        <Contact />
      </ScrollableElement>
      </Route>
      <SpeedDialTooltipOpen scrollToSection={scrollToSection}/>
      </Routes>
    </div>
    
    </Router>
  );
}

export default App;
