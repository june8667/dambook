import React, { useState, useRef } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images, height }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX; // 터치 시작 위치
  };

  const handleTouchMove = (e) => {
    touchEndRef.current = e.touches[0].clientX; // 터치 중 현재 위치
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;

    const distance = touchStartRef.current - touchEndRef.current; // 터치 이동 거리
    const threshold = 50; // 스와이프 감지 최소 거리

    if (distance > threshold) {
      // 왼쪽으로 스와이프
      nextSlide();
    } else if (distance < -threshold) {
      // 오른쪽으로 스와이프
      prevSlide();
    }

    // 초기화
    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="slider"
      style={{ height: `${height}px` }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="slider-images"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="slider-image"
            style={{
              backgroundImage: `url(${image})`,
              height: `${height}px`,
            }}
          />
        ))}
      </div>
      <button className="prev-button" onClick={prevSlide}>
        &lt;
      </button>
      <button className="next-button" onClick={nextSlide}>
        &gt;
      </button>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
