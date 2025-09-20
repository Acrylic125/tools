"use client";

import { ConvertImgToIcoSection } from "@/components/convert-img-to-ico-section";
import { MainNavbar } from "@/components/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeftRight, QrCode } from "lucide-react";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-background">
      <MainNavbar />
      <ScrollArea className="w-full h-[100svh-64px]">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center w-full max-w-7xl text-foreground p-12 md:p-16 lg:p-24 gap-4 md:gap-6 lg:gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-md bg-yellow-50 dark:bg-yellow-300/15 border-2">
                <ArrowLeftRight className="h-10 w-10 text-yellow-500" />
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Image to ICO
              </h1>
            </div>
            <div className="w-full">
              <ConvertImgToIcoSection />
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
