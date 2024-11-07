import { stealIdea } from "@/app/actions/ideas";
import { syncUser } from "@/lib/util";

interface StealIdeaButtonProps {
  ideaId: number;
}

export default function StealIdeaButton({ ideaId }: StealIdeaButtonProps) {
  async function stealIdeaHandler() {
    try {
      const token = await syncUser();
      const response = await stealIdea(ideaId, token);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    // create user if doesn't exist
    // let user = auth.currentUser;
    // if (!user) {
    // try {
    //   user = await auth.signInAnonymously()
    // } catch (error) { console.error(error); }
    // }
    // db.collection("ideas").doc(ideaId).update({ stealCount: increment(1) });
    // db.collection("stolenIdeas").add({ ideaId, stolenAt: new Date(), stolenBy: user.uid });
  }

  return (
    <button
      className="bg-white p-2 rounded-sm w-full shadow-sm mt-auto"
      onClick={stealIdeaHandler}
    >
      Steal This Idea!
    </button>
  );
}
