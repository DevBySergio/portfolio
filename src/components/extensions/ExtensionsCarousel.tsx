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

    // Ancho aproximado de tarjeta + gap
    const scrollAmount = 340;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex justify-between items-end mb-6 px-1">
        <div>{/* Espacio para título si fuera necesario */}</div>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="
              w-9 h-9
              flex items-center justify-center
              rounded-full
              border border-(--color-border) dark:border-(--color-border-dark)
              bg-white dark:bg-(--color-surface)
              text-(--color-text-muted)
              hover:text-(--color-brand) hover:border-(--color-brand)
              transition-all hover:scale-105 active:scale-95
            "
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="
              w-9 h-9
              flex items-center justify-center
              rounded-full
              border border-(--color-border) dark:border-(--color-border-dark)
              bg-white dark:bg-(--color-surface)
              text-(--color-text-muted)
              hover:text-(--color-brand) hover:border-(--color-brand)
              transition-all hover:scale-105 active:scale-95
            "
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>

      {/* WRAPPER CON MÁSCARA CSS 
         La magia está aquí: [mask-image:linear-gradient(...)] 
         Esto desvanece los bordes usando transparencia alpha real, 
         evitando el problema de coincidencia de colores en modo oscuro/claro.
      */}
      <div
        className="relative -mx-4 px-4"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 20px, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 20px, black 95%, transparent)",
        }}
      >
        <div
          ref={containerRef}
          className="
            flex gap-5
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            no-scrollbar
            py-4 /* Padding vertical para que no se corten las sombras */
          "
        >
          {extensions.map((ext) => (
            <div
              key={ext.id}
              className="shrink-0 w-[280px] md:w-[320px] snap-start h-auto"
            >
              <ExtensionCard extension={ext} onClick={() => setActive(ext)} />
            </div>
          ))}

          {/* Espaciador final para asegurar que el último elemento no quede pegado al fade */}
          <div className="w-1 shrink-0" />
        </div>
      </div>

      {active && (
        <ExtensionModal extension={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}
