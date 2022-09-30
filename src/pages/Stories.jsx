import React, { useEffect } from 'react';
import {useTranslation} from "react-i18next";
import HeroBanner from "../components/hero-banner/HeroBanner";
import {usePageContent} from "../hooks/usePageContent";
import { useDispatch, useSelector } from "react-redux";
import { getToursAction } from "../redux/actions/getToursAction";

const Stories = () => {
    const {t} = useTranslation()
    const page_content = usePageContent("stories")

    /*const dispatch = useDispatch()
    const tours = useSelector(state => state.main.tours.tours)

    useEffect(()=>{
        dispatch(getToursAction())
    }, [dispatch])*/

    return (
        <HeroBanner page_content={page_content && page_content} />
    );
};

export default Stories;
