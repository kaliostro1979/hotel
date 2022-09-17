import React from 'react';
import Layout from "../components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Hostel from "../pages/Hostel";
import About from "../pages/About";
import Booking from "../pages/Booking";
import Tours from "../pages/Tours";
import Stories from "../pages/Stories";
import UpcomingProjects from "../pages/UpcomingProjects";

const RoutesModule = () => {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/hostel"} element={<Hostel/>}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/booking"} element={<Booking/>}/>
        <Route path={"/tours"} element={<Tours/>}/>
        <Route path={"/stories"} element={<Stories/>}/>
        <Route path={"/upcoming-projects"} element={<UpcomingProjects/>}/>
      </Routes>
    </Layout>
  );
};

export default RoutesModule;
