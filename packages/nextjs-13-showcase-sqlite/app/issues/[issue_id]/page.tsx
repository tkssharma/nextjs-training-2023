import { PrismaClient } from "@prisma/client";
import { wait } from "../../../utils/wait";
import { IssueDetail } from "./issue-detail.component";

async function IssueDetailPage({ params: { issue_id } }) {
  const prisma = new PrismaClient();
  const issue = await prisma.issue.findFirst({
    where: {
      id: Number(issue_id),
    },
  });
  await wait(1);

  if (!issue) {
    throw new Error("Issue not found!");
  }

  return <IssueDetail issue={issue} />;
}

export default IssueDetailPage;
