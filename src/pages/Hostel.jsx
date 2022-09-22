import React, {useEffect} from 'react';
import ImageWithAccordion from "../components/image-with-accordion/ImageWithAccordion";
import MediaGallery from "../components/media-gallery/MediaGallery";
import RoomsGalleryContainer from "../components/rooms-gallery/RoomsGalleryContainer";
import HeroBanner from "../components/hero-banner/HeroBanner";
import {getRoomsName} from "../redux/slices/rooms.slice";
import {useDispatch, useSelector} from "react-redux";
import {usePageContent} from "../hooks/usePageContent";

const Hostel = () => {

    const rooms_names = useSelector(state => state.main.rooms_gallery.rooms_name)
    const dispatch = useDispatch()
    const page_content = usePageContent("hostel")

    useEffect(() => {
        dispatch(getRoomsName())
    }, [ rooms_names, dispatch ])

    return (
        <>
            <HeroBanner page_content={page_content && page_content} />
            <RoomsGalleryContainer rooms_names={rooms_names}/>
            <MediaGallery/>
            <ImageWithAccordion/>
        </>
    );
};

export default Hostel;
