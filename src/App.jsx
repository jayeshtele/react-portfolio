import React from "react";
import SideNav from "./components/SideNav";
import Container from "./components/Container";

export default function App() {
  return (
    <div className="md:flex">
      <SideNav />
      <Container />
    </div>
  );
}
