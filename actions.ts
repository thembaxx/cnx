// app/actions.ts
"use server"; // Mark this as a server action

import { authenticate } from "@/lib/auth-client";

export async function handleAuth() {
  return await authenticate(); // This will run on the server
}
