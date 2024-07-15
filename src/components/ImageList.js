// src/components/ImageList.js
import React from 'react';
import ImageItem from './ImageItem';

function ImageList({ images, deleteImage, updateImage }) {
  return (
    <div>
      {images.map(image => (
        <ImageItem 
          key={image.id} 
          image={image} 
          deleteImage={deleteImage} 
          updateImage={updateImage} 
        />
      ))}
    </div>
  );
}

export default ImageList;
