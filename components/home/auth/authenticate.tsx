"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import AuthForm from "./auth-form";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

function Authenticate() {
  return (
    <Card className="shadow-md/20 rounded-3xl">
      <CardHeader className="h-0 p-0 hidden">
        <CardTitle>Sign in</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 flex flex-col items-center justify-center h-full w-full">
          <Button
            className="w-full"
            variant="secondary"
            onClick={async () => {
              authClient.signIn.social({
                provider: "google",
                callbackURL: "/dashboard",
              });
            }}
          >
            <Image src="/brands/google.svg" width={16} height={16} alt="" />
            <span className="font-medium">Continue with Google</span>
          </Button>

          <div className="w-full text-center py-1.5">
            <span className="text-muted-foreground text-xs uppercase">or</span>
          </div>

          <AuthForm />
        </div>
      </CardContent>
      <CardFooter>
        <div className="pt-2">
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

export default Authenticate;
