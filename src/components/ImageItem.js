// src/components/ImageItem.js
import React, { useState } from 'react';

function ImageItem({ image, deleteImage, updateImage }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newUrl, setNewUrl] = useState(image.url);

  const handleUpdate = () => {
    updateImage(image.id, newUrl);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={newUrl} 
            onChange={(e) => setNewUrl(e.target.value)} 
            required 
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <img src={image.url} alt="Img" style={{ maxWidth: '200px' }} />
      )}
      <button onClick={() => deleteImage(image.id)}>Delete</button>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
    </div>
  );
}

export default ImageItem;
