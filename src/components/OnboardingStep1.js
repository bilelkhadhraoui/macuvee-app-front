// src/components/OnboardingStep1.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgSlide1 from '../assets/img/img-1.png';
const OnboardingStep1 = () => {
    const navigate = useNavigate();

    const nextStep = () => {
        navigate('/onboarding/step2');
    };

    return (
        <div className="onboarding-wrap">
            <div className='inner-wrap'>
            <div className='caroussel-page'>
                <img src={imgSlide1} alt="img" />
            </div>
            <div className="info-content">
            <h2>Transformez votre bouteille</h2>
            <p>en une photo réaliste et captivante !</p>
            <div className="page-nav">
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>
            </div>
            <div className='footer-page'>
            <button className='btn btn-secondary' onClick={nextStep}>Passer</button>
            <button className='btn btn-primary' onClick={nextStep}>Suivant</button>
            </div>
            </div>
        </div>
    );
};

export default OnboardingStep1;
