"use server";

import { createUserAndSignInAnon, verifyToken } from "@/lib/db/auth";

export async function signInAnon(token: string | null) {
  try {
    const response = token
      ? await verifyToken(token)
      : await createUserAndSignInAnon();

    return response;
  } catch (e: any) {
    throw new Error(e?.message || "Failed to sign in");
  }
}
