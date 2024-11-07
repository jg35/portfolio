import { citizenOverview, intelligenceReports } from "@/lib/data/tables";
import { Table } from "@/components/Table";
import Loading from "@/components/Loading";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Loading />
      <section className="border-b-white border-b border-dashed flex p-5 justify-between">
        <div className="flex flex-col justify-between h-28">
          <div>
            <span className="font-light">
              Profile:
              <br />
            </span>
            <h1 className="text-2xl">James Graham</h1>
          </div>
          <span className="bg-yellow p-1 text-black text-sm font-bold text-center">
            Wanted for Service
          </span>
        </div>
        <div className="relative crt">
          <Image
            width={112}
            height={112}
            alt="James"
            src="/static/profile.png"
          />
        </div>
      </section>
      <section className="border-b-white border-b border-dashed p-5">
        <h2 className="text-xl underline decoration-1 underline-offset-2 font-light mb-4">
          Citizen Overview
        </h2>
        <Table data={citizenOverview} />
      </section>
      <section className="p-5">
        <h2 className="text-xl underline decoration-1 underline-offset-2 font-light mb-4">
          Intelligence Reports
        </h2>
        <Table data={intelligenceReports} />
      </section>
    </>
  );
}
