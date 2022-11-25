import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Loggin from "./App";
import Admin from "./Admin";
import User from "./User";
import "./App.css";

export default function Index() {
  return (
    <div>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/loggin" element={<Loggin/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/user" element={<User/>} />
        </Routes>
      </React.StrictMode>
    </div>
  );
}
