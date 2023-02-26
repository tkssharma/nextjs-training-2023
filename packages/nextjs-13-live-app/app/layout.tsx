import { Patrick_Hand } from "@next/font/google";

import "../styles/reset.css";
import "../styles/globals.css";

const font = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="container">{children}</body>
    </html>
  );
}
