"use server";
import db from "@/lib/db";
import { stolenIdeas } from "@/lib/db/schema/ideas";
import { verifyToken } from "@/lib/db/auth";

export async function stealIdea(ideaId: number, token: string) {
  const { userId } = await verifyToken(token);
  const stolenIdea = await db
    .insert(stolenIdeas)
    .values({ ideaId, stolenBy: userId })
    .returning();
  return stolenIdea;
}
