import { Typography } from "@/components/typography";
import React from "react";

const images = [
  {
    img: "/travel/bastille-street-art.jpeg",
    title: "Bastille Street Art in Paris",
  },
  { img: "/travel/camden-market.jpeg", title: "Camden Market Views" },
  { img: "/travel/chinatown.jpeg", title: "London's Chinatown" },
  { img: "/travel/landmark812.jpeg", title: "Landmark 81 in Ho Chi Minh City" },
  { img: "/travel/dlorangerie.jpeg", title: "De L'Orangerie" },
  { img: "/travel/montmarte.jpeg", title: "Montmarte" },
  { img: "/travel/shakespeare-square.jpeg", title: "Shakespeare Square" },
  { img: "/travel/petit-palais.jpeg", title: "Le Petit Palais" },
  { img: "/travel/le-petit-palais-entrance.jpeg", title: "Le Petit Palais" },
  { img: "/travel/claude-monet-museum.jpeg", title: "Claude Monet Museum" },
  { img: "/travel/neals-yard.jpeg", title: "Neal's Yard" },
  { img: "/travel/pho.jpeg", title: "Pho" },
  { img: "/travel/shakespeare-and-co.jpeg", title: "Shakespeare and Co" },
];

export default function PhotoJournalPage() {
  return (
    <div className="grid justify-items-center">
      <div className="flex items-center flex-col max-w-4xl space-y-4 md:space-y-10">
        <div className="space-y-2 flex flex-col text-center">
          <Typography variant={"headline-md"} weight={"semibold"}>
            my photo gallery {"<3"}
          </Typography>
          <Typography variant={"body-md"} className="opacity-80">
            my favourtie photos from my recent travels!
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div key={index} className="gap-4">
              <img
                key={index}
                src={image.img}
                className="rounded-md md:rounded-xl max-w-full"
              />
              <Typography variant={"label-lg"} weight={"semibold"}>
                {image.title}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
