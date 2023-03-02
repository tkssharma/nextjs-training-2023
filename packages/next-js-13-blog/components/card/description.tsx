import React from "react";

export default function Description({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="text-slate-500 italic">{children}</p>;
}
