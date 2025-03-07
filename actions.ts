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

export async function isOnboardingComplete(email: string) {
  try {
    await client.connect();
    const res =
      await client.sql`SELECT * FROM "user" WHERE "email" = ${email} LIMIT 1`;
    const row = res?.rows?.[0];
    return !!row?.onboardingComplete;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function completedOnboarding(email: string) {
  try {
    await client.connect();
    await client.sql`UPDATE "user"
          SET "onboardingComplete" = 'TRUE'
          WHERE "email" = ${email};`;

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
