import { useEffect } from "react";
import type { Extension } from "../../data/extensions";

type Props = {
  extension: Extension;
  onClose: () => void;
};

export default function ExtensionModal({ extension, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="
        fixed inset-0 z-[100]
        bg-black/60 backdrop-blur-sm
        flex items-center justify-center
        p-4 sm:p-6
        animate-modal-overlay
      "
      onClick={onClose}
    >
      <div
        className="
          relative w-full max-w-2xl
          max-h-[85vh] overflow-y-auto
          rounded-2xl
          bg-white dark:bg-(--color-surface)
          border border-(--color-border) dark:border-(--color-border-dark)
          shadow-2xl
          animate-modal-content
          no-scrollbar
          flex flex-col
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Sticky */}
        <div className="sticky top-0 z-10 flex justify-between items-start p-6 border-b border-(--color-border) dark:border-(--color-border-dark) bg-white/90 dark:bg-(--color-surface)/90 backdrop-blur-md">
          <div className="flex gap-4">
            <div className="shrink-0 p-3 rounded-xl bg-(--color-surface-muted) dark:bg-(--color-surface-muted-dark) border border-(--color-border) dark:border-(--color-border-dark)">
              <img
                src={extension.icon}
                alt=""
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-(--color-text-main) leading-tight">
                {extension.name}
              </h3>

              {/* TAGS EN EL MODAL */}
              <div className="flex flex-wrap gap-2 mt-2">
                {extension.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-2 py-0.5 rounded-md text-xs font-medium
                      bg-(--color-surface-muted) text-(--color-text-muted)
                      border border-(--color-border)
                      dark:bg-(--color-surface-muted-dark) dark:border-(--color-border-dark)
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="
              shrink-0 ml-4
              p-2 rounded-full
              text-(--color-text-muted)
              hover:text-(--color-text-main) hover:bg-(--color-surface-muted)
              dark:hover:bg-(--color-surface-muted-dark)
              transition-colors
            "
            aria-label="Cerrar modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Contenido Scrollable */}
        <div className="p-6 md:p-8 space-y-8 flex-1">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-(--color-text-muted) text-lg leading-relaxed">
              {extension.description}
            </p>
          </div>

          {extension.screenshots && extension.screenshots.length > 0 && (
            <div className="space-y-4">
              <h4 className="font-semibold text-(--color-text-main) flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-(--color-brand)"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Capturas de pantalla
              </h4>
              <div className="grid grid-cols-1 gap-6">
                {extension.screenshots.map((src, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-xl border border-(--color-border) dark:border-(--color-border-dark) shadow-sm bg-(--color-surface-muted)"
                  >
                    <img
                      src={src}
                      alt={`${extension.name} screenshot ${idx + 1}`}
                      className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer con acciones */}
        <div className="sticky bottom-0 p-6 border-t border-(--color-border) dark:border-(--color-border-dark) bg-white dark:bg-(--color-surface) flex flex-wrap justify-end gap-3 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-(--color-text-muted) hover:text-(--color-text-main) hover:bg-(--color-surface-muted) transition-colors"
          >
            Cerrar
          </button>

          {/* BOTÓN REPO GITHUB (Solo si existe repoUrl) */}
          {extension.repoUrl && (
            <a
              href={extension.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-2
                px-5 py-2.5
                rounded-lg
                border border-(--color-border) dark:border-(--color-border-dark)
                bg-white dark:bg-(--color-surface-muted)
                text-(--color-text-main) font-medium text-sm
                hover:border-(--color-text-muted)
                transition-all
              "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              Ver Código
            </a>
          )}

          <a
            href={extension.marketplaceUrl}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2
              px-6 py-2.5
              rounded-lg
              bg-(--color-brand) text-white font-medium text-sm
              hover:bg-(--color-brand-dark)
              shadow-lg hover:shadow-xl hover:-translate-y-0.5
              transition-all
            "
          >
            <span>Instalar</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
