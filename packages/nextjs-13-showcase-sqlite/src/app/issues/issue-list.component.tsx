import { Issue } from "@prisma/client";
import Link from "next/link";

interface IIssueListProps {
  issues: Issue[];
}

export function IssueList({ issues }: IIssueListProps) {
  return (
    <ul className="flex flex-col">
      {issues.map((issue) => (
        <li className="p-4 text-white border-b-2 border-[#46404c]" key={issue.id}>
          <article>
            <h2>{issue.title}</h2>
            <p>{issue.summary}</p>
            <p>
              <Link href={`/issues/${issue.id}`} className="text-[#cda7fa] hover:text-[#b47df7]">View Details</Link>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}
