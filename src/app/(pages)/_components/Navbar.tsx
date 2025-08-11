"use client";

import { Routes } from "@/constants/site-config";
import Link from "next/link";
import { Typography } from "@/components/typography";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="md:hidden p-4">
        <MobileNav />
      </div>
      <aside className="hidden md:block sticky top-0 h-screen w-48 shrink-0 p-6 text-[#46688d]">
        <nav aria-label="Global" className="h-full">
          <ul className="flex flex-col gap-6 text-xl">
            <li>
              <Link href="/" className="flex flex-row gap-3 items-center">
                <Image
                  src="/mochi.png"
                  alt="dog staring at the window"
                  width={45}
                  height={45}
                  className={cn(
                    "rounded-full",
                    pathname === "/" && "ring-2 ring-[#2f4f7f]"
                  )}
                  priority
                />
              </Link>
            </li>
            <li
              className={cn(
                "border-l-2 pl-3 transition-colors",
                pathname.startsWith(`/${Routes.PROJECTS}`)
                  ? "border-[#2f4f7f]"
                  : "border-transparent hover:border-[#2f4f7f]"
              )}
            >
              <Link
                className={cn(
                  "inline-block origin-left transition-[transform,color] duration-200 hover:scale-110 hover:text-[#2f4f7f]",
                  pathname.startsWith(`/${Routes.PROJECTS}`) && "text-[#2f4f7f]"
                )}
                href={`/${Routes.PROJECTS}`}
              >
                projects
              </Link>
            </li>
            <li
              className={cn(
                "border-l-2 pl-3 transition-colors",
                pathname.startsWith(`/${Routes.PHOTOJOURNAL}`)
                  ? "border-[#2f4f7f]"
                  : "border-transparent hover:border-[#2f4f7f]"
              )}
            >
              <Link
                className={cn(
                  "inline-block origin-left transition-[transform,color] duration-200 hover:scale-110 hover:text-[#2f4f7f]",
                  pathname.startsWith(`/${Routes.PHOTOJOURNAL}`) &&
                    "text-[#2f4f7f]"
                )}
                href={`/${Routes.PHOTOJOURNAL}`}
              >
                photo journal
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
