import { useState } from 'react';
import './signUp.css';
import axios from 'axios';

const Signup =()=>{
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, mobilenumber, email, password, image};
        await axios.post(`https://health-hub-booking-1b53756b01c6.herokuapp.com/user/add`, newUser);
        alert("User Added");
        
        window.location = "/";
    };

    return(
        <div className="signupcontainer">
            <div className='signupheader'>
                <h1>Sign Up</h1>
            </div>
            <div className='signupinputs'>
                <div className='signupinputfield'>
                    <label>First Name</label>
                    <input type='text' value={firstname} onChange={(e)=>setFirstName(e.target.value)}></input>
                    <label>Last Name</label>
                    <input type='text' value={lastname} onChange={(e)=>setLastName(e.target.value)}></input>
                    <label>Email Address</label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    <label>Mobile Number</label>
                    <input type='text' value={mobilenumber} onChange={(e)=>setMobileNumber(e.target.value)}></input>
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                    <label>Profile Picture</label>
                    <input type='text' value={image} onChange={(e)=>setImage(e.target.value)}></input>
                </div>
            </div>
            <div className='signupbottom'>
                <div className='signupbutton'>
                    <button onClick={handleSignUp}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;