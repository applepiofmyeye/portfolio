import React from "react";
import Navbar from "./_components/Navbar";

export default function LandingLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <div className="p-6 md:px-15 px-10 mx-auto">{children}</div>
    </div>
  );
}
