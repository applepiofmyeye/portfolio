import { Typography } from "@/components/typography";
import React from "react";

export default function PhotoJournalPage() {
  return (
    <div className="grid justify-items-center">
      <div className="flex items-center flex-col max-w-4xl space-y-20">
        <Typography variant={"headline-md"} weight={"semibold"}>
          my photo gallery {"<3"}
        </Typography>
        <div className="grid grid-cols-3">
          <div className="cols-span-1 w-full space-y-4 px-4">
            <img src="/mochi.png" className="rounded-xl max-w-full" />
            <img src="/mochi.png" className="rounded-xl max-w-full" />
            <img
              src="/british-museum-pic.jpg"
              className="rounded-xl max-w-full"
            />
          </div>
          <div className="cols-span-1 w-full space-y-4 px-4">
            <img src="/british-museum-pic.jpg" className="rounded-xl" />
            <img src="/mochi.png" className="rounded-xl" />
          </div>
          <div className="cols-span-1 w-full space-y-4 px-4">
            <img src="/mochi.png" className="rounded-xl" />
            <img src="/british-museum-pic.jpg" className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
