import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import './App.css';
import { Element } from "react-scroll";
import ImageSlider from "./ImageSlider";

import { BrowserRouter as Router, Route, NavLink, Routes, useNavigate } from 'react-router-dom';

// 이미지 import
import upArrow from './img/b-close.png';
import downArrow from './img/b-open.png';

// 연세건강드리임내과 훅킹 이미지
import ysh01 from './img/ysh/ysh-01.jpg';
import ysh02 from './img/ysh/ysh-02.jpg';
import ysh03 from './img/ysh/ysh-03.jpg';
import ysh04 from './img/ysh/ysh-04.jpg';
import ysh05 from './img/ysh/ysh-05.jpg';
import ysh06 from './img/ysh/ysh-06.jpg';
import ysh07 from './img/ysh/ysh-07.jpg';

{/* Page1 : 담부기건강내과*/ }
const Page1 = () => {

  const images = [ysh01, ysh02, ysh03];

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
      {/* 건강검진센터 설명 */}
      <div className="animated-text" style={{ display: "flext", flexDirection: "column", padding: "10px", backgroundColor: "white", justifyItems: "center" }}>
        <p style={{ margin: "0 0 3px 0", padding: "0px", color: "lightsteelblue", fontSize: "32px", fontWeight: "bold", textAlign: "center" }}>
          <br />[의료진 소개]<br /><br />
        </p>
      </div>
      <Element
        name="section1"
        id="section1"
        className="section1"
        style={{ height: `${height}px` }}
      >
        {/* <div className={`section-text ${inView.section1 ? "in-view" : ""}`}>
          당신의 꿈을 응원합니다!
        </div>
        <div className={`section-text ${inView.section1 ? "in-view" : ""}`}>
          당신의 자전거는 무엇입니까?
        </div>
        <div className={`section-text ${inView.section1 ? "in-view" : ""}`}>
          당신은 Merida를 탑니까?
        </div> */}
      </Element>

      {/* <Element name="section2" id="section2" className={`section2 ${inView ? 'in-view' : ''}`} style={{ height: `${height}px` }}> */}
      <Element
        name="section2"
        id="section2"
        className="section2"
        style={{ height: `${height / 2}px` }}
      >
      </Element>
      <ImageSlider images={images} height={300} />
      <Element
        name="section3"
        id="section3"
        className="section3"
        style={{ height: `${height}px` }}
      >
        {/*  <div className={`section-text ${inView.section3 ? "in-view" : ""}`}>
          저는 담북이입니다.
        </div>
        <div className={`section-text ${inView.section3 ? "in-view" : ""}`}>
          잘부탁드립니다.
        </div>
        <div className={`section-text ${inView.section3 ? "in-view" : ""}`}>
          하하하
        </div> */}
      </Element>
      <Element
        name="section4"
        id="section4"
        className="section4"
        style={{ height: `${height}px` }}
      >
        {/* <div className={`section-text ${inView.section4 ? "in-view" : ""}`}>
          반응형 텍스트에요
        </div>
        <div className={`section-text ${inView.section4 ? "in-view" : ""}`}>
          이위치에서 에니메이션 합니다.
        </div>
        <div className={`section-text ${inView.section4 ? "in-view" : ""}`}>
          Recat입니다.
        </div> */}
      </Element>
      <Element
        style={{ height: `${height}px` }}
      >

      </Element>
    </main>

  );
};


