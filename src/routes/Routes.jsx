import React, {useContext} from 'react';
import Layout from "../layout/Layout";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Hostel from "../pages/Hostel";
import About from "../pages/About";
import Booking from "../pages/Booking";
import Tours from "../pages/Tours";
import Stories from "../pages/Stories";
import UpcomingProjects from "../pages/UpcomingProjects";
import {MainContext} from "../context/MainContext";
import PageNotFound from "../pages/404";
import Page from "../pages/dynamic-page/Page";

const RoutesModule = () => {
    const {activeLanguage} = useContext(MainContext)

    return (
        <Layout>
            <Routes>
                <Route index element={<Navigate to={`/${activeLanguage}`} replace/>}/>
                <Route path={`/${activeLanguage}`}>
                    <Route path={``} element={<Home/>}/>
                    <Route path={`hostel`} element={<Hostel/>}/>
                    <Route path={`about`} element={<About/>}/>
                    <Route path={`booking`} element={<Booking/>}/>
                    <Route path={`tours`} element={<Tours/>}/>
                    <Route path={`stories`} element={<Stories/>}/>
                    <Route path={`upcoming-projects`} element={<UpcomingProjects/>}/>
                    <Route path={`page`}>
                        <Route path={`:id`} element={<Page/>}/>
                    </Route>
                    <Route path={"*"} element={<PageNotFound/>}/>
                </Route>
            </Routes>
        </Layout>
    );
};

export default RoutesModule;
