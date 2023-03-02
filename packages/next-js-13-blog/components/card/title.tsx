import React from "react";

export default function Title({ children }: { children: React.ReactNode }) {
  return <h2 className=" text-slate-900 text-xl font-extrabold">{children}</h2>;
}
