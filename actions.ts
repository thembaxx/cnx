"use server";

import { db } from "@vercel/postgres";

const client = await db.connect();

export async function checkEmailExists(email: string) {
  try {
    const res =
      await client.sql`SELECT * FROM "user" WHERE "email" = ${email} LIMIT 1`;
    return res && res.rowCount && res.rowCount > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}
