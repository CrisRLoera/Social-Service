import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../views/Account/SignUp/SignUp";
import Home from "../views/Home/Home";
import LogIn from "../views/Account/LogIn/LogIn"
import Events from "../views/Events/Events";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<SignUp />} />
            <Route path="/logIn" element={<LogIn/>}/>
            <Route path="/events" element={<Events/>}/>
            {/* Otras rutas aquí */}
        </Routes>
    );
}

export default AppRoutes;
