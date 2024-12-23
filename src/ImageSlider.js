import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "./ImageSlider.css";

const ImageSlider = ({ urls }) => {
  const [isFullScreen, setIsFullScreen] = useState(false); // 전체 화면 상태
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 인덱스

  const toggleFullScreen = (index = 0) => {
    setCurrentIndex(index); // 클릭한 이미지 인덱스 설정
    setIsFullScreen(!isFullScreen); // 전체 화면 토글
  };

  if (!urls || urls.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <>
      {/* 기본 슬라이더 */}
      {!isFullScreen && (<div className="section0">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)} // 현재 인덱스 업데이트
        >
          {urls.map((url, index) => (
            <SwiperSlide key={index}>
              <div
                className="image-container"
                onClick={() => toggleFullScreen(index)} // 클릭 시 전체 화면 모달 열기
              >
                <img
                  src={url}
                  alt={`Slide ${index}`}
                  className="image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      )
      }

      {/* 전체 화면 모달 */}
      {isFullScreen && (
        <div className="fullscreen-modal">
          <div className="fullscreen-header">
            <span className="image-counter">
              {currentIndex + 1} / {urls.length}
            </span>
            <button
              className="close-button"
              onClick={() => setIsFullScreen(false)}
            >
              ✕
            </button>
          </div>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            loop={true}
            initialSlide={currentIndex} // 클릭한 이미지부터 시작
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)} // 현재 인덱스 업데이트
          >
            {urls.map((url, index) => (
              <SwiperSlide key={index}>
                <div className="fullscreen-image-container">
                  <img
                    src={url}
                    alt={`Slide ${index}`}
                    className="fullscreen-image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default ImageSlider;
