import React from "react";
import { Navigate } from "react-router-dom";

export const AuthRoute = (props) => {
    const { children } = props
    return localStorage.getItem('token') ? children : <Navigate to="/"/>
}