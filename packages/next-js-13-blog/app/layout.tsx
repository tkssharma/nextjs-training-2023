import SeparatorVertical from "components/card/separator-vertical";
import Link from "next/link";

import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div className="absolute grid h-full w-full grid-rows-[auto_1fr_auto] overflow-hidden">
          <header>
            <nav>
              <ul className="flex border-b border-slate-200 p-4">
                <li>
                  <Link
                    href="/"
                    className="flex rounded-lg bg-slate-900 px-4 py-2 font-semibold uppercase text-white"
                  >
                    LOGO
                  </Link>
                </li>
                <li className="ml-auto">
                  <Link
                    href="/"
                    className="flex rounded-lg px-4 py-2 text-slate-900"
                  >
                    Home
                  </Link>
                </li>
                <li className="px-4 py-2">
                  <SeparatorVertical />
                </li>
                <li>
                  <Link
                    href="/posts"
                    className="flex rounded-lg px-4 py-2 text-slate-900"
                  >
                    Posts
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className="relative overflow-hidden">{children}</main>
          <footer>
            <nav>
              <ul className="flex gap-2 border-t border-slate-200 p-2">
                <li>
                  <Link
                    href="/"
                    className="flex rounded-lg px-2 py-1 text-sm text-slate-900"
                  >
                    /
                  </Link>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
