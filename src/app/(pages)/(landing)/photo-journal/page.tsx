"use client";
import { Typography } from "@/components/typography";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  useCarousel,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { X } from "lucide-react";
import Image from "next/image";

export default function PhotoJournalPage() {
  // souvenir scraps collage (images live in public/travel/scraps)
  const scrapImages: string[] = [
    "/travel/scraps/paris-claude-green.jpg",
    "/travel/scraps/vietnam-hoian-show.jpg",
    "/travel/scraps/london-snc.jpg",
    "/travel/scraps/paris-flight-tix.jpg",
    "/travel/scraps/paris-claude-boat.jpg",
    "/travel/scraps/vietnam-streetfood.jpg",
    "/travel/scraps/paris-train.jpg",
    "/travel/scraps/japan-sherry-dogs.jpg",
    "/travel/scraps/paris-claude-lily-pond.jpg",
    "/travel/scraps/london-snc-portraits.jpg",
    "/travel/scraps/taiwan-sugarcane.jpg",
    "/travel/scraps/paris-claude-notredame.jpg",
    "/travel/scraps/munich-sumaiya.jpg",
    "/travel/scraps/taiwan-tix.jpg",
    "/travel/scraps/london-sense.jpg",
    "/travel/scraps/vietnam-house.jpg",
    "/travel/scraps/vietnam-tix.jpg",
  ];

  // deterministic pseudo-random helpers to avoid hydration mismatch
  const stringHash = (input: string): number => {
    let hash = 0;
    for (let i = 0; i < input.length; i += 1) {
      const chr = input.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
  };

  const seededUnit = (seed: number): number => {
    // simple mixing to get a [0,1) value
    const mixed = (seed ^ 0x9e3779b9) >>> 0;
    return (mixed % 1000) / 1000;
  };

  const rotationFor = (key: string): number => {
    const seed = stringHash(key + "-rot");
    const u = seededUnit(seed);
    // rotate within [-8, 8] degrees
    return (u - 0.5) * 16;
  };

  const yJitterFor = (key: string): number => {
    const seed = stringHash(key + "-y");
    const u = seededUnit(seed);
    // vertical offset between [-6px, 10px]
    return Math.round((u - 0.375) * 32);
  };

  const widthClassFor = (key: string): string => {
    const seed = stringHash(key + "-w");
    const u = seededUnit(seed);
    if (u < 0.33) return "w-[78%]";
    if (u < 0.66) return "w-[92%]";
    return "w-full";
  };

  return (
    <div className="grid justify-items-center">
      <div className="flex items-center flex-col max-w-4xl space-y-4 md:space-y-10 text-center my-8">
        {/* Souvenir scraps collage */}
        <div className="space-y-2 w-full">
          <Typography
            variant={"display-md"}
            weight={"semibold"}
            className="text-[#46688d]"
          >
            my travel scrapbook
          </Typography>
          <Typography variant={"body-lg"} className="opacity-70 text-[#46688d]">
            odd-shaped mementos arranged in a loose collage, click to view its
            backstory and my travel photos :)
          </Typography>
        </div>
        <div className="my-8">
          <ScrapbookWithCarousel scrapImages={scrapImages} />
        </div>
      </div>
    </div>
  );
}

type ScrapbookProps = {
  scrapImages: string[];
};

