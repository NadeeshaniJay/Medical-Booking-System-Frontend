import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./profile.css";

function Profile() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [mobilenumber, setMobilenumber] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const userId = id;
        console.log(userId);
        async function fetchData() {
        try {
            const response = await axios.get(`https://health-hub-booking-1b53756b01c6.herokuapp.com/user/${id}`);
            setFirstname(response.data.firstname);
            setLastname(response.data.lastname);
            setMobilenumber(response.data.mobilenumber);
            setEmail(response.data.email);
            setImage(response.data.image);
            console.log('Image URL:', response.data.image);
        } catch (error) {
            console.error("Error:", error);
        }
        }
        fetchData();
    }, [id]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div className="profile-container">
        <button onClick={handleLogout}>Logout</button>
        <h1>Profile</h1>
        <h2>
            {firstname} {lastname}
        </h2>
        {image && <img src={image} alt={`${firstname} ${lastname}`} />}
        
        <hr />
        <div className="details">
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Mobile Number: {mobilenumber}</p>
        </div>
        
        </div>
    );
}

export default Profile;
