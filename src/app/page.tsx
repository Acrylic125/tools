import { Favicon } from "@/components/icons/Favicon";
import { MainNavbar } from "@/components/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-background">
      <MainNavbar />
      <ScrollArea className="w-full h-[100svh-64px]">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center w-full max-w-7xl text-foreground p-12 md:p-16 lg:p-24">
            <header className="flex flex-col items-center gap-4">
              <div className="relative h-12 md:h-16 aspect-square border-border border-2 rounded-md p-2.5 bg-neutral-800">
                <Favicon />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  F*** Tools
                </h1>
                <p className="text-muted-foreground">
                  F*** as in <span className="text-primary">free</span>.
                </p>
              </div>
            </header>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
