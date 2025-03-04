import { betterAuth } from "better-auth";
import { VercelPool } from "@vercel/postgres";

import { magicLink, oneTap } from "better-auth/plugins";

export const auth = betterAuth({
  database: new VercelPool({
    connectionString: process.env.POSTGRES_URL as string,
  }),
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // Cache duration in seconds
    },
  },
  plugins: [
    oneTap(),
    magicLink({
      sendMagicLink: async ({ email, token, url }, request) => {
        // send email to user
        console.log(email, token, url, request);
      },
    }),
  ],
});
