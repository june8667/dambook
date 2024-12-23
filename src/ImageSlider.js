import React, { useRef } from "react";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import "swiper/swiper-bundle.css";
import useHeight from "./util";
import './ImageSlider.css';


const ImageSlider = ({ urls }) => {

  const swiperRef = useRef(null);

  const height = useHeight();

  // 전체화면 모드 활성화 함수
  const goFullScreen = (event) => {
    const element = event.target;

    if (element.requestFullscreen) {
      element.requestFullscreen();  // 크롬, 파이어폭스, 오페라 등
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();  // Firefox
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();  // Safari
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();  // IE/Edge
    }
  };

  if (urls.length === 0) {
    return <div>No images found</div>;  // 이미지가 없을 경우 표시
  }

  return (
    <Element className="section0" style={{ height: `${height / 2}px` }}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}  // 슬라이드 간의 간격
        slidesPerView={1}  // 한 번에 보여줄 슬라이드 개수
        navigation  // 네비게이션 버튼 활성화
        pagination={{ clickable: true }}  // 페이지네이션 활성화
        autoplay={{ delay: 3000 }}  // 자동 재생 설정
        loop={true}  // 반복 재생
        ref={swiperRef}  // Swiper 요소에 접근할 수 있도록 ref 전달
      >
        {urls.map((url, index) => (
          <SwiperSlide key={index}>
            <img
              src={url}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: `${height / 2}px` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </Element>
  );
};

export default ImageSlider;