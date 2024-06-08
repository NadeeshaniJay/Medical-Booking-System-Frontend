import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async () => {
        console.log("API URL:", process.env.REACT_APP_API_URL);
        try {
            const response = await axios.post(`https://health-hub-booking-1b53756b01c6.herokuapp.com/user/login`, { email, password });
            const { status, user } = response.data;

            if (status === "success") {
                navigate(`/profile/${user._id}`);
            } else if (status === "incorrect password") {
                alert("Incorrect Password");
            } else if (status === "user not found") {
                alert("User not found");
            } else {
                alert("Login Failed");
            }
        } catch (error) {
            alert("An error occurred during sign in. Please try again.");
        }
    };

    return (
        <div className="signincontainer">
            <div className='signinheader'>
                <h1>Sign In</h1>
            </div>
            <div className='signininputs'>
                <div className='signininputfield'>
                    <label>Email Address</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div className='signinbottom'>
                <div className='signinbutton'>
                    <button onClick={handleSignIn}>Sign In</button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
