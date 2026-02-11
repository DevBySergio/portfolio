import { useRef, useState } from "react";
// Asegúrate de que la ruta de importación sea correcta según tu estructura
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

    // Detectar ancho real de una card más el gap
    const firstCard = container.querySelector("div");
    // Fallback seguro si no hay cards renderizadas aún
    const cardWidth = firstCard ? firstCard.clientWidth + 24 : 320;

    // Calcular cuántas cards caben en la vista para scrollear un bloque lógico
    const visibleCards = Math.floor(container.clientWidth / cardWidth);
    const scrollAmount = cardWidth * (visibleCards || 1);

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex justify-between items-end mb-8">
        <div>
          {/* El título ya suele venir de la página padre, pero si este componente es autónomo está bien aquí */}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="
              w-10 h-10
              flex items-center justify-center
              rounded-full
              border border-(--color-border) dark:border-(--color-border-dark)
              bg-white dark:bg-(--color-surface-dark)
              text-(--color-text-main)
              hover:border-(--color-brand) hover:text-(--color-brand)
              transition-colors shadow-sm
            "
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="
              w-10 h-10
              flex items-center justify-center
              rounded-full
              border border-(--color-border) dark:border-(--color-border-dark)
              bg-white dark:bg-(--color-surface-dark)
              text-(--color-text-main)
              hover:border-(--color-brand) hover:text-(--color-brand)
              transition-colors shadow-sm
            "
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>

      {/* WRAPPER CON FADE */}
      <div className="relative group">
        {/* Fade left: Usa --color-bg para fundirse con el fondo de la sección */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-linear-to-r from-(--color-bg) to-transparent z-10" />

        {/* Fade right */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-linear-to-l from-(--color-bg) to-transparent z-10" />

        <div className="overflow-hidden -mx-4 px-4 py-4">
          {" "}
          {/* Margen negativo para permitir sombras sin corte */}
          <div
            ref={containerRef}
            className="
              flex gap-6
              overflow-x-auto
              scroll-smooth
              snap-x snap-mandatory
              no-scrollbar
            "
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {extensions.map((ext) => (
              /* Ancho fijo ajustado para buen responsive */
              <div
                key={ext.id}
                className="shrink-0 w-280px md:w-[320px] snap-start h-auto"
              >
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
