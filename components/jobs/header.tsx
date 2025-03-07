import Image from "next/image";
import { Button } from "../ui/button";

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

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color="currentColor"
    fill={"none"}
    {...props}
  >
    <path
      d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Header() {
  return (
    <div className="space-y-6">
      <h1 className="font-bold text-xl">Top Searches</h1>
      <ul className="flex gap-2 flex-wrap">
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
          <span>Sell all our services</span>
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export default Header;
