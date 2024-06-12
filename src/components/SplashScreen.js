// src/components/SplashScreen.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../assets/img/logo.svg";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 3000); // Splash screen duration in milliseconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <div className="logo-app">
        <img src={logoImage} alt="Macuvee" />
      </div>

      <div class="loader">
        <div className="loader-inner ball-spin-fade-loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
