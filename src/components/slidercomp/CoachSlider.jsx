import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Mousewheel, Pagination } from 'swiper/modules';
import ImagesData from '../../datas/ImagesData';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles.css';

export default function CoachSlider() {
    const swiperRef = useRef(null);
    const navigate = useNavigate();

    const handleSlideChange = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiperInstance = swiperRef.current.swiper;
            if (swiperInstance.activeIndex === ImagesData.length) {
                navigate('/slide/0');
                swiperInstance.slideTo(0);
            }
        }
    };
    return (
        <Swiper
            direction="vertical"
            slidesPerView={1} // 
            spaceBetween={30} // 
            autoHeight={true} //
            mousewheel={true}
            loop={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Mousewheel]}
            className="mySwiper"
            onSlideChange={handleSlideChange}

            ref={swiperRef}
        >
            {ImagesData.map((image, index) => (
                <SwiperSlide key={`slide-${index}`}>
                    <LazyLoadImage
                        src={image}
                        alt={`Slide ${index + 1}`}
                        effect="black-and-white" // effect="blur"    // effect='opacity'
                        width="100%"
                        height="auto"
                        style={{
                            transition: 'transform 2s ease-in-out, opacity 3s ease-in-out', // Görselin açılma animasyonu
                            transform: 'scale(1)', // Başlangıçta daha küçük
                            objectFit: 'cover', // Görselin alanı tamamen kaplamasını sağla
                        }}
                        debounce={100}  // Görsel yüklenmeden önce 400 milisaniye bekleyin
                        // useIntersectionObserver={true} // IntersectionObserver kullanarak görsel yükleyin, PERFORMANS
                        afterLoad={() => {
                            // Görsel yüklendikten sonra animasyonu başlat
                            const imageElement = document.querySelectorAll(`img[alt="Slide ${index + 1}"]`)[0]; //
                            if (imageElement) {
                                imageElement.style.opacity = 1; // Opaklık 1 yaparak görünür kıl
                                imageElement.style.transform = 'scale(1)'; // Görseli normal boyutuna getirin
                                imageElement.style.transition = 'transform 1.2s ease-in-out, opacity 3s ease-in-out';
                            }
                        }}
                    />
                </SwiperSlide>
            ))}
            <div className="swiper-pagination" ></div>
        </Swiper>
    )
}