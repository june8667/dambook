import React, { useState, useEffect } from 'react';
import useHeight from './util';
import './ImageLoader.css';

//const apiUrl = process.env.REACT_APP_API_URL;
//const apiUrl = "https://port-0-dambook-image-server-m56p8flb7c247aba.sel4.cloudtype.app/images";
const apiUrl = "https://port-0-dambook-image-server-m56p8flb7c247aba.sel4.cloudtype.app"

function ImageLoader({ id }) {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);

    const height = useHeight();

    useEffect(() => {
        // 서버에서 id에 맞는 이미지 데이터를 가져오기
        fetch(`${apiUrl}/api/images`)
          .then(response => response.json())
          .then(data => {
            // id에 해당하는 이미지 찾기
            const selectedImage = data.find(image => image.id === id);
            setImage(selectedImage);
            setLoading(false);
          })
          .catch(error => console.error('Error fetching data:', error));
          
      }, [id]); // id가 변경될 때마다 다시 요청

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log('Image data:', image);
    return (
        <div className='ImageLoader'
            style={{
                backgroundImage: image ? `url(${apiUrl}${image.src})` : 'none',
                height: `${height / 2}px`,
                backgroundSize: "cover"
            }}
        >

            {!image && <div style={{ fontSize: '2.2rem', color: '#555' }}>No Image</div>}
        </div>
    );
}

function ImageLoaderSrc({ id }) {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);

    const height = useHeight();

    useEffect(() => {
        // 서버에서 id에 맞는 이미지 데이터를 가져오기
        fetch(`${apiUrl}/api/images`)
          .then(response => response.json())
          .then(data => {
            // id에 해당하는 이미지 찾기
            const selectedImage = data.find(image => image.id === id);
            setImage(selectedImage);
            setLoading(false);
          })
          .catch(error => console.error('Error fetching data:', error));
          
      }, [id]); // id가 변경될 때마다 다시 요청

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log('Image data:', image);
    return (
        <div
            className='imageLoaderSrc'
            style={{
            }}
        >
            <img src={`${apiUrl}${image.src}`} alt="example"
                style={{width: "100%", height :"100%"}}
            />
            {!image && <div style={{ fontSize: '2.2rem', color: '#555' }}>No Image</div>}
        </div>
    );
}

export { ImageLoader, ImageLoaderSrc };


