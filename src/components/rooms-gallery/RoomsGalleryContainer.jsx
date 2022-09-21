import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getActiveRoomImages, getRoomsName } from "../../redux/slices/rooms.gallery.slice";
import Slider from "../Slider";
import RoomsNames from "./RoomsNames";
import SlidePrevButton from "../slider/SliderPrevButton";
import SlideNextButton from "../slider/SliderNextButton";

const RoomsGalleryContainer = () => {
    const rooms_names = useSelector(state => state.main.rooms_gallery.rooms_name)
    const active_rooms_images = useSelector(state => state.main.rooms_gallery.active_room_images)
    const dispatch = useDispatch()
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        dispatch(getRoomsName())
        if (rooms_names.length) {
            dispatch(getActiveRoomImages(rooms_names[0].id))
        }
    }, [ rooms_names ])

    const handleActiveImage = (index)=>{
        setActiveIndex(index)
    }

    return (
        <div className={"Container"}>
            <div className={"RoomsGallerySlider"}>
                <Slider
                    dataArray={rooms_names}
                    Component={RoomsNames}
                    className={"RoomsGalleryContainerSlider"}
                    loop={false}
                    centeredSlides={false}
                    spaceBetween={30}
                    slidesPerView={"auto"}
                    sliderClassName={"RoomsGallerySliderItem"}
                />
                <div className={"RoomsGallerySliderArrows"}>
                    <SlidePrevButton/>
                    <SlideNextButton/>
                </div>
            </div>
            <div className={"ActiveRoomImagesContainer"}>
                {
                    active_rooms_images.images && active_rooms_images.images.map((image, index) => {
                        return (
                            <div
                                className={activeIndex === index ? "ActiveRoomImagesItem Active" : "ActiveRoomImagesItem"}
                                onClick={()=>handleActiveImage(index)}
                                key={image.id}
                            >
                                <img src={image.src} alt=""/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default RoomsGalleryContainer;