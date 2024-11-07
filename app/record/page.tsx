import AnchorLink from "@/components/AnchorLink";
import DownloadCVButton from "@/components/DownloadCVButton";
import { Logo } from "@/components/Logo";
import { Table } from "@/components/Table";
import { jobs } from "@/lib/data/jobs";
import Link from "next/link";

export default function Work() {
  return (
    <div className="m-5 bg-radio">
      <section className="mb-5">
        <h2 className="text-xl underline decoration-1 underline-offset-2 font-light mb-4">
          Service Record
        </h2>
        <aside className="p-4 bg-gray bg-opacity-10 normal-case text-sm text-lime-light relative">
          <span className="absolute -left-2 -top-1">
            <Logo color="lime" size={5} />
          </span>
          Intelligence suggests James has been deeply embedded in the
          React/Next.js ecosystem, servicing a variety of B2C & B2B software
          applications for our network of friendly corporations.
        </aside>
        <DownloadCVButton />
      </section>
      <section>
        <h2 className="text-xl underline decoration-1 underline-offset-2 font-light mb-4">
          History ({jobs.length})
        </h2>
        {jobs.reverse().map((job) => (
          <article className="mb-8" key={job.id}>
            <small className="font-bold">
              {getMonthYearStartEndDates(job.startDate, job.endDate)}
            </small>
            <div className="px-4 py-3 mt-2 bg-gray bg-opacity-10">
              <Table data={job.data} />
              <Link
                href={`record/${job.id}`}
                className="mt-4 block uppercase underline underline-offset-4"
              >
                Read internal report
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

function getMonthYearStartEndDates(startDate: string, endDate: string) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const startMonthYear = start.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  const endMonthYear = end.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  return `${startMonthYear} - ${endMonthYear}`;
}
