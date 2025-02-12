import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles.css'; // Bu dosya yolunun doğru olduğundan emin olun

import { Mousewheel, Pagination } from 'swiper/modules';

import SpeakersImagesData from '../../datas/SpeakersImagesData';

export default function SpeakerSlider() {
    // Slider ayarlarını useMemo ile optimize ediyoruz
    const swiperConfig = useMemo(() => ({
        direction: 'vertical',
        autoHeight: true,
        spaceBetween: 5,
        slidesPerView: 1,
        rewind: true,
        pagination: {
            clickable: true,
            dynamicBullets: true, // Daha modern pagination görünümü
        },
        mousewheel: {
            sensitivity: 0.3,    // Mouse tekerleğinin hassasiyeti (0.1 ile 1 arası    
            thresholdTime: 1000, // İki geçiş arasındaki minimum süre (milisaniye
            forceToAxis: true,   // Sadece dikey eksende kaydırma
        },
        speed: 1000,     
        

        mousewheelSnap: true,
        modules: [Mousewheel, Pagination],
        className: "mySwiper"
    }), []); // Boş dependency array ile sadece bir kez oluşturulur

    const slideStyles = useMemo(() => ({
        width: '100%',
        height: 'auto',
        objectFit: 'cover', // Görüntülerin daha iyi ölçeklenmesi için
        borderRadius: '8px', // Görüntülere yuvarlatılmış köşeler ekler
    }), []);

    return (
        <Swiper {...swiperConfig}>
            {SpeakersImagesData.map((image, index) => (
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