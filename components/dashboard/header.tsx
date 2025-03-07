import Image from "next/image";

const items: { imageUrl: string; label: string }[] = [
  {
    imageUrl: "/jobs/hammer and wrench.png",
    label: "Handyman",
  },
  {
    imageUrl: "/jobs/electric plug.png",
    label: "Electrician",
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
    imageUrl: "/jobs/clamp.png",
    label: "Piping",
  },
  {
    imageUrl: "/jobs/label.png",
    label: "Other",
  },
];

function Header() {
  return (
    <div>
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
    </div>
  );
}

export default Header;
