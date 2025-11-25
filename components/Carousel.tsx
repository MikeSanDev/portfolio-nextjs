"use client";
import { useState } from "react";
import Image from "next/image";

export type CarouselImage = { src: string; alt: string };

// Props: EITHER images OR slides (not both)
type Props =
  | { images: CarouselImage[]; slides?: never; className?: string }
  | { images?: never; slides: React.ReactNode[]; className?: string };

export default function Carousel(props: Props) {
  const [i, setI] = useState(0);

  const isSlides = "slides" in props && Array.isArray(props.slides);
  const count = isSlides ? (props.slides?.length ?? 0) : (props.images?.length ?? 0);
  if (!count) return <div className="text-white">No content</div>;

  const next = () => setI((p) => (p + 1) % count);
  const prev = () => setI((p) => (p - 1 + count) % count);

  const className = "className" in props && props.className ? props.className : "";

  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      <div className="relative h-80 md:h-96 overflow-hidden rounded-lg bg-gray-900">
        <div className="absolute inset-0">
          {isSlides ? (
            props.slides![i]
          ) : (
            <Image
              src={props.images![i].src}
              alt={props.images![i].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority={i === 0}
            />
          )}
        </div>
      </div>

      {count > 1 && (
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

          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: count }).map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2.5 w-2.5 rounded-full ${
                  idx === i ? "bg-accentColor" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}