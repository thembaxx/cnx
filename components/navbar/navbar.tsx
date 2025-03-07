"use client";

import Link from "next/link";
import { Button } from "../ui/button";

import { siteConfig } from "@/config/site";
import { SideMenu } from "./side-menu";
import { ProfileMenu } from "./profile-menu";

import React from "react";
import type { SVGProps } from "react";
import { useUserStore } from "@/stores/use-user-store";

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 6.001h18m-18 6h18m-18 6h18"
        strokeWidth={1}
      ></path>
    </svg>
  );
}

const NotificationIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M21.9598 10.9707C22.0134 11.8009 22.0134 12.6607 21.9598 13.4909C21.6856 17.7332 18.3536 21.1125 14.1706 21.3905C12.7435 21.4854 11.2536 21.4852 9.8294 21.3905C9.33896 21.3579 8.8044 21.2409 8.34401 21.0513C7.83177 20.8403 7.5756 20.7348 7.44544 20.7508C7.31527 20.7668 7.1264 20.9061 6.74868 21.1846C6.08268 21.6757 5.24367 22.0285 3.99943 21.9982C3.37026 21.9829 3.05568 21.9752 2.91484 21.7351C2.77401 21.495 2.94941 21.1626 3.30021 20.4978C3.78674 19.5758 4.09501 18.5203 3.62791 17.6746C2.82343 16.4666 2.1401 15.036 2.04024 13.4909C1.98659 12.6607 1.98659 11.8009 2.04024 10.9707C2.31441 6.72838 5.64639 3.34913 9.8294 3.07107C11.0318 2.99114 11.2812 2.97856 12.5 3.03368"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9953 12.5H12.0043M15.9908 12.5H15.9998M7.99982 12.5H8.00879"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 5.5C22 7.433 20.433 9 18.5 9C16.567 9 15 7.433 15 5.5C15 3.567 16.567 2 18.5 2C20.433 2 22 3.567 22 5.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const UserCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M14.75 9.5C14.75 11.0188 13.5188 12.25 12 12.25C10.4812 12.25 9.25 11.0188 9.25 9.5C9.25 7.98122 10.4812 6.75 12 6.75C13.5188 6.75 14.75 7.98122 14.75 9.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M5.49994 19.0001L6.06034 18.0194C6.95055 16.4616 8.60727 15.5001 10.4016 15.5001H13.5983C15.3926 15.5001 17.0493 16.4616 17.9395 18.0194L18.4999 19.0001"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Navbar() {
  const { user } = useUserStore();

  return (
    <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur-2xl h-16 shrink-0 flex justify-center">
      <div className="w-full flex items-center px-4 justify-between max-w-2xl">
        <div className="flex items-center">
          <SideMenu>
            <Button className="p-0" variant="ghost">
              <MenuIcon className="!w-6 !h-6 !text-icon" />
            </Button>
          </SideMenu>
          <Link className="font-extrabold text-[0.90rem] uppercase" href="/">
            <span>{siteConfig.name}</span>
          </Link>
        </div>
        {user && (
          <div className="flex items-center gap-2">
            <Button className="p-0" variant="ghost">
              <NotificationIcon className="!w-6 !h-6 !text-icon" />
            </Button>
            <ProfileMenu>
              <Button className="p-0" variant="ghost">
                <UserCircleIcon className="!w-6 !h-6 !text-icon" />
              </Button>
            </ProfileMenu>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
