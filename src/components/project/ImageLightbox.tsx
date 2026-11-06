import React, { useState, useEffect, useRef } from "react";
import type { ImageAsset } from "../../data/schema";

interface ImageLightboxProps {
  images: ImageAsset[];
}

export function ImageLightbox({ images }: ImageLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isFullRes, setIsFullRes] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isOpen = selectedIndex !== null;
  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
    setIsFullRes(false);
  };

  const handleClose = () => {
    setSelectedIndex(null);
    setIsFullRes(false);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
    setIsFullRes(false);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    setIsFullRes(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, selectedIndex]);

  return (
    <div>
      {/* Grid of gallery thumbnails */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <figure
            key={idx}
            className="group relative overflow-hidden rounded-lg border border-border/40 bg-black/40 cursor-pointer"
            onClick={() => handleOpen(idx)}
          >
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <figcaption className="p-3 bg-[hsl(var(--bg-surface))] text-xs text-muted-foreground flex items-center justify-between">
              <span className="truncate pr-2">{img.caption || img.alt}</span>
              <span className="font-mono-tech text-primary shrink-0">Zoom ↗</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Lightbox Dialog Modal */}
      {isOpen && currentImage && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono-tech">
            <span className="text-muted-foreground">
              {selectedIndex! + 1} / {images.length}
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsFullRes(!isFullRes)}
                className="rounded px-2.5 py-1 bg-white/10 text-foreground hover:bg-white/20 transition-colors"
              >
                {isFullRes ? "Standard View" : "View Full Resolution (Original)"}
              </button>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleClose}
                className="rounded p-1 text-muted-foreground hover:text-foreground hover:bg-white/10"
                aria-label="Close lightbox"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image Viewing Area */}
          <div className="relative flex-1 flex items-center justify-center overflow-auto py-4">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className={`max-h-full max-w-full object-contain transition-transform ${
                isFullRes ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setIsFullRes(!isFullRes)}
            />

            {/* Previous Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white hover:bg-primary hover:text-black transition-colors focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Previous image"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white hover:bg-primary hover:text-black transition-colors focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Next image"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Caption Footer */}
          <div className="pt-3 border-t border-white/10 text-center">
            <p className="text-sm text-foreground font-medium">
              {currentImage.caption || currentImage.alt}
            </p>
            <p className="text-xs text-muted-foreground font-mono-tech mt-1">
              Dimensions: {currentImage.width} × {currentImage.height} px · Use Left/Right keys to navigate · Esc to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
