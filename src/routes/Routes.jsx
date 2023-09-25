import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../views/Account/SignUp/SignUp";
import Home from "../views/Home/Home";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<SignUp />} />
            {/* Otras rutas aquí */}
        </Routes>
    );
}

export default AppRoutes;
