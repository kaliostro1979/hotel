import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar} from 'swiper';

const Slider = ({
                    Component,
                    dataArray,
                    className,
                    sliderClassName,
                    loop,
                    slidesPerView,
                    centeredSlides,
                    spaceBetween,
                    onSwiper,
                    prevEl,
                    nextEl
                }) => {

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            // onSlideChange={() => console.log('slide change')}
            onSwiper={onSwiper}
            loop={loop}
            className={className}
            centeredSlides={centeredSlides}
            navigation={{
                prevEl: prevEl,
                nextEl: nextEl
            }}
        >
            {
                dataArray && dataArray.map((slide, index) => {
                    return (
                        <SwiperSlide key={slide.id} className={sliderClassName}>
                            <Component data={slide} index={index}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};

export default Slider;
