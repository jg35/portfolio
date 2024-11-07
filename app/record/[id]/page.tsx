import { jobs } from "@/lib/data/jobs";

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const job = jobs.find((job) => job.id === parseInt(id));

  return <div>Job: {job?.data.company}</div>;
}
