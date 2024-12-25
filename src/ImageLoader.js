import React, { useState, useEffect } from 'react';
import useHeight from './util';
import './ImageLoader.css';

const apiUrl = process.env.REACT_APP_API_URL;

function ImageLoader({ id }) {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);

    const height = useHeight();

    useEffect(() => {
        // DB에서 특정 ID의 이미지를 가져오기
        fetch(`${apiUrl}?id=${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    setImage(data[0]); // 첫 번째 이미지 데이터 가져오기
                }
                setLoading(false);
            })

            .catch(error => console.error('Error fetching image:', error));
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log('Image data:', image);
    return (
        <div className='ImageLoader'
            style={{
                backgroundImage: image ? `url(${image.src})` : 'none',
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
        // DB에서 특정 ID의 이미지를 가져오기
        fetch(`${apiUrl}?id=${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    setImage(data[0]); // 첫 번째 이미지 데이터 가져오기
                }
                setLoading(false);
            })

            .catch(error => console.error('Error fetching image:', error));
    }, [id]);

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
            <img src={image.src} alt="example" 
                style={{width: "100%", height :"100%"}}
            />
            {!image && <div style={{ fontSize: '2.2rem', color: '#555' }}>No Image</div>}
        </div>
    );
}

export { ImageLoader, ImageLoaderSrc };


