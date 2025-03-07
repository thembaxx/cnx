import { flag } from "flags/next";

export const exampleFlag = flag({
  key: "example-flag",
  decide() {
    return Math.random() > 0.5;
  },
});

export const headlineFlag = flag<string>({
  key: "heading",
  options: [
    {
      label: "Professional",
      value: "Precision Workforce for Your Construction Vision",
    },
    {
      label: "Modern",
      value: "Build Your Dream, One Expert at a Time",
    },
    {
      label: "Empowering",
      value: "Connecting Builders, Transforming Spaces",
    },
    {
      label: "Dynamic",
      value: "Craft Your Construction Crew Instantly",
    },
    {
      label: "Innovative",
      value: "The Construction Talent Network",
    },
  ],
  decide: () => "Precision Workforce for Your Construction Vision",
});

export const subheadlineFlag = flag<string>({
  key: "subheading",
  options: [
    {
      label: "Professional",
      value: "Expert Talent. Seamless Hiring. Perfect Projects.",
    },
    {
      label: "Modern",
      value: "Marketplace Technology Meets Construction Craftsmanship",
    },
    {
      label: "Empowering",
      value: "Your Project. Your Team. Simplified.",
    },
    {
      label: "Dynamic",
      value: "Skills Matched. Projects Accelerated. Goals Achieved.",
    },
    {
      label: "Innovative",
      value: "Intelligent Matching. Exceptional Results.",
    },
  ],
  decide: () => "Expert Talent. Seamless Hiring. Perfect Projects.",
});

export const precomputeFlags = [headlineFlag, subheadlineFlag] as const;
