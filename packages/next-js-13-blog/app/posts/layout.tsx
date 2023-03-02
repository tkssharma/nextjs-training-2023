import { Suspense } from "react";
import Posts from "./posts";
import PostsSkeleton from "./posts-skeleton";

export default async function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col">
        <div className="border-b border-slate-200 p-4">
          <h1 className="text-4xl font-extrabold text-slate-900">
            The Blog: <span className="text-slate-500">Posts</span>
          </h1>
        </div>
        <div className="grid h-full w-full grid-cols-1 grid-rows-[1fr_auto] overflow-hidden md:grid-cols-[2fr_3fr]">
          <Suspense fallback={<PostsSkeleton />}>
            {/* @ts-expect-error Async Server Component */}
            <Posts />
          </Suspense>
          <div className="grid h-full w-full gap-4 overflow-y-auto p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
