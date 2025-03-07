import Image from "next/image";
import { Button } from "../ui/button";
import { siteConfig } from "@/config/site";

const items: { imageUrl: string; label: string }[] = [
  {
    imageUrl: "/jobs/hammer and wrench.png",
    label: "Handyman",
  },
  {
    imageUrl: "/jobs/electric plug.png",
    label: "Wiring",
  },
  {
    imageUrl: "/jobs/taxi.png",
    label: "Taxi services",
  },
  {
    imageUrl: "/jobs/window.png",
    label: "Windows",
  },
  {
    imageUrl: "/jobs/plunger.png",
    label: "Plumbing",
  },
  {
    imageUrl: "/jobs/light bulb.png",
    label: "Electrician",
  },
  {
    imageUrl: "/jobs/clamp.png",
    label: "Piping",
  },
  {
    imageUrl: "/jobs/label.png",
    label: "Other",
  },
  {
    imageUrl: "/jobs/door.png",
    label: "Doors",
  },
  {
    imageUrl: "/jobs/locked with key.png",
    label: "Locksmith",
  },
  {
    imageUrl: "/jobs/toolbox.png",
    label: "Mechanic",
  },
];

function Header() {
  return (
    <div className="space-y-6">
      <h1 className="font-bold text-xl">Top Searches</h1>
      <ul className="flex gap-3 flex-wrap">
        {items.map(({ imageUrl, label }, index) => (
          <li key={index}>
            <div className="flex border items-center h-8 pl-2 pr-3 rounded-full bg-secondary/80 backdrop-blur-xs">
              <Image src={imageUrl} alt={label} width={16} height={16} />
              <span className="ml-2 text-[0.75rem] text-foreground/90 font-medium">
                {label}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <Button
          className="text-sm font-semibold text-[#0D8C7D] px-0"
          variant="link"
        >
          Sell all the services we suoport at {siteConfig.name}
        </Button>
      </div>
    </div>
  );
}

export default Header;
