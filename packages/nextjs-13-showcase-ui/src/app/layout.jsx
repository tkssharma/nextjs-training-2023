import { Montserrat } from "@next/font/google";
import "./globals.css";

export const API_KEY = process.env.MOVIE_DB_API_KEY;
export const prefixUrl = `https://api.themoviedb.org/3`;

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head /> will contain the components returned by the nearest parent head.jsx. Find out more at
      https://beta.nextjs.org/docs/api-reference/file-conventions/head
      <head /> */}
      <body className={montserrat.className}>
        <main exit={{ opacity: 0 }} initial="initial" animate="animate" className="m-24">
          {children}
        </main>
      </body>
    </html>
  );
}
