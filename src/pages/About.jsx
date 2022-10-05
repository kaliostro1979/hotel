import React, {useEffect} from 'react';
import {withTranslation} from 'react-i18next';
import HeroBanner from "../components/hero-banner/HeroBanner";
import {usePageContent} from "../hooks/usePageContent";
import ImageWithText from "../components/UI/image with text/ImageWithText";
import MediaGallery from "../components/media-gallery/MediaGallery";
import PartnersSlider from "../components/partners/PartnersSlider";
import Careers from "../components/careers/Careers";
import {useDispatch, useSelector} from "react-redux";
import {getAboutPageData} from "../redux/slices/about.slice";
import Preloader from "../components/UI/Preloader";
import {useLocation} from "react-router-dom";
import {getGalleryDataByPage} from "../redux/slices/gallery.slice";


const About = () => {
    const location = useLocation()
    const currentLocation = location.pathname.split("/")[2]
    const page_content = usePageContent()

    const { galleryData } = useSelector(state => state.main.gallery)
    const { data, isLoading, error } = useSelector(state => state.main.about)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAboutPageData())
    }, [dispatch])

    useEffect(()=>{
        if (currentLocation){
            dispatch(getGalleryDataByPage(currentLocation))
        }
    }, [dispatch, currentLocation])

    return (
        <>
            <HeroBanner page_content={page_content && page_content} />
            {error ? <h1>{error}</h1> : null}
            {
                isLoading ? <Preloader/> : data.map((item)=>{
                    return <ImageWithText data={item} key={item.id}/>
                })
            }
            <MediaGallery dataArray={galleryData}/>
            <PartnersSlider/>
            <Careers/>
        </>
    );
};

export default withTranslation()(About);
