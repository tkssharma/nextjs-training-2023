import Border from "components/card/border";
import LayoutLandscape from "components/card/layout-landscape";
import Outer from "components/card/outer";
import Shadow from "components/card/shadow";

export default function PostsSkeleton() {
  return (
    <ul
      className="row-start-2 grid snap-x snap-mandatory auto-cols-[90%] grid-flow-col gap-4 overflow-auto border-t border-slate-200 p-4 md:row-start-1 md:auto-cols-[100%] md:grid-flow-row"
      tabIndex={-1}
    >
      {[...Array(8).keys()].map((index) => (
        <li key={`posts-skeleton-${index}`} className="snap-center">
          <Outer>
            <Shadow>
              <Border>
                <LayoutLandscape>
                  <div className="w-100 relative overflow-hidden rounded-lg bg-slate-200 pt-[66%]" />
                  <Border>
                    <div className="flex flex-col gap-2">
                      <div className="h-6 overflow-hidden rounded-lg bg-slate-200" />
                      <div className="h-5 overflow-hidden rounded-lg bg-slate-200" />
                    </div>
                  </Border>
                </LayoutLandscape>
              </Border>
            </Shadow>
          </Outer>
        </li>
      ))}
    </ul>
  );
}
