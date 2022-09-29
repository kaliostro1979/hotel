import {Suspense, useContext, useEffect} from "react"
import RoutesModule from "./routes/Routes";
import {BrowserRouter} from "react-router-dom";
import MainProvider, {MainContext} from "./context/MainContext";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <MainProvider>
                    <Suspense fallback="loading">
                        <RoutesModule/>
                    </Suspense>
                </MainProvider>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
