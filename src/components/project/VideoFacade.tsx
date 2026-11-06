import React, { useState } from "react";
import type { VideoAsset } from "../../data/schema";

interface VideoFacadeProps {
  video: VideoAsset;
  title: string;
}

export function VideoFacade({ video, title }: VideoFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const getEmbedUrl = () => {
    if (video.vimeoId && !video.vimeoId.includes("TODO")) {
      return `https://player.vimeo.com/video/${video.vimeoId}?autoplay=1`;
    }
    if (video.youtubeId && !video.youtubeId.includes("TODO")) {
      return `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`;
    }
    return null;
  };

  const embedUrl = getEmbedUrl();

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 bg-black/50">
      {isLoaded && embedUrl ? (
        <iframe
          src={embedUrl}
          title={title}
          className="h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="relative h-full w-full group">
          <img
            src={video.poster.src}
            alt={video.poster.alt}
            width={video.poster.width}
            height={video.poster.height}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            <button
              type="button"
              onClick={() => setIsLoaded(true)}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-black shadow-lg transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Play ${title}`}
            >
              <svg className="h-6 w-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <span className="mt-3 text-xs font-mono-tech text-foreground/90 font-medium">
              Click to Load Video ({title})
            </span>
            <span className="text-[10px] text-muted-foreground font-mono-tech mt-1">
              Protects data & privacy · No third-party network requests until clicked
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
