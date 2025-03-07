import ServiceSelector from "@/components/onboarding/service-selector";
import React from "react";
import InitialForm from "./initial-form";
import { Button } from "@/components/ui/button";
import { completedOnboarding } from "@/actions";

function OnboardingPage() {
  return (
    <div className="w-full h-full flex flex-col items-center p-6">
      <div className="grow max-w-md space-y-8">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-5xl">
          Let&apos;s Get Started
        </h1>
        <InitialForm />
        <ServiceSelector />
      </div>

      <div className="w-full">
        <Button
          onClick={async () => {
            "use server";
            await completedOnboarding("mndebele.themba@gmail.com");
          }}
          className="w-full"
        >
          Complete onboarding
        </Button>
      </div>
    </div>
  );
}

export default OnboardingPage;
