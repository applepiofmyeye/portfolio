import { Typography } from "@/components/typography";
import React from "react";
import Masonry from "@mui/lab/Masonry";

const images = [
  "/travel/bastille-street-art.jpeg",
  "/travel/bastille.jpeg",
  "/travel/camden-market.jpeg",
  "/travel/chinatown.jpeg",
  "/travel/landmark812.jpeg",
  "/travel/dlorangerie.jpeg",
  "/travel/montmarte.jpeg",
  "/travel/shakespeare-square.jpeg",
  "/travel/petit-palais.jpeg",
  "/travel/le-petit-palais-entrance.jpeg",
  "/travel/claude-monet-museum.jpeg",
  "/travel/neals-yard.jpeg",
  "/travel/pho.jpeg",
  "/travel/shakespeare-and-co.jpeg",
];

export default function PhotoJournalPage() {
  return (
    <div className="grid justify-items-center">
      <div className="flex items-center flex-col max-w-4xl space-y-20">
        <div className="space-y-2 flex flex-col text-center">
          <Typography variant={"headline-md"} weight={"semibold"}>
            my photo gallery {"<3"}
          </Typography>
          <Typography variant={"body-md"} className="opacity-80">
            my favourtie photos from my recent travels!
          </Typography>
        </div>
        <Masonry spacing={2} columns={3}>
          {images.map((image, index) => (
            <img key={index} src={image} className="rounded-xl max-w-full" />
          ))}
        </Masonry>
      </div>
    </div>
  );
}
