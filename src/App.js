import {Suspense, useContext, useEffect} from "react"
import RoutesModule from "./routes/Routes";
import {BrowserRouter} from "react-router-dom";
import MainProvider, {MainContext} from "./context/MainContext";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Preloader from "./components/UI/Preloader";
///*json-server --watch db.json --port 3004*/


function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <MainProvider>
                    <Suspense fallback={<Preloader/>}>
                        <RoutesModule/>
                    </Suspense>
                </MainProvider>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
