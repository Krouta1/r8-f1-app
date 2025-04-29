import React from "react";
import { Button } from "@/components/ui/button";

const HomeHeadline = () => {
  return (
    <div className="gird h-full grid-cols-2 gap-8 lg:grid">
      <div className="col-span-1 flex flex-col items-center justify-center gap-8 md:items-start">
        <div className="text-center md:text-start">
          <h1 className="text-4xl font-bold text-pretty lg:text-3xl">
            Rate Every F1 Driver, Every Race
          </h1>
          <p className="text-muted-foreground mt-4 text-sm">
            Join the grid of fans putting their voice to the test. After each
            race weekend, score every driver’s performance and see how your
            ratings compare to the community.
          </p>
        </div>
        <div>
          <Button size={"lg"}>Rate the drivers</Button>
        </div>
      </div>
      <div className="relative col-span-1 mt-8 rounded-md border border-gray-300 p-2 shadow-md lg:mt-0">
        <div className="bg-background absolute -top-3.5 left-10 z-10 px-2 font-bold uppercase">
          Next Race - <span className="text-primary">Round 6</span>
        </div>
      </div>
    </div>
  );
};

export default HomeHeadline;
