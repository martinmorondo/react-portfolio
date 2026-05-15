import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";

import AppRoutes from "./routes";
import Header from './components/header/Header';
import AnimatedCursor from "./hooks/AnimatedCursor";
import './App.css';

function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return children;
}

export default function App() {
  return (
    <Router>
      <div className='cursor-dot'>
      <AnimatedCursor 
        innerSize = {15}
        outerSize = {15}
        color = "255, 255, 255"
        outerAlpha = {0.4}
        innerScale = {0.7}
        outerScale = {5}
      />
      </div>
      <ScrollToTop>
        <Header />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}

