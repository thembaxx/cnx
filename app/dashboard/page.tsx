import Header from "@/components/dashboard/header";
import ServiceSelector from "@/components/dashboard/service-selector";

function DashboardPage() {
  return (
    <div className="p-6">
      <Header />
      <ServiceSelector />
    </div>
  );
}

export default DashboardPage;
