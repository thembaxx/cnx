"use client";

import { siteConfig } from "@/config/site";
import RotatingText from "./rotating-text";
import Image from "next/image";

type Props = {
  headline: string;
  subheadline: string;
};

const houseBuildingJobs = [
  "Site Clearing",
  "Soil Testing",
  "Excavation",
  "Drain Install",
  "Utility Line",
  "Ground Compaction",
  "Concrete Foundation",
  "Waterproofing",
  "Wall Location Marking",
  "Lumber Cutting",
  "Wall Frame Assembly",
  "Roof Preparation",
  "Roofing Install",
  "Exterior Wall Covering",
  "Temporary Bracing",
  "Electrical",
  "Plumbing Install",
  "HVAC Ductw Placement",
  "Utility Box Install",
  "House Wrap",
  "Window Installation",
  "Exterior Surface Preparation",
  "Flashing Install",
  "Insulation Install",
  "Drywall Hanging",
  "Drywall Seam Taping",
  "Surface Painting Prep",
  "Interior Door Frame",
  "Interior Door Install",
  "Interior Trim Install",
  "Interior Surface Prep",
  "Interior Surface Painting",
  "Flooring Install",
  "Cabinet Install",
  "Countertop Install",
  "Appliance Install",
  "Fixture Install",
  "Final Walkthrough",

  "Debris Cleanup",
  "Site Grading",
  "Landscaping Prep",
  "System Testing",
  "Site Cleanup",
];

function Header({ headline, subheadline }: Props) {
  return (
    <header className="flex flex-col items-center space-y-8">
      <div className="pb-8 flex items-center gap-1">
        <div className="w-9 h-9 flex items-center justify-center">
          <Image src="yunite.svg" height={24} width={24} alt="" />
        </div>
        <p className="font-medium">{siteConfig.name}</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-semibold text-sm">Build</h2>
        <RotatingText
          texts={houseBuildingJobs}
          mainClassName="px-2 sm:px-2 md:px-3 bg-black/80 dark:bg-white/10 font-medium truncate text-white text-[0.85rem] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-md"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={4000}
        />
      </div>
      <div className="space-y-3">
        <h1 className="text-2xl font-extrabold text-center text-pretty">
          {headline}
        </h1>
        <p className="text-[0.95rem] text-center text-pretty">{subheadline}</p>
      </div>
    </header>
  );
}

export default Header;
