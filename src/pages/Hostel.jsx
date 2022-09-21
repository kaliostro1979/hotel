import React from 'react';
import {useTranslation} from "react-i18next";
import ImageWithAccordion from "../components/image-with-accordion/ImageWithAccordion";
import MediaGallery from "../components/media-gallery/MediaGallery";
import RoomsGalleryContainer from "../components/rooms-gallery/RoomsGalleryContainer";

const Hostel = () => {

    const {t} = useTranslation()

    return (
        <>
            <div className={"Container"}>
                <h1>{t("title.hostel")}</h1>
            </div>
            <RoomsGalleryContainer/>
            <MediaGallery/>
            <ImageWithAccordion/>
        </>
    );
};

export default Hostel;
