import React, {useEffect} from 'react';
import ImageWithAccordion from "../components/image-with-accordion/ImageWithAccordion";
import MediaGallery from "../components/media-gallery/MediaGallery";
import RoomsGalleryContainer from "../components/rooms-gallery/RoomsGalleryContainer";
import HeroBanner from "../components/hero-banner/HeroBanner";
import {getRoomsName} from "../redux/slices/rooms.slice";
import {useDispatch, useSelector} from "react-redux";
import {usePageContent} from "../hooks/usePageContent";
import {GALLERY_ITEMS} from "../mock_data/gallery.data";
import { ACCORDION_ITEMS } from "../mock_data/accordion.data";
import SlideList from "../components/page-list/SlideList";
import { INFO_DATA_LIST } from "../mock_data/hotel.info.data";

const Hostel = () => {

    const rooms_names = useSelector(state => state.main.rooms_gallery.rooms_name)
    const dispatch = useDispatch()
    const page_content = usePageContent("hostel")
    const dataArray = GALLERY_ITEMS

    useEffect(() => {
        dispatch(getRoomsName())
    }, [ rooms_names, dispatch ])

    return (
        <>
            <HeroBanner page_content={page_content && page_content} />
            <RoomsGalleryContainer rooms_names={rooms_names}/>
            <MediaGallery dataArray={dataArray}/>
            <SlideList sectionClass={"List SectionList"} data={INFO_DATA_LIST}/>
            <ImageWithAccordion data={ACCORDION_ITEMS.tours}/>
        </>
    );
};

export default Hostel;
