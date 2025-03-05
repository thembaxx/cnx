import { Suspense } from "react";
import Header from "@/components/home/header";
import { headlineFlag, subheadlineFlag } from "@/flags";

export default async function Home() {
  const headline = await headlineFlag();
  const subheadline = await subheadlineFlag();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="p-6">
        <Header headline={headline} subheadline={subheadline} />
        {/* <div className="space-y-2 flex flex-col items-center justify-center h-full w-full">
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
      </div> */}
      </div>
    </Suspense>
  );
}
