import React from "react";

export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex rounded-lg border border-slate-200 px-4 py-2 capitalize text-slate-900">
      {children}
    </p>
  );
}
