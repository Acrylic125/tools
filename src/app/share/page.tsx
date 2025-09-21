"use client";

import { QRCodeToolIcon, ShareToolIcon } from "@/components/icons/tool-icons";
import { MainNavbar } from "@/components/navbar";
import { QRCodeGenerator } from "@/components/qr-code-section";
import { ShareSection } from "@/components/share";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-background">
      <MainNavbar />
      <ScrollArea className="w-full h-[100svh-64px]">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center w-full max-w-7xl text-foreground p-12 md:p-16 lg:p-24 gap-4 md:gap-6 lg:gap-8">
            <div className="flex flex-col items-center gap-4">
              <ShareToolIcon className="h-16 w-16 p-3" />
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Share
              </h1>
            </div>
            <div className="w-full">
              <ShareSection />
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
