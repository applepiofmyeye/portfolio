import { Typography } from "@/components/typography";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-20 items-center justify-center">
      <img
        src="/british-museum-pic.jpg"
        alt="girl leaning on the railing smiling"
        className="rounded-lg max-h-[80vh] max-w-[54vh] w-auto h-auto"
      />
      <Typography
        variant={"display-sm"}
        weight={"semibold"}
        className="lg:-mt-60"
      >
        hi, my name is joey.
      </Typography>
    </div>
  );
}
