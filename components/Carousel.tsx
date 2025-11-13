"use client";
import { useState } from "react";
import Image from "next/image";

export type CarouselImage = { src: string; alt: string };

type Props = {
  images: CarouselImage[];
  className?: string;
};

export default function Carousel({ images, className = "" }: Props) {
  const [i, setI] = useState(0);
  if (!images?.length) return <div className="text-white">No images</div>;

  const next = () => setI((p) => (p + 1) % images.length);
  const prev = () => setI((p) => (p - 1 + images.length) % images.length);

  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      <div className="relative h-80 md:h-96 overflow-hidden rounded-lg bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src={images[i].src}
            alt={images[i].alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority={i === 0}
          />
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-3 py-2 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-3 py-2 rounded-full"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
