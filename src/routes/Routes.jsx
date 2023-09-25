import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "../views/Account/SignUp/SignUp";
import Home from "../views/Home/Home";

function AppRoutes() {
    return (
        <Router>
            <Routes> { }
                <Route path="/" element={<Home />} /> { }
                <Route path="/registro" element={<SignUp />} />
                {/* Otras rutas aquí */}
            </Routes>
        </Router>
    );
}

export default AppRoutes;
