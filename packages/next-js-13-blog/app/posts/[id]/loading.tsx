import Border from "components/card/border";
import LayoutPortrait from "components/card/layout-portrait";

export default function PostsIdLoading() {
  return (
    <div className="h-full w-full">
      <Border>
        <LayoutPortrait>
          <div className="w-100 relative overflow-hidden rounded-lg bg-slate-200 pt-[66%]" />
          <Border>
            <div className="flex flex-col gap-2">
              <div className="h-7 overflow-hidden rounded-lg bg-slate-200" />
              <div className="h-24 overflow-hidden rounded-lg bg-slate-200" />
              <div className="grid auto-cols-[96px] grid-flow-col gap-4">
                <div className="h-10 overflow-hidden rounded-lg bg-slate-200" />
                <div className="h-10 overflow-hidden rounded-lg bg-slate-200" />
                <div className="h-10 overflow-hidden rounded-lg bg-slate-200" />
              </div>
            </div>
          </Border>
        </LayoutPortrait>
      </Border>
    </div>
  );
}
