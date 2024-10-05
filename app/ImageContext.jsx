import React, { createContext, useState } from 'react';

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const updateImage = (imageUri) => {
    console.log("Updating Image in Context:", imageUri);  // Log when image is updated
    setSelectedImage(imageUri);  // Update the image in the context
  };

  return (
    <ImageContext.Provider value={{ selectedImage, setSelectedImage: updateImage }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;
