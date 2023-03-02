import { clsx } from "clsx";

export default function LayoutPortrait({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "grid grid-flow-row grid-rows-[auto_1fr] items-center gap-4"
      )}
    >
      {children}
    </div>
  );
}
