import { jobs } from "@/lib/data/jobs";
import Link from "next/link";

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const job = jobs.find((job) => job.id === parseInt(id));

  return (
    <div className="h-full flex flex-col p-5">
      <h1 className="text-xl underline decoration-1 underline-offset-2 font-light">
        Report - {job?.data.company}
      </h1>
      <article className="bg-gray bg-opacity-10 p-3 my-5 overflow-scroll">
        <p className="normal-case text-lime-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id
          pellentesque purus, eget tincidunt orci. Fusce porttitor rhoncus eros,
          at ultricies purus imperdiet ut. Praesent et finibus diam. Ut lacinia
          sollicitudin posuere. Nunc pretium vehicula turpis, eget dapibus mi
          rhoncus id. Aliquam in nunc justo. In lobortis et diam vel molestie.
          Sed tincidunt sed erat a aliquet. Fusce iaculis eros quis egestas
          pretium. Morbi ac pharetra nisl, pretium consequat ante. Sed rutrum
          mauris nibh, nec ultrices nunc suscipit vel. Pellentesque aliquet
          posuere urna, luctus mattis quam viverra quis. Curabitur ut fermentum
          ex. Vestibulum tincidunt iaculis enim vel blandit. Nullam accumsan
          nunc ac tincidunt viverra. Phasellus laoreet volutpat felis vel
          consectetur. Nulla dictum convallis metus eu lobortis. Fusce id
          sagittis tellus. Aenean vel orci at velit efficitur ullamcorper nec
          feugiat eros. Donec dapibus erat quis lacus mollis rutrum. Morbi
          maximus, urna a mollis sodales, turpis lacus condimentum ex, et
          suscipit orci erat nec est. Proin bibendum tortor quis nunc sagittis
          rhoncus. Pellentesque in nisi sollicitudin tellus viverra posuere non
          at ex. Mauris vel vehicula tellus. Pellentesque hendrerit egestas
          magna. Quisque eu enim orci. Integer consectetur ligula leo, quis
          hendrerit sapien malesuada at. Vivamus vulputate lectus et sapien
          blandit ultrices. Aliquam eleifend, odio pharetra dapibus pharetra,
          nibh magna porttitor neque, et egestas diam justo et dui. Sed felis
          risus, molestie a venenatis vel, vulputate quis arcu. Vivamus eget sem
          malesuada, congue ipsum sit amet, imperdiet ligula. Sed sollicitudin
          tempor est eu semper. Praesent vel neque eget augue imperdiet
          malesuada quis eu magna. Morbi et volutpat eros, sit amet bibendum
          orci. Vivamus ipsum mauris, aliquet eget cursus in, commodo vitae mi.
          Nam vehicula vel libero id venenatis. Fusce id maximus risus. Mauris
          maximus quam quis purus tempus sagittis.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Etiam id pellentesque purus, eget
          tincidunt orci. Fusce porttitor rhoncus eros, at ultricies purus
          imperdiet ut. Praesent et finibus diam. Ut lacinia sollicitudin
          posuere. Nunc pretium vehicula turpis, eget dapibus mi rhoncus id.
          Aliquam in nunc justo. In lobortis et diam vel molestie. Sed tincidunt
          sed erat a aliquet. Fusce iaculis eros quis egestas pretium. Morbi ac
          pharetra nisl, pretium consequat ante. Sed rutrum mauris nibh, nec
          ultrices nunc suscipit vel. Pellentesque aliquet posuere urna, luctus
          et finibus diam. Ut lacinia sollicitudin posuere. Nunc pretium us
          imperdiet ut. Praesent et finibus diam. Ut lacinia sollicitudin
          posuere. Nunc pretium vehicula turpis, eget dapibus mi rhoncus id.
          Aliquam in nunc justo. In lobortis et diam vel molestie. Sed tincidunt
          sed erat a aliquet. Fusce iaculis eros quis egestas pretium. Morbi ac
          pharetra nisl, pretium consequat ante. Sed rutrum mauris nibh, nec
          ultrices nunc suscipit vel. Pellentesque aliquet posuere urna, luctus
          mattis quam viverra quis. Curabitur ut fermentum ex. Vestibulum
          tincidunt iaculis enim vel blandit. Nullam accumsan nunc ac tincidunt
          viverra. Phasellus laoreet volutpat felis vel consectetur. Nulla
          dictum convallis metus eu lobortis. Fusce id sagittis tellus. Aenean
          vel orci at velit efficitur ullamcorper nec feugiat eros. Donec
          dapibus erat quis lacus mollis rutrum. Morbi maximus, urna a mollis
          sodales, turpis lacus condimentum ex, et suscipit orci erat nec est.
          Proin bibendum tortor quis nunc sagittis rhoncus. Pellentesque in nisi
          sollicitudin tellus viverra posuere non at ex. Mauris vel vehicula
          tellus. Pellentesque hendrerit egestas magna. Quisque eu enim orci.
          Integer consectetur ligula leo, quis hendrerit sapien malesuada at.
          Vivamus vulputate lectus et sapien blandit ultrices. Aliquam eleifend,
          odio pharetra dapibus pharetra, nibh magna porttitor neque, et egestas
          diam justo et dui. Sed felis risus, molestie a venenatis vel,
          vulputate quis arcu. Vivamus eget sem malesuada, congue ipsum sit
          amet, imperdiet ligula. Sed sollicitudin tempor est eu semper.
          Praesent vel neque eget augue imperdiet malesuada quis eu magna. Morbi
          et volutpat eros, sit amet bibendum orci. Vivamus ipsum mauris,
          aliquet eget cursus in, commodo vitae mi. Nam vehicula vel libero id
          venenatis. Fusce id maximus risus. Mauris maximus quam quis purus
          tempus sagittis.
        </p>
      </article>

      <Link
        className="gradient-lime block p-2 text-black text-center font-bold"
        href="/record"
      >
        Close
      </Link>
    </div>
  );
}
