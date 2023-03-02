import React from "react";
import NextImage from "next/image";

export default function Image({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-100 relative overflow-hidden rounded-lg bg-slate-200 pt-[66%]">
      <NextImage
        src={src}
        alt={alt}
        fill
        sizes=""
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
