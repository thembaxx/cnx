"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const router = useRouter();
  return (
    <div className="space-y-2 flex flex-col items-center justify-center">
      <Button
        onClick={async () => {
          authClient.oneTap({
            fetchOptions: {
              onSuccess: () => {
                // For example, use a router to navigate without a full reload:
                router.push("/dashboard");
              },
            },
            onPromptNotification: (notification) => {
              console.warn(
                "Prompt was dismissed or skipped. Consider displaying an alternative sign-in option.",
                notification
              );
              // Render your alternative UI here
            },
          });
        }}
      >
        One Tap Sign in
      </Button>

      <Button
        onClick={async () => {
          const { data, error } = await authClient.signIn.magicLink({
            email: "user@email.com",
            callbackURL: "/dashboard", //redirect after successful login (optional)
          });

          console.log(data, error);
        }}
      >
        Sign in with Magic Link
      </Button>
    </div>
  );
}
