import React from "react";
import Navbar from "./_components/Navbar";

export default function LandingLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-screen flex mobile:flex-col">
      <Navbar />
      <main className="flex-1 md:px-15 px-10">{children}</main>
    </div>
  );
}
