import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles.css'; // Bu dosya yolunun doğru olduğundan emin olun

import { Mousewheel, Pagination } from 'swiper/modules';
import ImagesData from '../../datas/ImagesData';

export default function CoachSlider() {

    return  (
        <Swiper
            direction="vertical"
            slidesPerView={1}
            spaceBetween={30}
            autoHeight={true}
            mousewheel={true}
            pagination={{

                clickable: true,
            }}
            modules={[Pagination, Mousewheel]}
            className="mySwiper"
        >
            {ImagesData.map((image, index) => (
                <SwiperSlide key={`slide-${index}`}>
                    <img src={image} alt={`Slide ${index + 1}`} loading="lazy" />
                </SwiperSlide>
            ))}
        </Swiper>
    ) 
}