import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { Navbar } from "../../ui/components/Navbar";
import DcPage from "../pages/DcPage";
import HeroPage from "../pages/HeroPage";
import MarvelPage from "../pages/MarvelPage";
import SearchPage from "../pages/SearchPage";

const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/marvel" />}></Route>
          <Route path="marvel" element={<MarvelPage />}></Route>
          <Route path="dc" element={<DcPage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
          <Route path="hero/:id" element={<HeroPage />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default HeroesRoutes;
