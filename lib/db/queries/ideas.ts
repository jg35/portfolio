import { eq } from "drizzle-orm";

import db from "@/lib/db";
import { ideas, stolenIdeas } from "@/lib/db/schema/ideas";

export const getStolenTimes = async () => {
  return db
    .select({
      id: ideas.id,
      timesStolen: db.$count(stolenIdeas, eq(stolenIdeas.ideaId, ideas.id)),
    })
    .from(ideas);
};

export const getUserStolenIdeas = async (userId: number) => {
  return (
    await db.select().from(stolenIdeas).where(eq(stolenIdeas.stolenBy, userId))
  ).map((ideas) => ideas.id);
};
