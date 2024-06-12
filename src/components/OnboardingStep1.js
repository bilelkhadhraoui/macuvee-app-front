// src/components/OnboardingStep1.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingStep1 = () => {
    const navigate = useNavigate();

    const nextStep = () => {
        navigate('/onboarding/step2');
    };

    return (
        <div>
            <h2>Onboarding Step 1</h2>
            <p>Welcome to the first step of onboarding!</p>
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default OnboardingStep1;
