// src/components/PhotoGrid.tsx
import React, { useEffect, useState } from 'react';
import { fetchCatImages } from '../services/photoService';

interface PhotoGridProps {
  customerId: number | null;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ customerId }) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (customerId !== null) {
      const loadImages = async () => {
        const fetchedImages = await fetchCatImages();
        setImages(fetchedImages);
      };

      loadImages();

      const interval = setInterval(loadImages, 10000); // Change images every 10 seconds

      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [customerId]);

  if (!customerId) {
    return <div>Please select a customer to see images.</div>;
  }

  return (
    <div className="photo-grid">
      {images.map((url, index) => (
        <img key={index} src={url} alt="Cat" />
      ))}
    </div>
  );
};

export default PhotoGrid;
