// src/App.js
import React, { useState } from 'react';
import ImageForm from './components/ImageForm';
import ImageList from './components/ImageList';
import Banner from './components/Banner';
import './App.css';

function App() {
  const [images, setImages] = useState([]);

  const addImage = (url) => {
    setImages([...images, { id: Date.now(), url }]);
  };

  const deleteImage = (id) => {
    setImages(images.filter(image => image.id !== id));
  };

  const updateImage = (id, newUrl) => {
    setImages(images.map(image => image.id === id ? { ...image, url: newUrl } : image));
  };

  return (
    <div className="App">
      <Banner />
      <h1>Inserte URL de img</h1>
      <ImageForm addImage={addImage} />
      <ImageList images={images} deleteImage={deleteImage} updateImage={updateImage} />
    </div>
  );
}

export default App;


