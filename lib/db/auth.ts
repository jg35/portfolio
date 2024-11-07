import jwt from "jsonwebtoken";
import db from "@/lib/db";
import { users } from "./schema/users";

export async function verifyToken(token: string) {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return { token, userId: decoded.userId };
}

export async function createUserAndSignInAnon() {
  const [user] = await db.insert(users).values({}).returning();
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "180d",
  });
  return { token, userId: user.id };
}
