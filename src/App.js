import React, { useState } from 'react';
import './App.css';

// 이미지 import
import upArrow from './img/b-close.png';
import downArrow from './img/b-open.png';

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

  return (
    <div className="App">
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

      {/* 네비게이션 오버레이 */}
      <div className={`overlay ${isNavOpen ? 'visible' : ''}`} onClick={closeNav}>
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
      <main className="content">
        <h1>Welcome to My Website</h1>
        <p>Click the menu button to navigate.</p>
      </main>

      {/* 하단 고정 네비게이션 */}
      <footer className="bottom-nav">
        <a href="#home" className="bottom-nav-item">Home</a>
        <a href="#about" className="bottom-nav-item">About</a>
        <a href="#services" className="bottom-nav-item">Services</a>
        <a href="#contact" className="bottom-nav-item">Contact</a>
      </footer>
    </div>
  );
}

export default App;