{/* Page2 : 건강검진센터 */ }
const Page2 = () => {

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

  return (
    <main className="content">
      <Element
        style={{ height: `${height / 2}px`, backgroundImage: `url(${ysh01})`, backgroundSize: 'cover' }}
      >
      </Element>
      {/* 건강검진센터 설명 */}
      <div className="animated-text" style={{ display: "flext", flexDirection: "column", padding: "10px", backgroundColor: "white", justifyItems: "center" }}>
        <p style={{ margin: "0 0 3px 0", padding: "0px", color: "lightsteelblue", fontSize: "28px", fontWeight: "bold", textAlign: "center" }}>
          <br />[담부기건강내과 건강검진센터]<br /><br />
        </p>
        <p className="desc" style={{ fontSize: "20px", color: "black" }}>
          지역 주민분들께<br />
          가까이 다가서는 건강검진센터,<br />
          바로 담부기건강내과 압니다.<br />
          <br />
          <br />
        </p>
        <p className="desc">
          담부기건강내과의 검강검진센터는<br />
          <span className="desc" style={{ color: "blue" }}>
            최상위 검진 장비, 실력 있는 전문 의료진,<br />
            세심한 진료, 쾌적한 검진 환경을 통해<br />
          </span>
          대학 병원급 건강 검진 서비스를 제공합니다.
        </p>
      </div>
      <Element
        style={{ height: `${height / 2}px` }}
      >
      </Element>
      <Element
        style={{ height: `${height / 2}px`, backgroundImage: `url(${ysh02})`, backgroundSize: 'cover' }}
      >
      </Element>
      <Element
        style={{ height: `${height / 2}px` }}
      >
      </Element>
      <Element
        style={{ height: `${height / 2}px`, backgroundImage: `url(${ysh03})`, backgroundSize: 'cover' }}
      >
      </Element>
    </main>
  )
}

