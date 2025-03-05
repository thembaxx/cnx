import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./sign-up-form";
import { Separator } from "../ui/separator";

function SignUp() {
  return (
    <div className="w-full flex justify-center p-6">
      <div className="w-full max-w-md flex flex-col items-center">
        <header className="pb-8 flex items-center gap-1">
          <div className="w-9 h-9 flex items-center justify-center">
            <Image src="yunite.svg" height={24} width={24} alt="" />
          </div>
          <p className="font-medium">{siteConfig.name}</p>
        </header>
        <Card className="shadow-md/20 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-[0.85rem]">
              Hi, Create a free {siteConfig.name} account
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent>
            <div className="pt-4 flex flex-col items-center justify-center h-full w-full">
              <SignUpForm />
            </div>
          </CardContent>
          <CardFooter>
            <div className="pt-0">
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
      </div>
    </div>
  );
}

export default SignUp;
