import React, {useEffect} from 'react';
import ImageWithAccordion from "../components/image-with-accordion/ImageWithAccordion";
import MediaGallery from "../components/media-gallery/MediaGallery";
import RoomsGalleryContainer from "../components/rooms-gallery/RoomsGalleryContainer";
import HeroBanner from "../components/hero-banner/HeroBanner";
import {useDispatch, useSelector} from "react-redux";
import {usePageContent} from "../hooks/usePageContent";
import SlideList from "../components/page-list/SlideList";
import {getHostelAccordionData} from "../redux/slices/hostel.slice";
import {useLocation} from "react-router-dom";
import {getGalleryDataByPage} from "../redux/slices/gallery.slice";
import {getInfoData} from "../redux/slices/info.slice";
import {getActiveRoomMeta, getRooms} from "../redux/slices/rooms-slider.slice";

const Hostel = () => {
    const location = useLocation()
    const currentLocation = location.pathname.split("/")[2]
    const dispatch = useDispatch()
    const page_content = usePageContent()

    const { tours } = useSelector(state => state.main.tours)
    const { galleryData } = useSelector(state => state.main.gallery)
    const { data } = useSelector(state => state.main.info)
    const { rooms, activeRoomMeta } = useSelector(state => state.main.rooms)

    useEffect(()=>{
        dispatch(getHostelAccordionData())
        dispatch(getInfoData())
        dispatch(getRooms())
    }, [dispatch])

    useEffect(()=>{
        if (rooms.length){
            dispatch(getActiveRoomMeta(rooms[0].id))
        }
    }, [dispatch, rooms])

    useEffect(()=>{
        if (currentLocation){
            dispatch(getGalleryDataByPage(currentLocation))
        }
    }, [dispatch, currentLocation])

    return (
        <>
            <HeroBanner page_content={page_content && page_content} />
            <RoomsGalleryContainer
                rooms={rooms}
                activeRoomMeta={activeRoomMeta}
            />
            <MediaGallery dataArray={galleryData}/>
            <SlideList sectionClass={"List SectionList"} data={data}/>
            <ImageWithAccordion data={tours}/>
        </>
    );
};

export default Hostel;
