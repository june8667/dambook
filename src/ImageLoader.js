import React, { useState, useEffect } from 'react';
import useHeight from './util';

function ImageLoader({ id }) {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);

    const height  = useHeight();

    useEffect(() => {
        // DB에서 특정 ID의 이미지를 가져오기
        fetch(`http://localhost:4000/images?id=${id}`)
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
        <div style={{ height: `${height / 2}px` }}>
            {image ? (
                <img src={image.src} alt={'왜 안되냐'} style={{height:'100%'}}/>
            ) : (
                <div>No image found!</div>
            )}
        </div>
    );
}

// function ImageGallery() {
//   return (
//     <div>
//       <h1>Image Gallery</h1>
//       {/* 개별적으로 id를 넘겨줘서 3개의 이미지를 그리기 */}
//       <LoadImageById id={3} />
//       <LoadImageById id={1} />
//       <LoadImageById id={2} />
//     </div>
//   );
// }

export default ImageLoader;