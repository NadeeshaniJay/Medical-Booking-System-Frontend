import React from "react";
import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleSignUp = () => {
        navigate('/signup');
    };

    return (
        <div className="homecontainer">
            <h1>Booking System</h1>
            <div className="homecontent">
                <p>Welcome to the booking system. Here you can book appointments with your favourite doctors.</p>
            </div>
            <div className="homefooter">
                <p>Click the button below to get started</p>
                <button className="signin-btn" onClick={handleLogin}>Sign In</button>
                <button className="signup-btn" onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
    );
}

export default Home;
