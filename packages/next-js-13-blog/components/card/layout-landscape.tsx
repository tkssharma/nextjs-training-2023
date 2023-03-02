export default function LayoutLandscape({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={"grid grid-flow-col grid-cols-[100px_1fr] items-center gap-4"}
    >
      {children}
    </div>
  );
}
