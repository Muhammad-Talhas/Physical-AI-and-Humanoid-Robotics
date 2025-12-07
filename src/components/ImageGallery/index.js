import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, title = "Gallery" }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openFullscreen = (index) => {
    setCurrentImage(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div className={styles.galleryContainer}>
      <h3 className={styles.galleryTitle}>{title}</h3>

      {/* Thumbnail Grid */}
      <div className={styles.thumbnailGrid}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.thumbnail}
            onClick={() => openFullscreen(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={styles.thumbnailImg}
              title={image.alt}
            />
            <div className={styles.thumbnailCaption}>{image.caption}</div>
          </div>
        ))}
      </div>

      {/* Main Display */}
      {images.length > 0 && (
        <div className={styles.mainDisplay}>
          <div className={styles.imageContainer}>
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className={styles.mainImage}
              onClick={images.length > 1 ? nextImage : undefined}
            />
            <div className={styles.imageCaption}>
              {images[currentImage].caption}
            </div>
          </div>

          {images.length > 1 && (
            <div className={styles.navigation}>
              <button className={styles.navButton} onClick={prevImage}>
                ←
              </button>
              <div className={styles.imageCounter}>
                {currentImage + 1} / {images.length}
              </div>
              <button className={styles.navButton} onClick={nextImage}>
                →
              </button>
            </div>
          )}
        </div>
      )}

      {/* Fullscreen Modal */}
      {isFullscreen && images.length > 0 && (
        <div className={styles.fullscreenModal} onClick={closeFullscreen}>
          <div className={styles.fullscreenContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeFullscreen}>
              ×
            </button>
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className={styles.fullscreenImage}
            />
            <div className={styles.fullscreenCaption}>
              {images[currentImage].caption}
            </div>
            <div className={styles.fullscreenNavigation}>
              <button className={styles.fullscreenNavButton} onClick={prevImage}>
                ←
              </button>
              <button className={styles.fullscreenNavButton} onClick={nextImage}>
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;