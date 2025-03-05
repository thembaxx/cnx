import { Suspense } from "react";
import Header from "@/components/home/header";
import { headlineFlag, subheadlineFlag } from "@/flags";
import Authenticate from "@/components/home/auth/authenticate";

export default async function Home() {
  const headline = await headlineFlag();
  const subheadline = await subheadlineFlag();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full flex justify-center">
        <div className="p-6 space-y-12 max-w-md">
          <Header headline={headline} subheadline={subheadline} />
          <Authenticate />
        </div>
      </div>
    </Suspense>
  );
}
