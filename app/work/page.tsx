import { useState } from "react";
import history from "./data";
import Image from "next/image";

type JobSelection = "BRITISH" | "PULSELIVE" | "LUXDECO" | "MC";

export default function Work() {
  const [activeJob, setActiveJob] = useState<JobSelection>("MC");

  const visibleJob = history.find((job) => job.id === activeJob);

  function getAge(startDate: string) {
    const start = new Date(startDate);
    const dob = new Date("02/12/1989");
    const diff = Math.abs(start.getTime() - dob.getTime());
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    return years;
  }

  return (
    <>
      <div className="flex">
        <div className="flex flex-col justify-between">
          {/* 3d model */}
          <div className="grow h-full"></div>
          {/* job selector */}
          <div className="flex ">
            {history.map((job) => (
              <button
                key={job.id}
                className="rounded-full h-32 w-32 p-1 flex items-center justify-center shadow mx-2"
                style={{
                  backgroundColor: "#fff",
                }}
                onClick={() => setActiveJob(job.id)}
              >
                <Image
                  src={`/static/company-logos/${job.logo}`}
                  width={100}
                  height={100}
                  alt={job.company}
                />
              </button>
            ))}
          </div>
        </div>

        {/* job details */}
        <div>
          {visibleJob && (
            <div>
              <div>{visibleJob?.company}</div>
              <div>Age: {getAge(visibleJob.startDate)}</div>
              <div>Role: {visibleJob.role}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
