"use client";

import Image from "next/image";
import React from "react";
import { Play, X } from "lucide-react";
import { Typography } from "@/components/typography";

type BlogPreview = {
  id: string;
  title: string;
  category: "travel" | "music";
  date: string;
  readTime: string;
  thumbnail: string;
  heroType: "video" | "image";
  heroSrc: string;
  excerpt: string;
};

const BLOG_PREVIEWS: BlogPreview[] = [
  { id: "london-blue-hour", title: "Blue hour walk through London", category: "travel", date: "May 2026", readTime: "4 min read", thumbnail: "/travel/london-1/camden-market.jpeg", heroType: "video", heroSrc: "/travel/taiwan/IMG_4061.MOV", excerpt: "A short city walk vlog and frame grabs from the evening light around Covent Garden." },
  { id: "ambient-notes-01", title: "Ambient notes #01: synth sketches", category: "music", date: "Apr 2026", readTime: "5 min read", thumbnail: "/travel/japan/2025-08-12%2021.57.20.jpg", heroType: "video", heroSrc: "/travel/taiwan/IMG_6023.MOV", excerpt: "A behind-the-scenes look at my latest layered ambient idea and why I picked this texture." },
  { id: "paris-postcards", title: "Paris postcards and museum corners", category: "travel", date: "Mar 2026", readTime: "3 min read", thumbnail: "/travel/paris-3/petit-palais.jpeg", heroType: "image", heroSrc: "/travel/paris-1/eiffel.jpg", excerpt: "My favorite stills from Petit Palais and a mini photo story from nearby streets." },
  { id: "live-room-session", title: "Living room live session", category: "music", date: "Feb 2026", readTime: "6 min read", thumbnail: "/travel/vietnam/pho.jpeg", heroType: "image", heroSrc: "/travel/vietnam/landmark812.jpeg", excerpt: "One-take guitar + vocal setup, mic placement notes, and lessons from a no-edit recording." },
];

