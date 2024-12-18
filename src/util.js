import { useEffect, useState } from 'react';
import { isMobile } from "react-device-detect";

const useHeight = () => {
  
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

    return height;
}

export default useHeight;