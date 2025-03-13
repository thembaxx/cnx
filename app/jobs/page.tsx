import Header from "@/components/jobs/header";
import TopRatedPeople from "@/components/jobs/top-rated-people";
import Search from "@/components/jobs/search";
import HeaderCarousel from "@/components/jobs/head-carousel/header-carousel";

async function JobsPage() {
  return (
    <div className="h-full w-full space-y-16">
      <div className="space-y-6">
        <HeaderCarousel />
        <div className="px-6">
          <Search />
        </div>
      </div>
      <div className="p-6 space-y-12">
        <TopRatedPeople />
        <Header />
      </div>
    </div>
  );
}

export default JobsPage;
