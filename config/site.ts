export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Yunite",
  description: "Hire. Build. Simplify Your Home Construction Journey",
  version: "0.0.0.30",
  baseUrl:
    process.env.NODE_ENV === "production"
      ? "https://cnx-two.vercel.app/"
      : "http://localhost:3000",
  navItems: [
    {
      label: "Let's connect",
      href: "/connect",
    },
    {
      label: "Work",
      href: "/work",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Work",
      href: "/work",
    },
    {
      label: "Let's connect",
      href: "/connect",
    },
  ],
  links: {
    github: "https://github.com/thembaxx",
    twitter: "https://twitter.com/thembaxx",
    discord: "https://discord.gg/thembax",
    linkedIn: "https://www.linkedin.com/in/themba_p",
  },
  profile: {
    name: "Themba Mndebele",
    email: "work@themba.dev",
    website: "https://themba.dev",
  },
};
