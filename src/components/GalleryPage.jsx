import React, { useState } from 'react';
import './GalleryPage.css';

const GalleryPage = () => {
  const allImages = [
    './src/assets/img/5.jpg',
    './src/assets/img/8.jpg',
    './src/assets/img/7.jpg',
    './src/assets/img/24.jpg',
    './src/assets/img/10.jpg',
    './src/assets/img/12.jpg',
    './src/assets/img/26.jpg',
    './src/assets/img/11.jpg',
    './src/assets/img/22.jpg',
    './src/assets/img/6.jpg',
    './src/assets/img/13.jpg',
    './src/assets/img/14.jpg',
    './src/assets/img/19.jpg',
    './src/assets/img/16.jpg',
    './src/assets/img/17.jpg',
    './src/assets/img/2.jpg',
    './src/assets/img/3.jpg',
    './src/assets/img/15.jpg',
    './src/assets/img/1.jpg',
    './src/assets/img/20.jpg',
    './src/assets/img/21.jpg',
    // Add more image URLs
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = allImages.slice(startIndex, endIndex);

  const handleNext = () => {
    const totalPages = Math.ceil(allImages.length / itemsPerPage);
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : 1));
  };

  const handlePrevious = () => {
    const totalPages = Math.ceil(allImages.length / itemsPerPage);
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : totalPages));
  };

  return (
    <div>
      <div className="gallery-container">
        <button className="gallery-arrow prev" onClick={handlePrevious}>⬅️</button>
        {currentImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Location ${startIndex + index + 1}`} className="gallery-image" />
          </div>
        ))}
        <button className="gallery-arrow next" onClick={handleNext}>➡️</button>
      </div>
    </div>
  );
};

export default GalleryPage;
