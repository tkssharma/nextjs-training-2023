import Border from "components/card/border";
import LayoutPortrait from "components/card/layout-portrait";
import Outer from "components/card/outer";

export default function RecommendedSkeleton() {
  return (
    <div className="border-t border-slate-200">
      <ul className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4).keys()].map((index) => (
          <li key={`recommended-skeleton-${index}`}>
            <Outer>
              <Border>
                <LayoutPortrait>
                  <div className="w-100 relative overflow-hidden rounded-lg bg-slate-200 pt-[66%]" />
                  <Border>
                    <div className="flex flex-col gap-2">
                      <div className="h-7 overflow-hidden rounded-lg bg-slate-200" />
                      <div className="h-12 overflow-hidden rounded-lg bg-slate-200" />
                    </div>
                  </Border>
                </LayoutPortrait>
              </Border>
            </Outer>
          </li>
        ))}
      </ul>
    </div>
  );
}
