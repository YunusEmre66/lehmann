import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles.css'; // Bu dosya yolunun doğru olduğundan emin olun

import { Mousewheel, Pagination } from 'swiper/modules';
import ImagesData from '../../datas/ImagesData';

export default function CoachSlider() {

    return (
        <Swiper
            direction="vertical"
            slidesPerView={1}
            spaceBetween={30}
            autoHeight={true}
            mousewheel={true}
            loop={true}
            pagination={{
                clickable: true,
                
            }}
            modules={[Pagination, Mousewheel]}
            className="mySwiper"
        >
            {ImagesData.map((image, index) => (
                <SwiperSlide 
                key={`slide-${index}`
                
                }>
                    <LazyLoadImage
                        src={image}
                        alt={`Slide ${index + 1}`}
                        // effect="black-and-white"
                        // effect="blur"
                        effect='opacity'
                        width="100%"
                        height="auto"
                        style={{
                            transition: 'transform 1.2s ease-in-out, opacity 3s ease-in-out', // Görselin açılma animasyonu
                            opacity: 1, // Başlangıçta opaklık 0
                            transform: 'scale(2)', // Başlangıçta daha küçük
                        }}
                        debounce={900}  // Görsel yüklenmeden önce 400 milisaniye bekleyin
                        useIntersectionObserver={true} // IntersectionObserver kullanarak görsel yükleyin, PERFORMANS
                        
                        afterLoad={() => {
                            // Görsel yüklendikten sonra animasyonu başlat
                            const imageElement = document.querySelectorAll(`img[alt="Slide ${index + 1}"]`)[0];
                            if (imageElement) {
                                imageElement.style.opacity = 1; // Opaklık 1 yaparak görünür kıl
                                imageElement.style.transform = 'scale(1)'; // Görseli normal boyutuna getirin
                            }
                        }}


                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}