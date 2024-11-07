import StealIdeaButton from "./StealdeaButton";
// import { getUserStolenIdeas } from "@/lib/db/queries/ideas";

const ideas = [
  {
    id: 1,
    title: "A Better Habit Tracker",
    pitch: "A habit tracker that does't suck",
    details: `I've tried a lot of habit trackers and they all have the same problem: they're too complicated. I want a habit tracker that is simple and easy to use.`,
  },
  {
    id: 2,
    title: "Walks and Train",
    pitch: "An app that helps you plan walks and train rides",
    details: `I love going on walks and train rides but I never know where to go. I want an app that helps me plan walks and train rides.`,
  },
  {
    id: 3,
    title: "A Better Recipe App",
    pitch: "A recipe app that doesn't suck",
    details: `I've tried a lot of recipe apps and they all have the same problem: they're too complicated. I want a recipe app that is simple and easy to use.`,
  },
];

export default async function Ideas() {
  // const response = await getUserStolenIdeas(1);

  // console.log(response);
  return (
    <>
      <h1 className="text-lg font-medium text-blue mb-2">Steal My Ideas</h1>
      <p className="mb-8">
        I have ideas for apps <i>all</i> the time but they don&lsquo;t get
        further than my Notes app most of the time. So I&lsquo;m going to share
        them here. If you&lsquo;re a developer and you want to build one of
        these, go for it! Just let me know so I can use it 😁
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ideas.map(({ id, title, pitch }) => (
          <div
            className="bg-gradient-to-r from-limeLight to-lime py-2 px-4 shadow-md flex flex-col"
            key={id}
          >
            <h2 className="text-2xl font-medium text-blue mb-2">{title}</h2>
            {/* TODO - pitch will be 3-4 lines each */}
            <p className="mb-2">{pitch}</p>
            {/* TODO - click a popover to see more details */}
            {/* <p className="text-sm mb-4">{details}</p> */}
            <StealIdeaButton ideaId={id} />
          </div>
        ))}
      </div>
    </>
  );
}
