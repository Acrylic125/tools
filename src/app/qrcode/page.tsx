"use client";

import { MainNavbar } from "@/components/navbar";
import { QRCodeGenerator } from "@/components/qr-code-section";
import { ScrollArea } from "@/components/ui/scroll-area";
import { QrCode } from "lucide-react";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-background">
      <MainNavbar />
      <ScrollArea className="w-full h-[100svh-64px]">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center w-full max-w-7xl text-foreground p-12 md:p-16 lg:p-24 gap-4 md:gap-6 lg:gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-md bg-purple-500/15 border-2">
                <QrCode className="h-10 w-10 text-purple-500" />
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                QR Code Generator
              </h1>
            </div>
            <div className="w-full">
              <QRCodeGenerator />
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
