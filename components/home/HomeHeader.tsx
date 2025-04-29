import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

const HomeHeader = () => {
  return (
    <div className="border-border sticky top-0 h-16 border-b backdrop-blur-md">
      <div className="container mx-auto h-full p-4 md:p-0">
        <div className="flex h-full items-center justify-between">
          <div className="text-center">
            <p className="text-primary text-xl font-extrabold">R8</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant={"outline"}>Sign In</Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
