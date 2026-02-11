import { useRef, useState } from "react";
import { extensions } from "../../data/extensions";
import ExtensionCard from "./ExtensionCard";
import ExtensionModal from "./ExtensionModal";
import type { Extension } from "../../data/extensions";

export default function ExtensionsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Extension | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Detectar ancho real de una card
    const firstCard = container.querySelector("div");
    if (!firstCard) return;

    const cardWidth = firstCard.clientWidth + 24; // 24 = gap-6
    const visibleCards = Math.floor(container.clientWidth / cardWidth);

    const scrollAmount = cardWidth * (visibleCards || 1);

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-semibold">VS Code Extensions</h2>

        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="
              w-10 h-10
              flex items-center justify-center
              rounded-full
              border border-(--color-border)
              bg-(--color-surface)
              hover:border-(--color-brand)
              hover:scale-105
              transition
            "
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            className="
              w-10 h-10
              flex items-center justify-center
              rounded-full
              border border-(--color-border)
              bg-(--color-surface)
              hover:border-(--color-brand)
              hover:scale-105
              transition
            "
          >
            →
          </button>
        </div>
      </div>

      {/* WRAPPER CON FADE */}
      <div className="relative">
        {/* Fade left */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-(--color-bg) to-transparent z-10" />

        {/* Fade right */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-(--color-bg) to-transparent z-10" />

        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="
              flex gap-6
              overflow-x-auto
              scroll-smooth
              snap-x snap-mandatory
              no-scrollbar
            "
          >
            {extensions.map((ext) => (
              <div key={ext.id} className="shrink-0 w-300px snap-start">
                <ExtensionCard extension={ext} onClick={() => setActive(ext)} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {active && (
        <ExtensionModal extension={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}
