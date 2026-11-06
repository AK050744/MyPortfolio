import React, { useState, useEffect, useRef } from "react";
import type { Profile } from "../../data/schema";

interface ShowreelModalProps {
  showreel: Profile["showreel"];
  basePath?: string;
}

export function ShowreelModal({ showreel, basePath = "" }: ShowreelModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Open modal handler
  const handleOpen = () => {
    setIsOpen(true);
  };

  // Close modal handler
  const handleClose = () => {
    setIsOpen(false);
    // Return focus to trigger button
    triggerRef.current?.focus();
  };

  // Handle ESC key and focus trapping
  useEffect(() => {
    if (!isOpen) return;

    // Lock background scroll
    document.body.style.overflow = "hidden";

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }

      // Simple focus trap inside modal
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <!-- Trigger Button -->
      <button
        ref={triggerRef}
        type="button"
        onClick={handleOpen}
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/50 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-black focus-visible:ring-2 focus-visible:ring-ring"
        aria-haspopup="dialog"
      >
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
        <span>Play 3D Showreel</span>
      </button>

      <!-- Accessible Dialog Modal -->
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="showreel-modal-title"
          ref={modalRef}
        >
          {/* Backdrop Click to Close */}
          <div
            className="fixed inset-0"
            aria-hidden="true"
            onClick={handleClose}
          />

          <div className="relative z-10 flex w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-border/60 bg-[hsl(var(--bg-studio))] shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border/40 px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                <h2
                  id="showreel-modal-title"
                  className="text-lg font-bold text-foreground"
                >
                  {showreel.title}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleClose}
                className="rounded-md p-1.5 text-muted-foreground hover:bg-white/10 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Close showreel modal"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Video Player Container (Autoplay with sound allowed because triggered by user click) */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`${showreel.embedUrl}?autoplay=1&rel=0`}
                title={showreel.title}
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Modal Footer / Featured Projects List */}
            <div className="bg-[hsl(var(--bg-surface))] p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono-tech">
                  Featured Projects in Reel
                </span>
                <div className="flex items-center gap-4 text-xs font-mono-tech">
                  <a
                    href={showreel.fallbackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Watch on YouTube / Vimeo ↗
                  </a>
                  {showreel.captionsUrl && (
                    <span className="text-muted-foreground">
                      Captions: {showreel.captionsUrl}
                    </span>
                  )}
                </div>
              </div>

              {/* Timestamp Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {showreel.featuredProjects.map((item, idx) => (
                  <a
                    key={idx}
                    href={`${basePath}/work/${item.slug}`}
                    onClick={handleClose}
                    className="flex items-center justify-between p-2 rounded border border-border/30 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                  >
                    <span className="text-foreground/90 font-medium">{item.title}</span>
                    {item.timestamp && (
                      <span className="font-mono-tech text-primary">{item.timestamp}</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
