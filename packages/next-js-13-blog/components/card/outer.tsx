"use client";

import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

export default function Outer({
  path,
  id,
  children,
}: {
  path?: string;
  id?: number;
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();

  const isActive = path && id ? path + id === path + segment : false;

  return (
    <div
      className={clsx(
        `transition md:hover:scale-[1.02]`,
        isActive ? "md:scale-[0.98]" : ""
      )}
    >
      {children}
    </div>
  );
}
