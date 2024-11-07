import { getSheets } from "@/lib/google/api";

export default async function Videos() {
  // TODO cache request https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#caching-data-with-an-orm-or-database
  const data = await getSheets();
  console.log(data);
  return (
    <>
      {/* TODO in intro write about how you watch stuff but always forget it. So you started a google sheet called the "Everything Sheet" which all this data comes from */}
      {/* show Question mark - loads modal on how i built it */}
      <h1>videos</h1>
      {/* TODO design layout for film / TV card */}
      {/* add button to add to imdb watchlist? */}
      {data.films.map((film) => (
        <div
          key={film.date}
          className="bg-gradient-to-r from-limeLight to-lime py-3 px-4 text-blue"
        >
          <p className="mb-3">{film.title}</p>
        </div>
      ))}
    </>
  );
}
