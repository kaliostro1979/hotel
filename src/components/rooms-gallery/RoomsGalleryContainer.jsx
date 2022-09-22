import React, {useContext, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Slider from "../UI/slider/Slider";
import RoomsNames from "./RoomsNames";
import SlidePrevButton from "../UI/slider/SliderPrevButton";
import SlideNextButton from "../UI/slider/SliderNextButton";
import {MainContext} from "../../context/MainContext";
import ActiveRoomImages from "./ActiveRoomImages";
import RoomOptions from "./RoomOptions";
import RoomDetails from "./RoomDetails";
import {getRoomsName} from "../../redux/slices/rooms.slice";

const RoomsGalleryContainer = ({rooms_names}) => {
    const {setSwiper} = useContext(MainContext)

    const prevRef = useRef(null);
    const nextRef = useRef(null);

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
                <ActiveRoomImages rooms_names={rooms_names && rooms_names}/>
            </div>
            <div>
                <RoomOptions rooms_names={rooms_names && rooms_names}/>
            </div>
            <div className={"RoomDetailsWrapper"}>
                <RoomDetails rooms_names={rooms_names && rooms_names}/>
            </div>
        </div>
    );
};

export default RoomsGalleryContainer;
