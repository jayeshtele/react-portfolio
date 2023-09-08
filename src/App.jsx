import React from "react";
import { Route, Routes } from "react-router-dom";
import SideNav from "./components/SideNav";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Container from "./components/Container";

export default function App() {
  return (
    <div className="flex ">
      <SideNav />
      <Routes>
        <Route index element={<Container />} />
      </Routes>
    </div>
  );
}
