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
import { siteConfig } from "@/config/site";
import Link from "next/link";

function SignIn() {
  //const router = useRouter();

  return (
    <Card className="border-none shadow-2xl">
      <CardHeader className="h-0 p-0 hidden">
        <CardTitle>Sign in</CardTitle>
      </CardHeader>
      <CardContent className="">
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
            <Image src="/brands/google.svg" width={16} height={16} alt="" />
            <span className="font-semibold">Continue with Google</span>
          </Button>

          <div className="w-full text-center py-1.5">
            <span className="text-muted-foreground text-xs uppercase">or</span>
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
          <div className="text-xs inline-block text-center text-pretty leading-5 tracking-wide">
            By continuing, you agree to {siteConfig.name}&apos;s{" "}
            <Link className="underline" href="/">
              Consumer Terms
            </Link>
            and{" "}
            <Link className="underline" href="/">
              Usage Policy
            </Link>
            , and acknowledge their{" "}
            <Link className="underline" href="/">
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default SignIn;
