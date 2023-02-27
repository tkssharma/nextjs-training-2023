import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head /> will contain the components returned by the nearest parent head.jsx. Find out more at
      https://beta.nextjs.org/docs/api-reference/file-conventions/head
      <head /> */}
      <body>
        <main exit={{ opacity: 0 }} initial="initial" animate="animate" className="m-24">
             {children}
        </main>
      </body>
    </html>
  );
}