export default function BlogPagePrototype() {
  const [activeId, setActiveId] = React.useState(BLOG_PREVIEWS[0]?.id);
  const [wheelOpen, setWheelOpen] = React.useState(false);
  const hoverTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const activePost = BLOG_PREVIEWS.find((preview) => preview.id === activeId) || BLOG_PREVIEWS[0];
  const scheduleActivate = React.useCallback((id: string) => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => setActiveId(id), 500);
  }, []);

  React.useEffect(() => () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
  }, []);

  return (
    <main className="mx-auto flex h-[calc(100vh-5rem)] w-full max-w-7xl flex-col overflow-hidden px-4 py-4 text-[#2f4d6f] md:grid md:grid-cols-[0.9fr_1.1fr] md:gap-6 md:px-8">
      <section className="hidden h-full rounded-2xl border border-[#dbe7f3] bg-white/75 p-3 shadow-sm md:block">
        <div className="h-full snap-y snap-mandatory space-y-3">
          {BLOG_PREVIEWS.map((post) => {
            const isActive = post.id === activePost.id;
            return (
              <button key={post.id} type="button" onMouseEnter={() => scheduleActivate(post.id)} onFocus={() => scheduleActivate(post.id)} className={`group flex w-full snap-start items-center gap-3 rounded-xl p-2 text-left transition-all duration-200 ${isActive ? "bg-[#ecf4fd] ring-1 ring-[#adcceb] md:w-full" : "hover:bg-[#f6faff] md:w-[88%]"}`}>
                <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-lg">
                  <Image src={post.thumbnail} alt={post.title} fill className="object-cover transition duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold leading-tight">{post.title}</p>
                  <p className="text-xs uppercase tracking-wide text-[#5b7ba0]">{post.category}</p>
                  <p className="text-xs text-[#5f6f84]">{post.date} • {post.readTime}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="flex h-full min-h-0 flex-col overflow-hidden">
        <div className="sticky top-0 z-20 border-b border-[#e5edf6] bg-[#f8fbff] p-3">
          <div className="relative h-[30vh] min-h-[220px] overflow-hidden rounded-xl bg-black">
            {activePost.heroType === "video" ? (
              <video key={activePost.heroSrc} src={activePost.heroSrc} controls className="h-full w-full object-cover" />
            ) : (
              <Image src={activePost.heroSrc} alt={activePost.title} fill className="object-cover" />
            )}
          </div>
        </div>

        <article className="min-h-0 flex-1 p-4 md:p-6">
          <div className="space-y-3 pb-20">
            <Typography variant="display-sm" weight="semibold" className="text-2xl">{activePost.title}</Typography>
            <p className="text-sm uppercase tracking-wide text-[#5b7ba0]">{activePost.category} • {activePost.date} • {activePost.readTime}</p>
            <p className="text-base text-[#425f80]">{activePost.excerpt}</p>
            <p className="text-sm text-[#4d6787]">Prototype note: this page focuses on layout behavior first — pinned hero media, scrollable article body, and a mobile “More like this” wheel modal. We can refine typography, transitions, and final copy after you confirm the interaction direction.</p>
          </div>
        </article>

        <div className="sticky bottom-0 z-30 border-t border-[#e5edf6] bg-white/95 p-3 md:hidden">
          <button type="button" onClick={() => setWheelOpen(true)} className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#ecf4fd] px-4 py-3 text-sm font-semibold text-[#35587d]">
            <Play className="h-4 w-4" />
            More like this
          </button>
        </div>
      </section>

      {wheelOpen && <MobileWheelModal items={BLOG_PREVIEWS} activeId={activePost.id} onSelect={scheduleActivate} onClose={() => setWheelOpen(false)} />}
    </main>
  );
}

function MobileWheelModal({ items, activeId, onSelect, onClose }: { items: BlogPreview[]; activeId: string; onSelect: (id: string) => void; onClose: () => void; }) {
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const scrollIdleRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    const selectedIndex = items.findIndex((item) => item.id === activeId);
    if (selectedIndex < 0) return;
    const selectedEl = root.querySelector<HTMLElement>(`[data-wheel-idx=\"${selectedIndex}\"]`);
    selectedEl?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [activeId, items]);

  const syncSelectionFromScroll = React.useCallback(() => {
    const root = scrollRef.current;
    if (!root) return;
    const rootCenter = root.getBoundingClientRect().top + root.clientHeight / 2;
    const buttons = Array.from(root.querySelectorAll<HTMLElement>("[data-wheel-idx]"));
    if (!buttons.length) return;
    const closest = buttons.reduce<{ id: string; dist: number } | null>((acc, el) => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const dist = Math.abs(center - rootCenter);
      if (!acc || dist < acc.dist) return { id: el.dataset.id || "", dist };
      return acc;
    }, null);
    if (closest?.id) onSelect(closest.id);
  }, [onSelect]);

  const onWheelScroll = () => {
    if (scrollIdleRef.current) clearTimeout(scrollIdleRef.current);
    scrollIdleRef.current = setTimeout(syncSelectionFromScroll, 120);
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden" onClick={onClose}>
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute bottom-0 left-0 right-0 max-h-[72vh] rounded-t-3xl bg-white p-4 shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#56789e]">More like this</p>
          <button type="button" className="rounded-full p-2 hover:bg-[#edf4fb]" onClick={onClose} aria-label="Close suggestions">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div ref={scrollRef} onScroll={onWheelScroll} className="h-[56vh] snap-y snap-mandatory overflow-y-auto overscroll-contain pb-16 [scrollbar-width:none] [-ms-overflow-style:none] touch-pan-y">
          <div className="h-20" />
          {items.map((item, index) => {
            const isActive = item.id === activeId;
            return (
              <button type="button" key={item.id} data-id={item.id} data-wheel-idx={index} className={`mx-auto mb-3 flex w-[92%] snap-center items-center gap-3 rounded-xl border p-2 text-left transition-all duration-200 ${isActive ? "scale-100 border-[#9ec4eb] bg-[#ecf4fd]" : "scale-90 border-transparent bg-[#f5f8fc] opacity-70"}`}>
                <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-md">
                  <Image src={item.thumbnail} alt={item.title} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight">{item.title}</p>
                  <p className="text-xs text-[#5d7898]">{item.category} • {item.date}</p>
                </div>
              </button>
            );
          })}
          <div className="h-24" />
        </div>
      </div>
    </div>
  );
}
