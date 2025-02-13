import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles.css'; // Bu dosya yolunun doğru olduğundan emin olun

import { Mousewheel, Pagination } from 'swiper/modules';
import ImagesData from '../../datas/ImagesData';

export default function CoachSlider() {
    // Slider ayarlarını useMemo ile optimize ediyoruz
    const swiperConfig = useMemo(() => ({
        direction: 'vertical',
        autoHeight: true,
        pagination: {
            clickable: true,
            el : '.swiper-pagination',
        },
        modules: [Pagination,Mousewheel],
        className: "mySwiper"
    }), []); // Boş dependency array ile sadece bir kez oluşturulur

    const slideStyles = useMemo(() => ({
        width: '100%',
        height: 'auto',
        objectFit: 'contain', // Görüntülerin daha iyi ölçeklenmesi için
        borderRadius: '8px', // Görüntülere yuvarlatılmış köşeler ekler
    }), []);

    return (


        <Swiper {...swiperConfig}>
            {ImagesData.map((image, index) => (
                <SwiperSlide key={`slide-${index}`}>
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        style={slideStyles}
                        loading="lazy" // Lazy loading ekledik
                    />
                </SwiperSlide>
            ))}
        </Swiper>







    );
}