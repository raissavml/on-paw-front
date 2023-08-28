import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../templates/pages/user/Login";
import Register from "../templates/pages/user/Register";

export default function AppRoutes() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            </Routes>
            </BrowserRouter>
    )
}