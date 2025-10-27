'use client';
import React, { useRef, useState } from 'react';

type ImageItem = {
  id: string;
  src: string;
  isObjectUrl?: boolean;
};

export default function GalleryWidget() {
  const [images, setImages] = useState<ImageItem[]>([
    { id: 'img1', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop' },
    { id: 'img2', src: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=300&fit=crop' },
    { id: 'img3', src: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=300&fit=crop' }
  ]);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [hoveredImage, setHoveredImage] = useState<{ id: string; rect: DOMRect; src: string } | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages: ImageItem[] = files.map((file) => ({
      id: `upload_${Date.now()}_${file.name}`,
      src: URL.createObjectURL(file),
      isObjectUrl: true
    }));
    setImages([...images, ...newImages]);
    e.target.value = '';
  };

  const handleImageHover = (img: ImageItem, element: HTMLDivElement | null) => {
    if (element) {
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      const rect = element.getBoundingClientRect();
      setIsExiting(false);
      setHoveredImage({ id: img.id, rect, src: img.src });
    }
  };

  const handleImageLeave = () => {
    
    setIsExiting(true);
    
    timeoutRef.current = setTimeout(() => {
      setHoveredImage(null);
      setIsExiting(false);
    }, 650); 
  };

  return (
    <>
      <div className="widget-container gallery-widget">
        
        <button
          className="icon-button help-icon"
          aria-label="Help"
          title="Help"
          tabIndex={-1}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
            role="img"
          >
            <defs>
              <linearGradient id="helpGrad" x1="0" x2="1" y1="0" y2="1" gradientTransform="rotate(-32)">
                <stop offset="0%" stopColor="#4A4E54" />
                <stop offset="100%" stopColor="#A3ADBA" />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="10" stroke="url(#helpGrad)" strokeWidth="1.6" opacity="0.95" fill="none" />
            <path d="M12 16v.01" stroke="url(#helpGrad)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.6 9.6c0-1.3 1.05-2.35 2.35-2.35 1.3 0 2.35 1.05 2.35 2.35 0 1.42-1.42 1.52-1.88 2.14-.54.79-.45 1.33-.45 1.69" stroke="url(#helpGrad)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          className="icon-button grid-icon"
          aria-label="Grid"
          title="Grid"
          tabIndex={-1}
        >
          <div className="grid-icon-box"></div>
          <div className="grid-icon-box"></div>
          <div className="grid-icon-box"></div>
          <div className="grid-icon-box"></div>
          <div className="grid-icon-box"></div>
          <div className="grid-icon-box"></div>
        </button>

        <div className="widget-content">
          <div className="gallery-header">
            <button className="gallery-label">Gallery</button>
            
            <div className="gallery-controls">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="add-image-btn"
              >
                + ADD IMAGE
              </button>
              
              <div className="arrow-buttons">
                <button 
                  onClick={() => handleScroll('left')} 
                  className="arrow-btn"
                  aria-label="Scroll left"
                >
                  ←
                </button>
                <button 
                  onClick={() => handleScroll('right')} 
                  className="arrow-btn"
                  aria-label="Scroll right"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleAddImage}
            className="hidden-input"
            aria-label="Upload images"
          />

          <div className="gallery-scroll-wrapper">
            <div ref={scrollRef} className="gallery-scroll">
              {images.map((img) => (
                <div 
                  key={img.id} 
                  className="gallery-image"
                  style={{ 
                    backgroundImage: `url(${img.src})`,
                    opacity: (hoveredImage?.id === img.id && !isExiting) ? 0 : 1,
                    transition: 'opacity 0.35s ease, filter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                  role="img"
                  aria-label="Gallery item"
                  onMouseEnter={(e) => handleImageHover(img, e.currentTarget)}
                  onMouseLeave={handleImageLeave}
                >
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {hoveredImage && (
        <div
          style={{
            position: 'fixed',
            left: `${hoveredImage.rect.left}px`,
            top: `${hoveredImage.rect.top}px`,
            width: `${hoveredImage.rect.width}px`,
            height: `${hoveredImage.rect.height}px`,
            backgroundImage: `url(${hoveredImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '24px',
            transform: isExiting 
              ? 'scale(1) rotate(0deg) translateY(0px)' 
              : 'scale(1.15) rotate(-5deg) translateY(-15px)',
            filter: isExiting ? 'grayscale(100%)' : 'grayscale(0%)',
            boxShadow: isExiting 
              ? '0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(255, 255, 255, 0)' 
              : '-10px 15px 40px rgba(0, 0, 0, 0.8), 0px 0px 25px rgba(255, 255, 255, 0.15)',
            zIndex: 9999,
            pointerEvents: 'none',
            transition: 'transform 0.65s cubic-bezier(0.22, 0.61, 0.36, 1), filter 0.6s ease-out, box-shadow 0.6s ease-out',
            willChange: 'transform',
            opacity: 1,
          }}
        />
      )}
    </>
  );
}