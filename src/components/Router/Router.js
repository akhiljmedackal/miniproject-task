import React from 'react'
import {
    Route,
    Routes,
  } from "react-router-dom";
import Home from '../Home/Home';
import Login from '../Login/Login';
import Services from '../Services/Services';

function Routers() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/services" element={<Services/>} />

        </Routes>
        </div>
  )
}

export default Routers;