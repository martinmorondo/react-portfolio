import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/home/home";
import { About } from './components/about/About';
import { Portfolio } from "./components/portfolio/portfolio";
import { Contact } from './components/contact/Contact';
import { Socialicons } from "./components/socialIcons/icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function AnimatedRoutes() {
  // Utilizamos el hook directamente para obtener la ubicación actual
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{
          enter: 400,
          exit: 400,
        }}
        classNames="page"
        unmountOnExit
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function AppRoutes() {
  return (
    <div className="s-c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;