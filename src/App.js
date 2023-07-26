import React from "react";
import './App.css'
import Login from "./Login";
import Dashbord from "./Dashbord";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import ChangePassword from "./ChangePassword";
import Profile from "./Profile";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Link to="/Login">Login</Link> |
        <Link to="/Dashbord">Dashbord</Link> |
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashbord" element={<Dashbord />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/Profile" element={<Profile />} />
          <Route ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;