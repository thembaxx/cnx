import { Suspense } from "react";
import Header from "@/components/home/header";
import { headlineFlag, subheadlineFlag } from "@/flags";
import SignIn from "@/components/home/sign-in/sign-in";

export default async function Home() {
  const headline = await headlineFlag();
  const subheadline = await subheadlineFlag();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="p-6 space-y-12">
        <Header headline={headline} subheadline={subheadline} />
        <SignIn />
      </div>
    </Suspense>
  );
}
