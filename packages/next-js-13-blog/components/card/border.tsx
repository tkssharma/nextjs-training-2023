import clsx from "clsx";
import React from "react";

export default function Border({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <div
      className={clsx("overflow-hidden rounded-lg border border-slate-200 p-4")}
    >
      {children}
    </div>
  );
}