{/* Page3 : 내시경 클리닉 */ }
const Page3 = () => {
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

  return (
    <main className="content">
      <Element
        style={{ height: `${height / 2}px`, backgroundImage: `url(${ysh04})`, backgroundSize: 'cover' }}
      >
      </Element>
      {/* 담부기내과 내시경클리닉 설명 */}
      <div className="animated-text" style={{ display: "flext", flexDirection: "column", padding: "10px", backgroundColor: "white", justifyItems: "center" }}>
        <p style={{ margin: "0 0 3px 0", padding: "0px", color: "lightsteelblue", fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>
          <br />[담부기내과 내시경클리닉]<br /><br />
        </p>
        <p className="desc" style={{ fontSize: "20px", color: "black" }}>
          전문적인 검사, 철저한 소독절차,<br />
          편안한 환경의 담부기건강내과<br />
          내시경 클리닉입니다.<br />
          <br />
          <br />
        </p>
        <p className="desc">
          연세건강드림내과의 내시경 클리닉은<br />
          풍부한 경험을 갖춘
          <span className="desc" style={{ color: "blue" }}>
            소화기내시경 세부전문의로부터<br />
            전문적이고 안전한 검사를 제공합니다.<br />
            <br />
            <br />
          </span>
        </p>
      </div>
      <Element
        style={{ height: `${height / 2}px`, backgroundImage: `url(${ysh05})`, backgroundSize: 'cover' }}
      >
      </Element>
      <Element
        style={{ height: `${height / 2}px` }}
      >
      </Element>
      <Element
        style={{ height: `${height / 2}px`, backgroundImage: `url(${ysh06})`, backgroundSize: 'cover' }}
      >
      </Element>
    </main>
  )
}

{/* Page4 : 초음파 클리닉 */ }
const Page4 = () => {
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

  return (
    <main className="content">
      {/* 건강 클리닉 설명 */}
      < div className="animated-text" style={{ display: "flext", flexDirection: "column", padding: "10px", backgroundColor: "white", justifyItems: "center" }
      }>
        <p style={{ margin: "0 0 3px 0", padding: "0px", color: "lightsteelblue", fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>
          <br />[초음파 검사란?]<br /><br />
        </p>
        <p className="desc">
          초음파 영상은<br />
          우리 귀에 들리지 않는 높은 주파수의 음파를<br />
          인체 표면에서 인체 내부로 보낸 후 내부에서<br />
          반사되는 음파를 영상화 시킨 것을 말합니다.<br />
          <br />
        </p>
        <p className="desc">
          초음파 검사는<br />
          초음파 영상을 실시간으로 얻기 때문에<br />
          장기의 구조 뿐만 아니라 운동까지 관찰할 수 있으며,<br />
          혈관 내부의 혈류도 측정할 수 있습니다.<br />
          <br />
        </p>
        <p className="desc">
          인체에 무해하고<br />
          검사를 할 수 있어 환자가 가진 질병을 진단하거나<br />
          그 치료 결과를 판단하기에 유용하고<br />
          편리한 영상 검사법입니다.<br />
          <br />
          <br />
        </p>
      </div >
      <Element
        style={{ height: `${height / 2}px`, backgroundImage: `url(${ysh07})`, backgroundSize: 'cover' }}
      >
      </Element>

      {/* <Element name="section2" id="section2" className={`section2 ${inView ? 'in-view' : ''}`} style={{ height: `${height}px` }}> */}
      <Element
        style={{ height: `${height / 2}px` }}
      >
      </Element>
      <Element
        style={{ height: `${height / 2}px` }}
      >
      </Element>
      <Element
        style={{ height: `${height / 2}px` }}
      >
      </Element>
      <Element
        style={{ height: `${height}px` }}
      >
      </Element>
    </main>
  )
}

{/* Page5 : 건강 클리닉 */ }
const Page5 = () => {
  return (
    <main className="content">
      {/* 건강 클리닉 설명 */}
      < div className="animated-text" style={{ display: "flext", flexDirection: "column", padding: "10px", backgroundColor: "white", justifyItems: "center" }
      }>
        <p style={{ margin: "0 0 3px 0", padding: "0px", color: "lightsteelblue", fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>
          <br />[건강 클리닉]<br /><br />
        </p>
        <p className="desc">
          개인별 맞춤 건강 솔루션<br />
          담부기건강내과 건강클리닉입니다.
        </p>
      </div >
    </main>
  )
}

{/* Page6 : 비급여항목고지 */ }
const Page6 = () => {
  return (
    <main className="content">
      {/* 비급여항목고지 설명 */}
      <div className="animated-text" style={{ display: "flext", flexDirection: "column", padding: "10px", backgroundColor: "white", justifyItems: "center" }}>
        <p style={{ margin: "0 0 3px 0", padding: "0px", color: "lightsteelblue", fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>
          <br />[비급여항목고지]<br /><br />
        </p>
        <p style={{ margin: 0, padding: "0px", color: "grey", fontSize: "16px", textAlign: "center" }}>
          의료법 제 45조 제1항 및 제2항과 동법 시행규칙<br />
          제 42조의 제1항, 제2항 및 제3항에 의하여<br />
          비급여 진료 비용을 안내드립니다.
        </p>
      </div>
      <div class="grid-container">
        <div class="grid-container-item">항목</div>
        <div class="grid-container-item">검사 종류</div>
        <div class="grid-container-item">비용</div>

        <div class="grid-container-item">내시경 진정관리료</div>
        <div class="grid-container-item">위내시경 진정관리료</div>
        <div class="grid-container-item">50,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">대장내시경 진정관리료</div>
        <div class="grid-container-item">70,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">위 + 대장 내시경 진정관리료</div>
        <div class="grid-container-item">100,000원</div>

        <div class="grid-container-item">초음파 검사</div>
        <div class="grid-container-item">상복부 초음파</div>
        <div class="grid-container-item">50,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">하복부 초음파</div>
        <div class="grid-container-item">40,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">상+하복부 초음파</div>
        <div class="grid-container-item">80,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">상+하복부+갑상선+경동맥</div>
        <div class="grid-container-item">150,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">상+하복부+갑상선+경동맥+유방</div>
        <div class="grid-container-item">210,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">상복부+갑상선+경동맥</div>
        <div class="grid-container-item">130,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">충수 초음파</div>
        <div class="grid-container-item">40,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">유방 초음파</div>
        <div class="grid-container-item">70,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">갑상선 초음파</div>
        <div class="grid-container-item">40,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">경동맥 초음파</div>
        <div class="grid-container-item">40,000원</div>

        <div class="grid-container-item">예방 접종</div>
        <div class="grid-container-item">A형 간염</div>
        <div class="grid-container-item">75,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">B형 간염</div>
        <div class="grid-container-item">25,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">스카이조스터 (대상포진)</div>
        <div class="grid-container-item">150,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">싱그릭스 (대상포진)</div>
        <div class="grid-container-item">250,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">2회 결제 시</div>
        <div class="grid-container-item">230,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">조스타박스 (대상포진)</div>
        <div class="grid-container-item">160,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">프리베나</div>
        <div class="grid-container-item">120,000원</div>

        <div class="grid-container-item">주사</div>
        <div class="grid-container-item">비타민D</div>
        <div class="grid-container-item">30,000원</div>

        <div class="grid-container-item">검사</div>
        <div class="grid-container-item">인플루엔자 검사</div>
        <div class="grid-container-item">35,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">신속항원 검사</div>
        <div class="grid-container-item">30,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">듀얼키트 검사 (코로나, 독감)</div>
        <div class="grid-container-item">40,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">골밀도 검사 (2부위)</div>
        <div class="grid-container-item">40,000원</div>

        <div class="grid-container-item">서류</div>
        <div class="grid-container-item">일반 진단서</div>
        <div class="grid-container-item">10,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">일반 진단서 (영문)</div>
        <div class="grid-container-item">20,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">소견서</div>
        <div class="grid-container-item">3,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">건강진단서 (TBPE)</div>
        <div class="grid-container-item">20,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">건강진단서 (TBPE, X-ray)</div>
        <div class="grid-container-item">30,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">기숙사 건강진단서 (X-ray 비급여)</div>
        <div class="grid-container-item">20,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">통원확인서</div>
        <div class="grid-container-item">3,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">보건증</div>
        <div class="grid-container-item">25,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">진료확인서</div>
        <div class="grid-container-item">1,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">공무원 채용신체검사서</div>
        <div class="grid-container-item">40,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">일반 채용신체검사서</div>
        <div class="grid-container-item">30,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">진료기록사본 (1~5매)</div>
        <div class="grid-container-item">3,000원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">진료기록사본 (6매 이상)</div>
        <div class="grid-container-item">100원</div>

        <div class="grid-container-item"></div>
        <div class="grid-container-item">진료 기록 (영상) 복사</div>
        <div class="grid-container-item">10,000원</div>
      </div>
    </main>
  )
}

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [isSubMenuOpen, setIsSubMenuOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
      setIsSubMenuOpen([false, false, false, false, false, false]);
    }
  };

  // 서브 메뉴 열기/닫기 함수
  const toggleSubMenu = (index, value) => {
    setIsSubMenuOpen(prevState => {
      if (!Array.isArray(prevState)) {
        console.error("State is not an array:", prevState); // 디버깅용 로그
        return []; // 문제가 있다면 빈 배열로 초기화 (임시 대처)
      }

      return prevState.map((item, idx) => (idx === index ? value : item));
    });
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
      <div className="grid-container-nav">
        <NavLink to="/page1" className={({ isActive }) =>
          isActive ? "grid-item active" : "grid-item"
        }>담부기건강내과</NavLink>
        <NavLink to="/page2" className="grid-item">건강검진센터</NavLink>
        <NavLink to="/page3" className="grid-item">내시경 클리닉</NavLink>
        <NavLink to="/page4" className="grid-item">초음파 클리닉</NavLink>
        <NavLink to="/page5" className="grid-item">건강 클리닉</NavLink>
        <NavLink to="/page6" className="grid-item">비급여항목고지</NavLink>
      </div>

      {/* 네비게이션 오버레이 */}
      <div style={{ zIndex: "10000" }} className={`overlay ${isNavOpen ? 'visible' : ''}`} onClick={closeNav}>
        {/* 네비게이션 바 */}
        <div
          style={{ padding: "0px" }}
          className={`side-nav ${isNavOpen ? 'slide-in' : 'slide-out'}`}
          onClick={(e) => e.stopPropagation()
          }
        >
          <div style={{ padding: "10px" }} />
          <ul>
            <li>
              <button className="menu-item" onClick={() => toggleSubMenu(0, !isSubMenuOpen[0])}>
                담부기건강내과
                {/* 상태에 따라 PNG 이미지를 변경 */}
                <img
                  className="submenu-toggle-icon"
                  src={isSubMenuOpen[0] ? upArrow : downArrow}
                  alt={isSubMenuOpen[0] ? 'Collapse' : 'Expand'}
                />
              </button>
              {/* 하위 항목 */}
              <ul className={`sub-menu ${isSubMenuOpen[0] ? 'open' : 'closed'}`}>
                <li><a href="#home1">의료진 소개</a></li>
                <li><a href="#home2">진료 안내</a></li>
                <li><a href="#home3">병원 둘러보기</a></li>
                <li><a href="#home3">오시는 길</a></li>
              </ul>
            </li>
            <li>
              <button className="menu-item" onClick={() => toggleSubMenu(1, !isSubMenuOpen[1])}>
                건강검진센터
                {/* 상태에 따라 PNG 이미지를 변경 */}
                <img
                  className="submenu-toggle-icon"
                  src={isSubMenuOpen[1] ? upArrow : downArrow}
                  alt={isSubMenuOpen[1] ? 'Collapse' : 'Expand'}
                />
              </button>
              {/* 하위 항목 */}
              <ul className={`sub-menu ${isSubMenuOpen[1] ? 'open' : 'closed'}`}>
                <li><a href="#home1">국가공단 건강검진</a></li>
                <li><a href="#home2">5대암 검진</a></li>
                <li><a href="#home3">채용 검진</a></li>
              </ul>
            </li>
            <li>
              <button className="menu-item" onClick={() => toggleSubMenu(2, !isSubMenuOpen[2])}>
                내시경 클리닉
                {/* 상태에 따라 PNG 이미지를 변경 */}
                <img
                  className="submenu-toggle-icon"
                  src={isSubMenuOpen[2] ? upArrow : downArrow}
                  alt={isSubMenuOpen[2] ? 'Collapse' : 'Expand'}
                />
              </button>
              {/* 하위 항목 */}
              <ul className={`sub-menu ${isSubMenuOpen[2] ? 'open' : 'closed'}`}>
                <li><a href="#home1">위대장 내시경</a></li>
                <li><a href="#home2">용종절제술</a></li>
              </ul>
            </li>
            <li>
              <button className="menu-item">
                초음파 클리닉
              </button>
            </li>
            <li>
              <button className="menu-item">
                건강 클리닉
              </button>
            </li>
            <li>
              <button className="menu-item">
                비급여항목고지
              </button>
            </li>
          </ul>
        </div>

        {/* 반투명 영역 */}
        <div className="transparent-section" onClick={closeNav}></div>
      </div>

      {/* 메인 콘텐츠 */}
      <Element
        style={{ height: "50px" }}
      ></Element>

      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
      </Routes>

      {/* 하단 설명 */}
      <div style={{ padding: "10px", backgroundColor: "gray", color: "white" }}>
        <p style={{ margin: "0 0 3px 0", padding: "0px", fontSize: "15px", fontWeight: "bold" }}>담부기건강내과의원</p>
        <p style={{ margin: 0, padding: "0px", fontSize: "12px" }}>
          주소: 서울특별시 XX구 XX로 220 3층 (논현동, 중앙대파빌딩)<br />
          전화번호 : 02-466-4646<br />
          사업자등록번호 : XXX-XX-XXXXX<br />
          <br />
        </p>
      </div>
      <Element
        style={{ height: "30px" }}
      ></Element>


      {/* 하단 고정 네비게이션 */}
      <footer className="bottom-nav">
        <a href="#home" className="bottom-nav-item">오시는길</a>
        <a href="tel:123-456-7890" className="bottom-nav-item">문의전화</a>
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