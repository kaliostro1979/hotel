import React from 'react';
import {withTranslation} from 'react-i18next';
import HeroBanner from "../components/hero-banner/HeroBanner";
import {usePageContent} from "../hooks/usePageContent";
import ImageWithText from "../components/UI/image with text/ImageWithText";
import MediaGallery from "../components/media-gallery/MediaGallery";
import PartnersSlider from "../components/partners/PartnersSlider";
import Careers from "../components/careers/Careers";
import {GALLERY_ITEMS} from "../mock_data/gallery.data";


const About = () => {
    const page_content = usePageContent("about")
    const dataArray = GALLERY_ITEMS


    return (
        <>
            <HeroBanner page_content={page_content && page_content} />
            <ImageWithText/>
            <MediaGallery dataArray={dataArray}/>
            <PartnersSlider/>
            <Careers/>
        </>
    );
};

export default withTranslation()(About);
