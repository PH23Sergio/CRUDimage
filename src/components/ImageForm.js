// src/components/ImageForm.js
import React, { useState } from 'react';

function ImageForm({ addImage }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addImage(url);
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        placeholder="Enter image URL" 
        required 
      />
      <button type="submit">Add Image</button>
    </form>
  );
}

export default ImageForm;
