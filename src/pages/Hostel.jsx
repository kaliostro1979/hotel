import React from 'react';
import {useTranslation} from "react-i18next";
import ImageWithAccordion from "../components/image-with-accordion/ImageWithAccordion";
import MediaGallery from "../components/media-gallery/MediaGallery";

const Hostel = () => {

    const {t} = useTranslation()

    return (
        <div>
            <h1>{t("title.hostel")}</h1>
            <MediaGallery/>
            <ImageWithAccordion/>
        </div>
    );
};

export default Hostel;
