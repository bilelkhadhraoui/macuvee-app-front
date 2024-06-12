// src/components/SplashScreen.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/onboarding');
        }, 3000); // Splash screen duration in milliseconds

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="splash-screen">
            <h1>Welcome to My App</h1>
        </div>
    );
};

export default SplashScreen;
