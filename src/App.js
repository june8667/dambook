import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import './App.css';
import { Element } from "react-scroll";

import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';

// 이미지 import
import upArrow from './img/b-close.png';
import downArrow from './img/b-open.png';

{/* Page1 */}
const Page1 = () => {
  // 강제로 모바일로 테스트하기
  //const forceMobile = true; // false로 변경하면 데스크탑처럼 동작
  let mobileRatio = 1;
  if (isMobile) {
    mobileRatio = 0.5 * 0.5 * 0.8;
  }


  const [height, setHeight] = useState(0);

  useEffect(() => {
    const viewportHeight = window.innerHeight;
    const scale = window.devicePixelRatio; // 브라우저의 스케일 값
    const newHeight = viewportHeight * scale; // 뷰포트 높이와 스케일 값을 곱함
    setHeight(newHeight * mobileRatio); // 계산된 높이를 상태로 설정
  }, []); // scale이 바뀔 때마다 실행

  const [inView, setInView] = useState({
    section1: false,
    section3: false,
    section4: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.3 } // 50% 이상 보일 때 트리거
    );
    // section1과 section2만 관찰
    const sections = document.querySelectorAll(
      "#section1, #section3, #section4"
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="content">
      <Element
        name="section1"
        id="section1"
        className="section1"
        style={{ height: `${height}px` }}
      >
        <div className={`section-text ${inView.section1 ? "in-view" : ""}`}>
          당신의 꿈을 응원합니다!
        </div>
        <div className={`section-text ${inView.section1 ? "in-view" : ""}`}>
          당신의 자전거는 무엇입니까?
        </div>
        <div className={`section-text ${inView.section1 ? "in-view" : ""}`}>
          당신은 Merida를 탑니까?
        </div>
      </Element>

      {/* <Element name="section2" id="section2" className={`section2 ${inView ? 'in-view' : ''}`} style={{ height: `${height}px` }}> */}
      <Element
        name="section2"
        id="section2"
        className="section2"
        style={{ height: `${height / 2}px` }}
      >
      </Element>
      <Element
        name="section3"
        id="section3"
        className="section3"
        style={{ height: `${height}px` }}
      >
        <div className={`section-text ${inView.section3 ? "in-view" : ""}`}>
          저는 담북이입니다.
        </div>
        <div className={`section-text ${inView.section3 ? "in-view" : ""}`}>
          잘부탁드립니다.
        </div>
        <div className={`section-text ${inView.section3 ? "in-view" : ""}`}>
          하하하
        </div>
      </Element>
      <Element
        name="section4"
        id="section4"
        className="section4"
        style={{ height: `${height}px` }}
      >
        <div className={`section-text ${inView.section4 ? "in-view" : ""}`}>
          반응형 텍스트에요
        </div>
        <div className={`section-text ${inView.section4 ? "in-view" : ""}`}>
          이위치에서 에니메이션 합니다.
        </div>
        <div className={`section-text ${inView.section4 ? "in-view" : ""}`}>
          Recat입니다.
        </div>
      </Element>
      <Element
        style={{ height: `${height}px` }}
      >

      </Element>
    </main>

  );
};


{/* Page2 */}
const Page2 = () => {
  return (
    <h2 style={{marginTop: "300px", textAlign: "center"}}>Page2</h2>
  )
}

{/* Page3 */}
const Page3 = () => {
  return (
    <h2 style={{marginTop: "300px", textAlign: "center"}}>Page3</h2>
  )
}

{/* Page4 */}
const Page4 = () => {
  return (
    <h2 style={{marginTop: "300px", textAlign: "center"}}>Page4</h2>
  )
}

{/* Page5 */}
const Page5 = () => {
  return (
    <h2 style={{marginTop: "300px", textAlign: "center"}}>Page5</h2>
  )
}

{/* Page6 */}
const Page6 = () => {
  return (
    <h2 style={{marginTop: "300px", textAlign: "center"}}>Page6</h2>
  )
}

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
      setIsSubMenuOpen(false); // 네비게이션 닫을 때 서브메뉴도 닫기
    }
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const navigate = useNavigate();
  // 페이지가 로드될 때 첫 번째 페이지로 리디렉션 (한 번만)
  useEffect(() => {
    // 이미 페이지가 로드되면 다시 리디렉션하지 않도록 조건 추가
    if (window.location.pathname === '/') {
      navigate('/page1');  // 처음에만 자동으로 /page1로 이동
    }
  }, [navigate]);

  return (
    <div className="App">
      <div className="header" style={{ height: "10%", width: "100%", padding: "5px", backgroundColor: "white", position: "fixed", zIndex: "500" }}>
        {/* 햄버거 버튼 */}
        {!isNavOpen && (
          <button
            className="menu-button"
            onClick={(e) => {
              e.stopPropagation();
              toggleNav();
            }}
          >
            ☰
          </button>
        )}
      </div>
      {/* 버튼 밑에 2x3 그리드 */}
      <div className="grid-container">
        <Link to="/page1" className="grid-item">건강검진센터</Link>
        <Link to="/page2" className="grid-item">담부기건강내과</Link>
        <Link to="/page3" className="grid-item">내시경 클리닉</Link>
        <Link to="/page4" className="grid-item">초음파 클리닉</Link>
        <Link to="/page5" className="grid-item">건강 클리닉</Link>
        <Link to="/page6" className="grid-item">비급여항목고지</Link>
      </div>

      {/* 네비게이션 오버레이 */}
      <div style={{ zIndex: "10000" }} className={`overlay ${isNavOpen ? 'visible' : ''}`} onClick={closeNav}>
        {/* 네비게이션 바 */}
        <div
          className={`side-nav ${isNavOpen ? 'slide-in' : 'slide-out'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul>
            <li>
              <button className="menu-item" onClick={toggleSubMenu}>
                Home
                {/* 상태에 따라 PNG 이미지를 변경 */}
                <img
                  className="submenu-toggle-icon"
                  src={isSubMenuOpen ? upArrow : downArrow}
                  alt={isSubMenuOpen ? 'Collapse' : 'Expand'}
                />
              </button>
              {/* 하위 항목 */}
              <ul className={`sub-menu ${isSubMenuOpen ? 'open' : 'closed'}`}>
                <li><a href="#home1">Sub Home 1</a></li>
                <li><a href="#home2">Sub Home 2</a></li>
                <li><a href="#home3">Sub Home 3</a></li>
              </ul>
            </li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* 반투명 영역 */}
        <div className="transparent-section" onClick={closeNav}></div>
      </div>

      {/* 메인 콘텐츠 */}

      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
      </Routes>


      {/* 하단 고정 네비게이션 */}
      <footer className="bottom-nav">
        <a href="#home" className="bottom-nav-item">오시는길</a>
        <a href="#about" className="bottom-nav-item">문의전화</a>
        <a href="#services" className="bottom-nav-item">의료진안내</a>
        <a href="#contact" className="bottom-nav-item">공식블로그</a>
      </footer>
    </div>
  );
}

// Router로 App을 감싸주기
export default function RootApp() {
  return (
    <Router> {/* BrowserRouter로 감싸야 useNavigate가 정상 동작 */}
      <App />
    </Router>
  );
}