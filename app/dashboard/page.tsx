import { Suspense } from "react";
import Profile from "@/components/profile";

async function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="p-6 h-full w-full space-y-16">
        <Profile />
      </div>
    </Suspense>
  );
}

export default DashboardPage;
