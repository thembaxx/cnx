"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

const items = [
  {
    label: "Service provider",
    value: "job",
    description:
      "This is the best option who offers services to clients in exchange for payment.",
  },
  {
    label: "Consumer",
    value: "service",
    description:
      "This is perfect if you are looking for people to provide services for a task or project.",
  },
];

export default function ServiceSelector() {
  const [currentValue, setCurrentValue] = useState<string | undefined>(
    undefined
  );

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-md space-y-6">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-5xl">
          What would like to do?
        </h1>
        <RadioGroup
          value={currentValue}
          onValueChange={setCurrentValue}
          className="grid gap-3 max-w-sm"
        >
          {items.map(({ label, value, description }, index) => (
            <Label
              key={value + index}
              htmlFor={value}
              className={cn(
                "text-sm leading-none transition-colors font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-4",
                {
                  "border-green-600 bg-green-50 dark:border-green-900 dark:bg-green-950":
                    currentValue === value,
                }
              )}
              onClick={() => setCurrentValue(value)}
            >
              <RadioGroupItem
                id={value}
                className={cn(
                  "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive aspect-square size-4 shrink-0 rounded-full border transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 shadow-none",
                  {
                    "border-green-600 bg-green-600 *:data-[slot=radio-group-indicator]:[&>svg]:fill-white *:data-[slot=radio-group-indicator]:[&>svg]:stroke-white":
                      currentValue === value,
                  }
                )}
                value={value}
                checked={value === value}
                onChange={() => setCurrentValue(value)}
              />
              <div className="grid gap-1.5 font-normal">
                <div className="font-medium">{label}</div>
                <div className="text-muted-foreground leading-snug">
                  {description}
                </div>
              </div>
            </Label>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
