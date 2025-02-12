import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack } from 'react-icons/io';

import { Mousewheel, Pagination } from 'swiper/modules';
import shadowData from '../datas/ShadowData';
import ImagesData from '../datas/ImagesData';
import FigureData from '../datas/FigurData';
import { Navigation } from 'swiper/modules';
import KarierreTitelData from '../datas/KarierreTitelData';
import MainSlide from '../components/slides/MainSlide';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Outlet, useNavigate } from 'react-router-dom';

const { coachTitel, ambassadorTitel, commentatorTitel, speakerTitel } = KarierreTitelData;
const { coach, ambassador, speaker, moderator, commentator } = shadowData;
const { coachFigure, commentatorFigure, ambassadorFigure, speakerFigure, jensLehmannName } = FigureData;

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [dotIndex, setDotIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const karierreRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000); // 1 second fade out transition
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSlideChangeWrapper = (swiper) => {
    console.log('handleSlideChangeWrapper: ', swiper.activeIndex);
  }

  const handleSlideChange = (swiper) => {
    console.log('handleSlideChange: ', swiper.activeIndex);
    navigate(`/slide/${swiper.activeIndex}`);
    if (karierreRef.current) {
      karierreRef.current.style.opacity = '0';
      setTimeout(() => {
        karierreRef.current.style.opacity = '1';
      }, 100); // 100ms sonra opacity'yi tekrar 1 yaparak görünmesini sağlar
    }
  };

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setDotIndex((prevIndex) => (prevIndex + 1) % 5);
      }, 200);

      return () => clearInterval(interval);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
        <div className="shadowData-container">
          <img src={coach} alt="coach" className="face-image coach-face" />
          <img src={ambassador} alt="ambassador" className="face-image ambassador-face" />
          <img src={commentator} alt="commentator" className="commentator-face" />
          <img src={speaker} alt="speaker" className="face-image speaker-face" />
          <img src={moderator} alt="moderator" className="face-image moderator-face" />
        </div>
        <p className="loading-subtitle">THE FIVE FACES</p>
        <div className="loading-divider">
          <span className="loading-divider-text">of</span>
        </div>
        <h1 className="loading-title">ALİ YILDIZ</h1>
        <div className="dots-container">
          <div className="dots">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`dot ${index === dotIndex ? 'active' : index === (dotIndex - 1 + 5) % 5 ? 'fading' : ''}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const swiperMainElements = [
    {
      figure: {
        src: coachFigure,
        alt: 'coachFigure',
        // extendedStyle: { zIndex: 2, marginLeft: '250px' },
      },
      title: {
        src: coachTitel,
        alt: 'coachTitel',
      },
    },
    {
      figure: {
        src: commentatorFigure,
        alt: 'commentatorFigure',
      },
      title: {
        src: commentatorTitel,
        alt: 'commentatorTitel',
      },
    },
    {
      figure: {
        src: ambassadorFigure,
        alt: 'ambassadorFigure',
      },
      title: {
        src: ambassadorTitel,
        alt: 'ambassadorTitel',
      },
    },
    {
      figure: {
        src: speakerFigure,
        alt: 'speakerFigure',
      },
      title: {
        src: speakerTitel,
        alt: 'speakerTitel',
      },
    },
  ];

  return (
    <>
      <div className="social-icons">
        <div className="icon-container">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <div className="line"></div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook-icon">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={5}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        onSlideChange={handleSlideChangeWrapper}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-container">
            <Swiper
              direction={'horizontal'}
              slidesPerView={1}
              spaceBetween={5}
              rewind={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              onSlideChange={handleSlideChange}
              modules={[Navigation, Pagination]}
              className="slide-text"
            >
              <div className="fixed-element">
                <img src={jensLehmannName} alt="name" />
              </div>

              {swiperMainElements.map((element, index) => (
                <SwiperSlide className="silluhetto-slide" key={`key_swiper_elements__${index}`}>
                  <MainSlide figure={element.figure} title={element.title} extendedStyle={element?.extendedStyle} />
                </SwiperSlide>
              ))}

              <div>
                <IoIosArrowBack />
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </Swiper>
          </div>
        </SwiperSlide>
        <>
          <Outlet />
        </>
      </Swiper>

    </>
  );
}
