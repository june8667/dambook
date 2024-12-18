import React, { useState, useRef, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images, height }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // 현재 애니메이션 상태
  const sliderRef = useRef(null);
  const autoSlideInterval = useRef(null); // 자동 슬라이드 인터벌 참조

  const totalSlides = images.length;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // 마지막 슬라이드에서 첫 번째 슬라이드로 이동
    if (currentIndex >= totalSlides) {
      sliderRef.current.style.transition = "none"; // 애니메이션 제거
      setCurrentIndex(0); // 첫 번째 슬라이드로 이동
    }

    // 첫 번째 슬라이드에서 마지막 슬라이드로 이동
    if (currentIndex < 0) {
      sliderRef.current.style.transition = "none"; // 애니메이션 제거
      setCurrentIndex(totalSlides - 1); // 마지막 슬라이드로 이동
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      // 슬라이드 이동 시 애니메이션 적용
      sliderRef.current.style.transition = isTransitioning
        ? "transform 0.5s ease-in-out"
        : "none";
    }
  }, [currentIndex, isTransitioning]);

  useEffect(() => {
    // 자동 슬라이더 시작
    startAutoSlide();

    // 컴포넌트 언마운트 시 인터벌 제거
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    autoSlideInterval.current = setInterval(() => {
      nextSlide();
    }, 3000); // 2초마다 실행
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setCurrentIndex(index);
  };

  // 터치 이벤트 로직 (스와이프)
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
    stopAutoSlide(); // 터치 시 자동 슬라이더 중지
  };

  const handleTouchMove = (e) => {
    touchEndRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    const distance = touchStartRef.current - touchEndRef.current;
    const threshold = 50;

    if (distance > threshold) nextSlide();
    if (distance < -threshold) prevSlide();

    touchStartRef.current = null;
    touchEndRef.current = null;

    startAutoSlide(); // 터치 종료 후 자동 슬라이더 재시작
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
        ref={sliderRef}
        className="slider-images"
        style={{
          transform: `translateX(-${(currentIndex + 1) * 100}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* 마지막 슬라이드를 복제하여 맨 앞에 추가 */}
        <div
          className="slider-image"
          style={{
            backgroundImage: `url(${images[totalSlides - 1]})`,
            height: `${height}px`,
          }}
        />
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
        {/* 첫 번째 슬라이드를 복제하여 맨 뒤에 추가 */}
        <div
          className="slider-image"
          style={{
            backgroundImage: `url(${images[0]})`,
            height: `${height}px`,
          }}
        />
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