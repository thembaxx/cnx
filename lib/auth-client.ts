import { createAuthClient } from "better-auth/client";
import { magicLinkClient, oneTapClient } from "better-auth/client/plugins";
import getEnvSafely from "./get-env-safely";

console.log(getEnvSafely("GOOGLE_CLIENT_ID"));

const googleClientId = process.env.GOOGLE_CLIENT_ID;
console.log(googleClientId);

export const authenticate = async () => {
  return createAuthClient({
    plugins: [
      oneTapClient({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        // Optional client configuration:
        autoSelect: false,
        cancelOnTapOutside: true,
        context: "signin",
        additionalOptions: {
          // Any extra options for the Google initialize method
        },
        // Configure prompt behavior and exponential backoff:
        promptOptions: {
          baseDelay: 1000, // Base delay in ms (default: 1000)
          maxAttempts: 5, // Maximum number of attempts before triggering onPromptNotification (default: 5)
        },
      }),
      magicLinkClient(),
    ],
  });
};
