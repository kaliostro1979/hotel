import Slider from "./components/Slider";
import PageList from "./components/page-list/PageList";
import RoutesModule from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import MainProvider from "./context/MainContext";
import React from "react";

function App() {
  return (
    <BrowserRouter>
        <MainProvider>
            <RoutesModule/>
        </MainProvider>
    </BrowserRouter>
  );
}

export default App;
