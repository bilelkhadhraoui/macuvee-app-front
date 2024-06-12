// src/components/OnboardingStep3.js
import React from "react";
import { useNavigate } from "react-router-dom";
import imgSlide3 from "../assets/img/img-3.png";
const OnboardingStep3 = () => {
  const navigate = useNavigate();

  // const prevStep = () => {
  //     navigate('/onboarding/step2');
  // };

  const finish = () => {
    navigate("/home"); // Redirect to home or another route after onboarding
  };

  return (
    <div className="onboarding-wrap">
      <div className="inner-wrap">
        <div className="caroussel-page shadow">
          <img src={imgSlide3} alt="img" />
        </div>
        <div className="info-content">
          <h2>Votre créativité n’a pas de limite</h2>
          <p>
            Options de détourage, effets d’ombres, de lumières, et
            d’ambiance,...
          </p>

          <div className="page-nav">
            <span></span>
            <span></span>
            <span className="active"></span>
          </div>
        </div>
        <div className="footer-page">
          {/* <button className='btn btn-secondary' onClick={prevStep}>Passer</button> */}
          <button className="btn btn-primary" onClick={finish}>
            Je démarre
          </button>
        </div>
      </div>
    </div>

    // <div>
    //     <h2>Onboarding Step 3</h2>
    //     <p>You've reached the final step of onboarding!</p>
    //     <button onClick={prevStep}>Previous</button>
    //     <button onClick={finish}>Finish</button>
    // </div>
  );
};

export default OnboardingStep3;
