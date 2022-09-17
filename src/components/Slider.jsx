import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

const Slider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div>
                    Slide 1
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    Slide 2
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    Slide 3
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    Slide 4
                </div>
            </SwiperSlide>
            ...
        </Swiper>
    );
};

export default Slider;
