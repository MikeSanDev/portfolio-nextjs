"use client";
import React from "react";

/** Generic responsive iframe wrapper for embeds (Instagram, SoundCloud, etc.) */
type Props = {
  src: string;           // full embed URL
  title: string;         // for accessibility
  className?: string;    // optional extra classes
};

/**
 * This fills its parent, so place it inside a relative, fixed-height frame
 * (like the one Carousel already uses).
 */
export default function Embed({ src, title, className = "" }: Props) {
  return (
    <div className={`w-full h-full flex items-center justify-center p-4 ${className}`}>
      <iframe
        src={src}
        title={title}
        className="w-full h-full rounded-lg"
        frameBorder={0}
        scrolling="no"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      />
    </div>
  );
}
