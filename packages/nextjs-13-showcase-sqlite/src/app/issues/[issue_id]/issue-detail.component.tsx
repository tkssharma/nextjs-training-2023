import { Issue } from "@prisma/client";

interface IIssueDetailProps {
  issue: Issue | null;
}

export function IssueDetail({ issue }: IIssueDetailProps) {
  return (
    <article className="h-screen p-12">
      <header className="flex flex-col gap-2">
        <h1 className="font-bold text-lg">{issue?.title}</h1>
        <p className="font-semibold">{issue?.summary}</p>
      </header>
      <p className="pt-6">{issue?.description}</p>
    </article>
  );
}
