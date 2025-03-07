import Header from "@/components/jobs/header";
import TopRatedPeople from "@/components/jobs/top-rated-people";
import Search from "@/components/jobs/search";

async function JobsPage() {
  return (
    <div className="p-6 h-full w-full space-y-16">
      <Search />
      <TopRatedPeople />
      <Header />
    </div>
  );
}

export default JobsPage;
