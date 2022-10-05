import React, { useEffect } from 'react';
import ImagesWithHover from "../components/image-with-hover/ImagesWithHover";
import HeroBanner from "../components/hero-banner/HeroBanner";
import { usePageContent } from "../hooks/usePageContent";
import { useDispatch, useSelector } from "react-redux";
import { getHoveredImages } from "../redux/slices/image-with-hover.slice";

const UpcomingProjects = () => {
    const page_content = usePageContent()

    const dispatch = useDispatch()
    const hoveredImage = useSelector(state => state.main.hoveredImage)

    useEffect(()=>{
        dispatch(getHoveredImages())
    }, [dispatch])

    return (
        <>
            <HeroBanner page_content={page_content && page_content} />
            <br/>
            {
                hoveredImage && hoveredImage.sections.map((section)=>{
                    return <ImagesWithHover section={section} key={section.id}/>
                })
            }
        </>
    );
};


export default UpcomingProjects;
