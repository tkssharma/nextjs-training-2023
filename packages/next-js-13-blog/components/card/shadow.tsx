import React from "react";

export default function Shadow({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg shadow-slate-200">
      {children}
    </div>
  );
}
