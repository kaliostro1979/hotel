import React, { useEffect } from 'react';
import {useTranslation} from "react-i18next";
import ImagesWithHover from "../components/image-with-hover/ImagesWithHover";
import HeroBanner from "../components/hero-banner/HeroBanner";
import { usePageContent } from "../hooks/usePageContent";
import { useDispatch, useSelector } from "react-redux";
import { getHoveredImages } from "../redux/slices/image-with-hover.slice";

const UpcomingProjects = () => {
    const page_content = usePageContent()
    const {t} = useTranslation()

    const dispatch = useDispatch()
    const sections = useSelector(state => state.main.hoveredImage.sections)

    useEffect(()=>{
        dispatch(getHoveredImages())
    }, [])

    return (
        <>
            <HeroBanner page_content={page_content && page_content} />
            <br/>
            {
                sections && sections.map((section)=>{
                    return <ImagesWithHover section={section}/>
                })
            }
        </>
    );
};

export default UpcomingProjects;
