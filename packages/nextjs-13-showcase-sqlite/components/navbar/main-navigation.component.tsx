import Link from "next/link";

export function MainNavigation() {
  return (
    <nav className="flex justify-start items-center bg-[#430672] py-8 text-white px-4">
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>
        </li>
      </ul>
    </nav>
  );
}
