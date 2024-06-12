// src/components/OnboardingStep2.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingStep2 = () => {
    const navigate = useNavigate();

    const nextStep = () => {
        navigate('/onboarding/step3');
    };

    const prevStep = () => {
        navigate('/onboarding/step1');
    };

    return (
        <div>
            <h2>Onboarding Step 2</h2>
            <p>Here is the second step of onboarding!</p>
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default OnboardingStep2;
