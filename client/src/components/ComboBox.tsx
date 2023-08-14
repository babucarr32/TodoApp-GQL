"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "../../@/lib/utils";
import { Button } from "../../@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../@/components/ui/popover";

const frameworks = [
  {
    value: "completed",
    label: "Completed",
  },
  {
    value: "active",
    label: "Active",
  },
  {
    value: "all",
    label: "All",
  },
  {
    value: "clear completed",
    label: "Clear Completed",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] bg-slate-950 flex justify-between items-center p-3 text-white border-2 border-slate-950 rounded-lg"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Filter todo..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] bg-slate-900 shadow-xl flex flex-col items-center p-3 border-2 border-slate-950 rounded-lg">
        <Command>
          <CommandInput
            placeholder="No framework..."
            className="p-2 bg-transparent text-white outline-none"
          />
          <CommandEmpty className="text-white">No match found...</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                className="p-3 text-white"
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
