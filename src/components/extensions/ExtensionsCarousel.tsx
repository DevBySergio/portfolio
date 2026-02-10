import { useRef, useState } from "react";
import { extensions } from "../../data/extensions";
import ExtensionCard from "./ExtensionCard";
import ExtensionModal from "./ExtensionModal";
import type { Extension } from "../../data/extensions";

export default function ExtensionsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Extension | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!containerRef.current) return;

    const amount = dir === "left" ? -300 : 300;
    containerRef.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">VS Code Extensions</h2>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="px-3 py-1 border rounded"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="px-3 py-1 border rounded"
          >
            →
          </button>
        </div>
      </div>

      <div ref={containerRef} className="flex gap-4 overflow-x-auto pb-4">
        {extensions.map((ext) => (
          <ExtensionCard
            key={ext.id}
            extension={ext}
            onClick={() => setActive(ext)}
          />
        ))}
      </div>

      {active && (
        <ExtensionModal extension={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}
