import { Routes } from "@/constants/site-config";
import Link from "next/link";

import { Car, User } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";
import { Typography } from "@/components/typography";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 p-2 bg-[#fffadf] text-[#46688d] md:border-b md:border-black/10 px-8">
      <div className="flex items-center gap-6 justify-between lg:justify-start w-full">
        <Link href="/">
          <div className="flex flex-row gap-3 items-center">
            <img
              src="/mochi.png"
              alt=" dog staring at the window"
              className="rounded-full size-[45px]"
            />{" "}
            <Typography
              variant={"title-sm"}
              weight={"semibold"}
              className="text-[#46688d]"
            >
              {"joey's portfolio"}
            </Typography>
          </div>
        </Link>
        <nav aria-label="Global">
          <ul className="flex items-center gap-2 text-sm md:gap-6 lg:border-l border-[#46688d]">
            <li className="hidden lg:block pl-3">
              <Link
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "text-[#46688d], text-lg"
                )}
                href={`/${Routes.PROJECTS}`}
              >
                projects
              </Link>
            </li>
            <li className="hidden lg:block">
              <Link
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "text-[#46688d], text-lg"
                )}
                href={`/${Routes.PHOTOJOURNAL}`}
              >
                photo journal
              </Link>
            </li>
            <li className="hidden lg:block">
              <Typography
                variant={"label-lg"}
                weight={"semibold"}
                className="text-[#46688d]"
              >
                𓆝 𓆟 𓆞 𓆝 𓆟
              </Typography>
            </li>
            <li className="lg:hidden block">
              <MobileNav />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
