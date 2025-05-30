import { StarIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

export function MaterialSymbolsVerifiedRounded(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10.95 12.7L9.5 11.275Q9.225 11 8.813 11t-.713.3q-.275.275-.275.7t.275.7l2.15 2.15q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.287-.7t-.287-.7q-.3-.3-.712-.312t-.713.287zm-2.8 9.05L6.7 19.3l-2.75-.6q-.375-.075-.6-.387t-.175-.688L3.45 14.8l-1.875-2.15q-.25-.275-.25-.65t.25-.65L3.45 9.2l-.275-2.825q-.05-.375.175-.688t.6-.387l2.75-.6l1.45-2.45q.2-.325.55-.438t.7.038l2.6 1.1l2.6-1.1q.35-.15.7-.038t.55.438L17.3 4.7l2.75.6q.375.075.6.388t.175.687L20.55 9.2l1.875 2.15q.25.275.25.65t-.25.65L20.55 14.8l.275 2.825q.05.375-.175.688t-.6.387l-2.75.6l-1.45 2.45q-.2.325-.55.438t-.7-.038l-2.6-1.1l-2.6 1.1q-.35.15-.7.038t-.55-.438"
      ></path>
    </svg>
  );
}

function Profile() {
  return (
    <div>
      <div>
        <div className="h-12 w-12 mb-4 relative">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src={`https://www.tapback.co/api/avatar/user55?color=3`}
              alt={"Themba Mndebele"}
            />
            <AvatarFallback className="text-sm">TP</AvatarFallback>
          </Avatar>
          <div className="absolute -mb-0.5 bottom-0 right-0 z-10">
            <MaterialSymbolsVerifiedRounded className="text-blue-600 w-5 h-5" />
          </div>
        </div>
        <div className="space-y-0 text-left">
          <h2 className="font-bold truncate">Themba Mndebele</h2>
          <p className="text-muted-foreground text-[0.85rem]">
            work@themba.dev
          </p>
          <div className="flex gap-4 items-center pt-4">
            <Badge>Job seeker</Badge>
            <div className="flex items-center gap-2">
              <StarIcon className="h-4 w-4 text-[#FF990A]" />
              <span className="text-[0.85rem]">4.3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
