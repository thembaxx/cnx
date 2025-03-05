"use client";

import RotatingText from "./rotating-text";

type Props = {
  headline: string;
  subheadline: string;
};

const houseBuildingJobs = [
  "Site Clearing",
  "Property Boundary Staking",
  "Soil Testing",
  "Excavation",
  "Footer Drain Installation",
  "Utility Line Preparation",
  "Ground Compaction",
  "Concrete Foundation Forming",
  "Waterproofing",
  "Wall Location Marking",
  "Lumber Cutting",
  "Wall Frame Assembly",
  "Roof Truss Preparation",
  "Temporary Bracing",
  "Electrical Conduit Running",
  "Rough Plumbing Installation",
  "HVAC Ductwork Placement",
  "Low-Voltage System Preparation",
  "Utility Box Installation",
  "House Wrap Application",
  "Window Rough Opening Installation",
  "Exterior Surface Preparation",
  "Drip Edge and Flashing Installation",
  "Roof Preparation",
  "Insulation Installation",
  "Drywall Hanging",
  "Drywall Seam Taping",
  "Surface Painting Preparation",
  "Interior Door Frame Installation",
  "Construction Debris Cleanup",
  "Site Grading",
  "Landscaping Preparation",
  "System Testing",
  "Final Site Cleanup",
];

function Header({ headline, subheadline }: Props) {
  console.log(headline, subheadline);

  return (
    <header className="flex flex-col items-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold text-center">
          Your Instant Construction Crew Marketplace
        </h1>
        <p className="text-lg text-center">
          Hire. Build. Simplify Your Home Construction Journey
        </p>
      </div>
      <div className="flex items-center gap-2">
        <h2 className="font-bold text-2xl">Build</h2>
        <RotatingText
          texts={houseBuildingJobs}
          mainClassName="px-2 sm:px-2 md:px-3 bg-blue-500 font-bold truncate text-white text-lg overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
    </header>
  );
}

export default Header;
