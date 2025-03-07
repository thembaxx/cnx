import Image from "next/image";
import { StarIcon } from "lucide-react";

interface People {
  name: string;
  image: string;
  rating: number;
  role: string[];
}

const people: People[] = [
  {
    name: "Tumelo Matthews",
    image: "https://www.tapback.co/api/avatar/user80?color=12",
    rating: 4.5,
    role: ["Site Clearing", "Excavation", "House Wrap"],
  },
  {
    name: "Anton Ngwenya",
    image: "https://www.tapback.co/api/avatar/user44?color=12",
    rating: 4.2,
    role: ["Debris Cleanup", "Landscaping Prep"],
  },
  {
    name: "Jackie Mthembu",
    image: "https://www.tapback.co/api/avatar/user59?color=6",
    rating: 4.6,
    role: [
      "Ground Compaction",
      "Lumber Cutting",
      "Roof Preparation",
      "Utility Box Install",
      "Roof Preparation",
    ],
  },
  {
    name: "Tshegofatso Matthews",
    image: "https://www.tapback.co/api/avatar/user55?color=3",
    rating: 4.8,
    role: [
      "Interior Door Install",
      "Interior Trim Install",
      "Interior Surface Prep",
      "Interior Surface Painting",
      "Roof Preparation",
    ],
  },
  {
    name: "George Evans",
    image: "https://www.tapback.co/api/avatar/user61?color=12",
    rating: 4.3,
    role: [
      "Roofing Install",
      "Exterior Wall Covering",
      "Temporary Bracing",
      "Electrical",
    ],
  },
];

async function TopRatedPeople() {
  return (
    <div className="space-y-6">
      <h1 className="font-bold text-xl">Top Ranking</h1>
      <ul className="flex flex-col gap-3 w-full overflow-hidden">
        {people
          .sort((a, b) => {
            if (a.rating < b.rating) return 1;
            if (a.rating > b.rating) return -1;
            return 0;
          })
          .map(({ name, image, rating, role }, index) => {
            const rolesStr = role.join(", ");

            return (
              <li key={index}>
                <div className="rounded-r-[10px] overflow-hidden">
                  <div className="flex w-full items-center bg-secondary rounded-l-full overflow-hidden">
                    <div className="h-full shrink-0">
                      <Image src={image} alt="" height={56} width={56} />
                    </div>
                    <div className="px-3 w-full overflow-hidden">
                      <h2 className="text-sm font-semibold grow truncate">
                        {name}
                      </h2>
                      <div className="flex items-center w-full gap-3">
                        <p className="text-[0.79rem] grow text-secondary-foreground/80 truncate">
                          {rolesStr}
                        </p>
                        <div className="flex items-center gap-2">
                          <StarIcon className="h-4 w-4 text-[#FF990A]" />
                          <span className="text-[0.8rem] text-foreground/75 leading-0">
                            {rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default TopRatedPeople;
