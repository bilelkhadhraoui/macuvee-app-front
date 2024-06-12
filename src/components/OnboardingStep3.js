// src/components/OnboardingStep3.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingStep3 = () => {
    const navigate = useNavigate();

    const prevStep = () => {
        navigate('/onboarding/step2');
    };

    const finish = () => {
        navigate('/home'); // Redirect to home or another route after onboarding
    };

    return (
        <div>
            <h2>Onboarding Step 3</h2>
            <p>You've reached the final step of onboarding!</p>
            <button onClick={prevStep}>Previous</button>
            <button onClick={finish}>Finish</button>
        </div>
    );
};

export default OnboardingStep3;
