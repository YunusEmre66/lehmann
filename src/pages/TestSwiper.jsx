import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Outlet, useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TestSwiper = () => {
  const navigate = useNavigate();
  const onSlideChangeHandler = (swiper) => {
    // console.log('Slide: ', swiper);
    // console.log('Slide index changed to: ', swiper.activeIndex);
    navigate(`/test/${swiper.activeIndex}`);
  };

  const onReachEndHandler = (swiper) => {
    console.log('onReachEndHandler: ', swiper);
  };

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={onSlideChangeHandler}
        onReachEnd={onReachEndHandler}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>

      {/* Content by swiper */}

      <Outlet />
    </>
  );
};

export default TestSwiper;
