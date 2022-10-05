import React, {useEffect} from 'react';
import SlideList from "../components/page-list/SlideList";
import {useDispatch, useSelector} from "react-redux";
import {getHomeData} from "../redux/slices/home.slice";
import Preloader from "../components/UI/Preloader";

const Home = () => {
    const dispatch = useDispatch()
    const {data, isLoading, error} = useSelector(state => state.main.home)

    useEffect(()=>{
        dispatch(getHomeData())
    }, [dispatch])

    return (
        <div className={"Home"}>
            {error ? <h1>{error}</h1> : null}
            {
                isLoading ? <Preloader/> : <SlideList sectionClass={"List"} data={data}/>
            }
        </div>
    );
};

export default Home;
