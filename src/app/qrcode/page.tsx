"use client";

import { QRCodeGenerator } from "@/components/qr-code-section";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-background">
      <div className="flex flex-col items-center w-full max-w-7xl text-foreground p-12 md:p-16 lg:p-24 gap-4 md:gap-6 lg:gap-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          QR Code Generator
        </h1>
        <div className="w-full">
          <QRCodeGenerator />
        </div>
      </div>
    </div>
  );
}
