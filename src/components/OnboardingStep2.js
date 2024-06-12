// src/components/OnboardingStep2.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgSlide2 from '../assets/img/img-2.png';
const OnboardingStep2 = () => {
    const navigate = useNavigate();

    const nextStep = () => {
        navigate('/onboarding/step3');
    };

    const prevStep = () => {
        navigate('/onboarding/step1');
    };

    return (


        <div className="onboarding-wrap">
        <div className='inner-wrap'>
        <div className='caroussel-page shadow'>
            <img src={imgSlide2} alt="img" />
        </div>
        <div className="info-content">
        <h2>Boostez votre marque</h2>
        <p>Avec du contenu visuel percutant, personalisé à votre image.</p>
        <div className="page-nav">
            <span></span>
            <span className="active"></span>
            <span></span>
          </div>
        </div>
        <div className='footer-page'>
        <button className='btn btn-secondary' onClick={prevStep}>Passer</button>
        <button className='btn btn-primary' onClick={nextStep}>Suivant</button>
        </div>
        </div>
    </div>
     
    );
};

export default OnboardingStep2;
