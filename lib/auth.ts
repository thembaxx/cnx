import { betterAuth } from "better-auth";
import { VercelPool } from "@vercel/postgres";
import { nextCookies } from "better-auth/next-js";

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
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET_KEY as string,
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
    nextCookies(),
  ],
});
