'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type ImgItem = {
  id: string;
  src: string;
  name?: string;
  isObjectUrl?: boolean;
};

export default function GalleryWidget(): React.JSX.Element {
  const initial: ImgItem[] = [
    { id: 'p1', src: '/placeholder1.jpg' },
    { id: 'p2', src: '/placeholder2.jpg' },
    { id: 'p3', src: '/placeholder3.jpg' }
  ];

  const [images, setImages] = useState<ImgItem[]>(initial);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const stripRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // cleanup object URLs on component unmount
    return () => {
      images.forEach(img => {
        if (img.isObjectUrl) {
          URL.revokeObjectURL(img.src);
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleAddClick() {
    fileRef.current?.click();
  }

  function onFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    const mapped: ImgItem[] = files.map((f) => ({
      id: `u_${Date.now()}_${f.name}`,
      src: URL.createObjectURL(f),
      name: f.name,
      isObjectUrl: true
    }));
    setImages(prev => [...prev, ...mapped]);
    e.target.value = '';
  }

  function scrollBy(delta: number) {
    if (!stripRef.current) return;
    stripRef.current.scrollBy({ left: delta, behavior: 'smooth' });
  }

  return (
    <div className="neumo-card p-6 mt-6">
      <div className="flex items-center justify-between mb-4">
        <div className="tab-pill text-sm">Gallery</div>
        <div className="flex items-center gap-3">
          <button onClick={handleAddClick} className="tab-pill px-3 py-1 text-xs" aria-label="Add image">
            + ADD IMAGE
          </button>

          <div className="flex items-center gap-2">
            <button onClick={() => scrollBy(-300)} className="tab-pill p-2" aria-label="Scroll left">
              ◀
            </button>
            <button onClick={() => scrollBy(300)} className="tab-pill p-2" aria-label="Scroll right">
              ▶
            </button>
          </div>
        </div>
      </div>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        multiple
        onChange={onFiles}
        className="hidden"
        title="Add images to gallery"
        placeholder="Select images"
      />

      <div
        ref={stripRef}
        className="mt-3 overflow-x-auto widget-scroll py-2"
        style={{ whiteSpace: 'nowrap', scrollbarGutter: 'stable' }}
      >
        <div className="inline-flex gap-4 pr-6">
          {images.map((img) => (
            <div 
              key={img.id} 
              className="relative w-40 h-28 bg-gray-800 shrink-0 rounded-xl overflow-hidden" 
            >
              
              <Image 
                src={img.src} 
                alt={img.name ?? 'gallery image'} 
                layout="fill" 
                className="object-cover thumb" 
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 card-inner-hr" />
    </div>
  );
}
