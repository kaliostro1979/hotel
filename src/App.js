import {Suspense} from "react"
import RoutesModule from "./routes/Routes";
import {BrowserRouter} from "react-router-dom";
import MainProvider from "./context/MainContext";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <MainProvider>
                <Suspense fallback="loading">
                    <RoutesModule/>
                </Suspense>
            </MainProvider>
        </BrowserRouter>
    );
}

export default App;
