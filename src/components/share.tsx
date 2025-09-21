"use client";

import { useState } from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

export function ShareSection() {
  const [files, setFiles] = useState<File[]>([]);
  const [dropdownError, setDropdownError] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="w-full h-fit flex flex-col bg-card rounded-md border-border border-2 p-2 md:p-4 gap-2 md:gap-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
          <span className="text-muted-foreground">Have something to</span>
          <br />
          share?
        </h2>
        <Textarea
          className="w-full h-24 resize-none"
          placeholder="Enter link / text / data"
        />
        <Collapsible>
          <CollapsibleTrigger className="w-fit flex flex-row items-center gap-2 font-medium">
            Advanced Options <ChevronsUpDown className="size-4" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            Yes. Free to use for personal and commercial projects. No
            attribution required.
          </CollapsibleContent>
        </Collapsible>
        <Button className="w-fit">Share</Button>
      </div>
      <div className="w-full h-fit flex flex-col bg-card rounded-md border-border border-2 p-2 md:p-4 gap-2 md:gap-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
          <span className="text-muted-foreground">Have something to</span>
          <br />
          see?
        </h2>
        <Input className="w-full" placeholder="Enter code (e.g. XYZ123)" />
        <Button className="w-fit">See</Button>
      </div>
    </div>
  );
}
