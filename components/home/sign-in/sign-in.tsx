"use client";

// import { useRouter } from "next/navigation";

import { authenticate } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignInForm from "./sign-in-form";

function SignIn() {
  //const router = useRouter();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 flex flex-col items-center justify-center h-full w-full">
          <Button
            className="w-full"
            onClick={async () => {
              const authClient = await authenticate();

              authClient.signIn.social({
                provider: "google",
                callbackURL: "/dashboard",
              });
            }}
          >
            <Image src="/brands/google.svg" width={20} height={20} alt="" />
            <span className="font-semibold">Continue with Google</span>
          </Button>

          <div className="w-full text-center py-2">
            <span className="text-muted-foreground">or</span>
          </div>

          <SignInForm />

          {/* <Button
          className="w-full"
          onClick={async () => {
            const authClient = await authenticate();

            authClient.oneTap({
              fetchOptions: {
                onSuccess: () => {
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
          className="w-full"
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
        </Button> */}
        </div>
      </CardContent>
      <CardFooter>
        <div className="pt-6">
          <div className="text-xs inline-flex">
            By continuing, you agree to Anthropic&apos;s Consumer Terms and
            Usage Policy, and acknowledge their Privacy Policy.
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default SignIn;
