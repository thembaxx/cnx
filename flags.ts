import { flag } from "flags/next";

export const exampleFlag = flag({
  key: "example-flag",
  decide() {
    return Math.random() > 0.5;
  },
});

const headlines = [
  {
    label: "Professional",
    value: {
      headline: "Unify: Precision Workforce for Your Construction Vision",
      subheadline: "Expert Talent. Seamless Hiring. Perfect Projects.",
    },
  },
  {
    label: "Modern",
    value: {
      headline: "Unify: Build Your Dream, One Expert at a Time",
      subheadline: "Marketplace Technology Meets Construction Craftsmanship",
    },
  },
  {
    label: "Empowering",
    value: {
      headline: "Unify: Connecting Builders, Transforming Spaces",
      subheadline: "Your Project. Your Team. Simplified.",
    },
  },
  {
    label: "Dynamic",
    value: {
      headline: "Unify: Craft Your Construction Crew Instantly",
      subheadline: "Skills Matched. Projects Accelerated. Goals Achieved.",
    },
  },
  {
    label: "Innovative",
    value: {
      headline: "Unify: The Construction Talent Network",
      subheadline: "Intelligent Matching. Exceptional Results.",
    },
  },
];

export const headlineFlag = flag<string>({
  key: "greeting",
  options: [
    {
      label: "Professional",
      value: "Unify: Precision Workforce for Your Construction Vision",
    },
    {
      label: "Modern",
      value: "Unify: Build Your Dream, One Expert at a Time",
    },
    {
      label: "Empowering",
      value: "Unify: Connecting Builders, Transforming Spaces",
    },
    {
      label: "Dynamic",
      value: "Unify: Craft Your Construction Crew Instantly",
    },
    {
      label: "Innovative",
      value: "Unify: The Construction Talent Network",
    },
  ],
  decide: () => "Unify: Precision Workforce for Your Construction Vision",
});

export const subheadlineFlag = flag<string>({
  key: "greeting",
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
