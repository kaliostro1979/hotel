import React, { useContext } from 'react';
import Layout from "../components/layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Hostel from "../pages/Hostel";
import About from "../pages/About";
import Booking from "../pages/Booking";
import Tours from "../pages/Tours";
import Stories from "../pages/Stories";
import UpcomingProjects from "../pages/UpcomingProjects";
import { MainContext } from "../context/MainContext";
import PageNotFound from "../pages/404";

const RoutesModule = () => {
  const {activeLanguage} = useContext(MainContext)

  return (
    <Layout>
      <Routes>
        <Route exact path={`/${activeLanguage}`} element={<Home/>}/>
        <Route element={<Navigate to={`/${activeLanguage}`} replace />}/>
        <Route exact path={`/${activeLanguage}/hostel`} element={<Hostel/>}/>
        <Route exact path={`/${activeLanguage}/about`} element={<About/>}/>
        <Route exact path={`/${activeLanguage}/booking`} element={<Booking/>}/>
        <Route exact path={`/${activeLanguage}/tours`} element={<Tours/>}/>
        <Route exact path={`/${activeLanguage}/stories`} element={<Stories/>}/>
        <Route exact path={`/${activeLanguage}/upcoming-projects`} element={<UpcomingProjects/>}/>
        <Route path={"*"} element={<PageNotFound/>}/>
      </Routes>
    </Layout>
  );
};

export default RoutesModule;
