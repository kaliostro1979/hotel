import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = ({
                    Component,
                    dataArray,
                    className,
                    sliderClassName,
                    loop,
                    slidesPerView,
                    centeredSlides,
                    spaceBetween
                }) => {

    return (
        <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop={loop}
            className={className}
            centeredSlides={centeredSlides}
        >
            {
                dataArray && dataArray.map(slide => {
                    return (
                        <SwiperSlide key={slide.name} className={sliderClassName}>
                            <Component data={slide}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};

export default Slider;
