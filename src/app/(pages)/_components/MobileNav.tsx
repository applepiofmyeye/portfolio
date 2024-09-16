import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

import { Routes } from "@/constants/site-config";

import { Typography } from "@/components/typography";
import { Flower2 } from "lucide-react";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="grid items-center rounded-md border border-gray-200 p-3">
          <Flower2 />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-[#46688d]">
        <div className="grid items-center gap-6 text-sm">
          <SheetClose asChild>
            <Link href={`${Routes.PROJECTS}`}>
              <Typography variant={"title-sm"} weight={"semibold"}>
                projects
              </Typography>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={Routes.PHOTOJOURNAL}>
              <Typography variant={"title-sm"} weight={"semibold"}>
                photo journal
              </Typography>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
