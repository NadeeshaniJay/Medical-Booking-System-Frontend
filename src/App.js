import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/homepage/home';
import SignIn from "./components/loginPage/login";
import SignUp from "./components/signUpPage/signUp";
import Profile from "./components/profilePage/profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/profile/:id" element={<Profile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