function ScrapbookWithCarousel({ scrapImages }: ScrapbookProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedFolder, setSelectedFolder] = React.useState<string | null>(
    null
  );
  const [selectedScrapSrc, setSelectedScrapSrc] = React.useState<string | null>(
    null
  );

  // Map folder => images inside that folder
  const galleries: Record<string, string[]> = React.useMemo(
    () => ({
      london: [
        "/travel/london/camden-market.jpeg",
        "/travel/london/chinatown.jpeg",
        "/travel/london/neals-yard.jpeg",
        "/travel/london/shakespeare-and-co.jpeg",
        "/travel/london/shakespeare-square.jpeg",
      ],
      "paris-1": [
        "/travel/paris-1/claude-monet-museum.jpeg",
        "/travel/paris-1/dlorangerie.jpeg",
      ],
      "paris-2": [
        "/travel/paris-2/bastille-street-art.jpeg",
        "/travel/paris-2/bastille.jpeg",
      ],
      "paris-3": [
        "/travel/paris-3/le-petit-palais-entrance.jpeg",
        "/travel/paris-3/montmarte.jpeg",
        "/travel/paris-3/petit-palais.jpeg",
      ],
      vietnam: ["/travel/vietnam/landmark812.jpeg", "/travel/vietnam/pho.jpeg"],
      taiwan: ["/travel/taiwan/IMG_3948.jpg"],
      "taiwan-2": ["/travel/taiwan-2/IMG_3990.jpg"],
    }),
    []
  );

  const folderForScrap = React.useCallback((src: string): string => {
    const name = src.toLowerCase();
    if (name.includes("london-")) return "london";
    if (name.includes("claude-")) return "paris-1";
    if (name.includes("paris-")) return "paris-2";
    if (name.includes("vietnam-") || name.includes("hoian-")) return "vietnam";
    if (name.includes("taiwan-")) return "taiwan";
    return "london";
  }, []);

  const openGallery = (folder: string, scrapSrc: string) => {
    setSelectedFolder(folder);
    setSelectedScrapSrc(scrapSrc);
    setIsOpen(true);
  };

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // deterministic pseudo-random helpers to avoid hydration mismatch
  const stringHash = (input: string): number => {
    let hash = 0;
    for (let i = 0; i < input.length; i += 1) {
      const chr = input.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return Math.abs(hash);
  };

  const seededUnit = (seed: number): number => {
    const mixed = (seed ^ 0x9e3779b9) >>> 0;
    return (mixed % 1000) / 1000;
  };

  const rotationFor = (key: string): number => {
    const seed = stringHash(key + "-rot");
    const u = seededUnit(seed);
    return (u - 0.5) * 16;
  };

  const yJitterFor = (key: string): number => {
    const seed = stringHash(key + "-y");
    const u = seededUnit(seed);
    return Math.round((u - 0.375) * 32);
  };

  const widthClassFor = (key: string): string => {
    const seed = stringHash(key + "-w");
    const u = seededUnit(seed);
    if (u < 0.33) return "w-[78%]";
    if (u < 0.66) return "w-[92%]";
    return "w-full";
  };

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-3 gap-4">
        {scrapImages.map((src) => {
          const rot = rotationFor(src);
          const y = yJitterFor(src);
          const widthClz = widthClassFor(src);
          const alt = src.split("/").pop() || "scrap";
          return (
            <button
              type="button"
              key={src}
              onClick={() => openGallery(folderForScrap(src), src)}
              className={[
                "mb-4 inline-block break-inside-avoid p-2",
                "bg-white/60 rounded-md shadow-sm",
                "transition-transform hover:shadow-md",
              ].join(" ")}
              style={{
                transform: `translateY(${y}px) rotate(${rot.toFixed(2)}deg)`,
              }}
            >
              <img
                src={src}
                alt={alt}
                className={[
                  "h-auto max-w-full object-contain mx-auto",
                  widthClz,
                  "transition-transform duration-300 ease-out hover:scale-[1.02]",
                ].join(" ")}
                loading="lazy"
              />
            </button>
          );
        })}
      </div>

      {isOpen && selectedFolder && (
        <div className="fixed inset-0 z-50" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
            <div className="relative w-full max-w-2xl">
              <div
                className="bg-[#f5f5f5] rounded-lg shadow-lg p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-2">
                  <Typography
                    variant={"title-lg"}
                    weight={"semibold"}
                    className="text-[#46688d]"
                  >
                    {selectedFolder.split("-")[0]}
                  </Typography>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-md hover:bg-gray-100"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5 text-[#46688d]" />
                  </button>
                </div>
                <div className="relative group">
                  <Carousel
                    className="w-full outline-none text-[#46688d]"
                    tabIndex={0}
                    opts={{
                      dragFree: false,
                      containScroll: "trimSnaps",
                    }}
                  >
                    <CarouselContent>
                      {[selectedScrapSrc, ...(galleries[selectedFolder] || [])]
                        .filter(
                          (x): x is string =>
                            typeof x === "string" && x.length > 0
                        )
                        .map((img) => (
                          <CarouselItem
                            key={img}
                            className="flex justify-center"
                          >
                            <Image
                              src={img}
                              alt={img.split("/").pop() || "image"}
                              className="max-h-[70vh] w-auto object-contain rounded-md"
                              width={1000}
                              height={1000}
                            />
                          </CarouselItem>
                        ))}
                    </CarouselContent>
                    <HoverArrows />
                    <CarouselDots className="mt-3" />
                    <FirstSlideCaption scrapSrc={selectedScrapSrc} />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function HoverArrows() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();
  return (
    <>
      <button
        type="button"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous"
        className="absolute left-2 top-1/2 -translate-y-1/2 hidden md:flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="h-5 w-5 text-[#46688d]" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next"
        className="absolute right-2 top-1/2 -translate-y-1/2 hidden md:flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="h-5 w-5 text-[#46688d]" />
      </button>
    </>
  );
}

function FirstSlideCaption({ scrapSrc }: { scrapSrc: string | null }) {
  const { api } = useCarousel();
  const [isFirst, setIsFirst] = React.useState(true);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setIsFirst(api.selectedScrollSnap() === 0);
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  if (!scrapSrc || !isFirst) return null;

  const captions: Record<string, string> = {
    "/travel/scraps/paris-claude-green.jpg":
      "one of three postcards i got from Musee D'Orsay in Paris",
    "/travel/scraps/vietnam-hoian-show.jpg":
      "a ticket to the water puppet show in Hoi An, Vietnam",
    "/travel/scraps/london-snc.jpg":
      "a bookmark from Shakespeare and Co. in London",
    "/travel/scraps/paris-flight-tix.jpg": "my flight ticket to Paris",
    "/travel/scraps/paris-claude-boat.jpg":
      "one of three postcards i got from Musee D'Orsay in Paris",
    "/travel/scraps/vietnam-streetfood.jpg":
      "a postcard which I actually got after spending 3 hours at the souvenir shop",
    "/travel/scraps/paris-train.jpg":
      "one of the tens of train tickets i got from the train stations in Paris",
    "/travel/scraps/japan-sherry-dogs.jpg":
      "a postcard given to me by Sherry from her exchange in Japan <3",
    "/travel/scraps/paris-claude-lily-pond.jpg":
      "a postcard from Musee D'Orsay in Paris",
    "/travel/scraps/london-snc-portraits.jpg":
      "a bookmark from Shakespeare and Co. in London, i love the illustrations",
    "/travel/scraps/taiwan-sugarcane.jpg":
      "a free voucher I got at ximending, taiwan after buying some fried milk cubes",
    "/travel/scraps/paris-claude-notredame.jpg":
      "a postcard from Musee D'Orsay in Paris, this one is my favorite! I love Claude's work",
    "/travel/scraps/munich-sumaiya.jpg":
      "a postcard from Sumaiya, after her internship in Munich",
    "/travel/scraps/taiwan-tix.jpg":
      "all the high speed train tickets i got from the train stations in Taiwan",
    "/travel/scraps/london-sense.jpg":
      "a copy of sense and sensibility, jane austen is a queen",
    "/travel/scraps/vietnam-house.jpg":
      "a postcard from vietnam :) i like the border design",
    "/travel/scraps/vietnam-tix.jpg":
      "all my flight tickets around vietnam! went to danang and dalat, danangs beaches were beautiful",
  };

  const placeholder = captions[scrapSrc] || "";

  return (
    <div className="mt-3 rounded-md border bg-white/70 p-3 text-sm text-[#46688d]">
      {placeholder}
    </div>
  );
}
