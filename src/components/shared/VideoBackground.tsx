import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  /** Path to the video file (mp4). If omitted, only the fallback is shown. */
  src?: string;
  /** CSS class for the wrapper element */
  className?: string;
}

/**
 * Lazy-loads and autoplays a muted looping video when it enters the viewport.
 * Falls back to a gradient background if no src is provided or if autoplay fails.
 */
const VideoBackground = ({ src, className = "" }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const video = videoRef.current;
    if (!src || !wrapper || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.src = src;
          video.load();
          video.play().catch(() => {
            // Autoplay blocked — fallback gradient remains visible
          });
          observer.disconnect();
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div
      ref={wrapperRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Gradient fallback — always visible until video loads */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {src && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          onCanPlay={() => setLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
};

export default VideoBackground;
