import React from 'react';
import Slider from "../Slider";
import { GALLERY_ITEMS } from "../../constants/gallery.constants";
import MediaGalleryItem from "./MediaGalleryItem";

const MediaGallery = () => {
    return (
        <div className={"MediaGallery Section"}>
            <Slider
                dataArray={GALLERY_ITEMS}
                Component={MediaGalleryItem}
                sliderClassName={"MediaSlider"}
                slidesPerView={"auto"}
                loop={false}
                centeredSlides={false}
                spaceBetween={20}
            />
        </div>
    );
};

export default MediaGallery;