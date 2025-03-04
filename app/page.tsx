"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { authenticate } from "@/lib/auth-client";

export default function Home() {
  const router = useRouter();

  return (
    <div className="space-y-2 flex flex-col items-center justify-center h-full w-full">
      <Button
        onClick={async () => {
          const authClient = await authenticate();

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
          const authClient = await authenticate();

          const { data, error } = await authClient.signIn.magicLink({
            email: "mndebele.themba@gmail.com",
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
