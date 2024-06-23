import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Routes } from "@/constants/site-config";

import Image from "next/image";

import { Car, Flower2, HamIcon } from "lucide-react";
import { Typography } from "@/components/typography";
import { buttonVariants } from "@/components/ui/button";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="grid items-center rounded-md border border-gray-200 p-3">
          <Flower2 />
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className="grid items-center gap-6 text-sm">
          <SheetClose asChild>
            <Link href={`#${Routes.PROJECTS}`}>
              <Typography variant={"label-lg"} weight={"semibold"}>
                projects
              </Typography>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={Routes.PHOTOJOURNAL}>
              <Typography variant={"label-lg"} weight={"semibold"}>
                photo journal
              </Typography>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
