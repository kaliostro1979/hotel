import React from 'react';
import Layout from "../components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const RoutesModule = () => {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
      </Routes>
    </Layout>
  );
};

export default RoutesModule;