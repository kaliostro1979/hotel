import React, {useContext, useRef} from 'react';
import Slider from "../UI/slider/Slider";
import RoomsNames from "./RoomsNames";
import SlidePrevButton from "../UI/slider/SliderPrevButton";
import SlideNextButton from "../UI/slider/SliderNextButton";
import {MainContext} from "../../context/MainContext";
import ActiveRoomImages from "./ActiveRoomImages";
import RoomOptions from "./RoomOptions";
import RoomDetails from "./RoomDetails";

const RoomsGalleryContainer = ({rooms_names, rooms, activeRoomMeta}) => {
    const {setSwiper} = useContext(MainContext)

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className={"Container"}>
            <div className={"RoomsGallerySlider"}>
                <Slider
                    dataArray={rooms}
                    Component={RoomsNames}
                    className={"RoomsGalleryContainerSlider"}
                    loop={false}
                    centeredSlides={false}
                    spaceBetween={30}
                    slidesPerView={"auto"}
                    sliderClassName={"RoomsGallerySliderItem"}
                    prevEl={prevRef?.current}
                    nextEl={nextRef?.current}
                    onSwiper={(swiper) => setSwiper(swiper)}
                />
                <div className={"RoomsGallerySliderArrows"}>
                    <SlidePrevButton ref={prevRef}/>
                    <SlideNextButton ref={nextRef}/>
                </div>
            </div>
            <div className={"ActiveRoomImagesContainer"}>
                <ActiveRoomImages rooms_names={rooms_names && rooms_names} activeRoomMeta={activeRoomMeta}/>
            </div>
            <div>
                <RoomOptions rooms_names={rooms_names && rooms_names} activeRoomMeta={activeRoomMeta}/>
            </div>
            <div className={"RoomDetailsWrapper"}>
                <RoomDetails rooms_names={rooms_names && rooms_names} activeRoomMeta={activeRoomMeta}/>
            </div>
        </div>
    );
};

export default RoomsGalleryContainer;
