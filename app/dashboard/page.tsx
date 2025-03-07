import Header from "@/components/dashboard/header";
import ServiceSelector from "@/components/dashboard/service-selector";
import TopRatedPeople from "@/components/dashboard/top-rated-people";

function DashboardPage() {
  return (
    <div className="p-6 h-full w-full space-y-16">
      <ServiceSelector />
      <TopRatedPeople />
      <Header />
    </div>
  );
}

export default DashboardPage;
