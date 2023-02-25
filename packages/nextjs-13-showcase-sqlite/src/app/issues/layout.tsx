import { PrismaClient } from "@prisma/client";
import { ReactNode } from "react";
import { IssueList } from "./issue-list.component";

async function IssuesLayout({ children }: { children: ReactNode }) {
  const prisma = new PrismaClient()
  const issues = await prisma.issue.findMany(); 

  return (
    <>
      <div className="grid list-container">
        <aside className="h-screen px-8 bg-[#29252e]">
          <IssueList issues={issues} />
        </aside>
        {children}
      </div>
      <style>{`
        .list-container {
          grid-template-columns: 25% 75%;
        }
      `}</style>
    </>
  );
}

export default IssuesLayout;
