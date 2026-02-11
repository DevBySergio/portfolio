import type { Extension } from "../../data/extensions";

type Props = {
  extension: Extension;
  onClose: () => void;
};

export default function ExtensionModal({ extension, onClose }: Props) {
  return (
    <div
      className="
        fixed inset-0 z-100
        bg-black/60 backdrop-blur-sm
        flex items-center justify-center
        p-4
      "
      onClick={onClose} // Cerrar al hacer clic fuera
    >
      <div
        className="
          max-w-xl w-full
          max-h-[90vh] overflow-y-auto
          p-6 md:p-8 rounded-2xl
          shadow-2xl
          bg-white dark:bg-(--color-surface-dark)
          border border-(--color-border) dark:border-(--color-border-dark)
        "
        onClick={(e) => e.stopPropagation()} // Evitar cierre al hacer clic dentro
      >
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            {/* Opcional: Mostrar icono pequeño aquí también */}
            {extension.icon && (
              <img src={extension.icon} alt="" className="w-8 h-8 rounded" />
            )}
            <h3 className="text-2xl font-bold text-(--color-text-main)">
              {extension.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="
                p-2 -mr-2 rounded-lg
                text-(--color-text-muted) hover:text-(--color-brand)
                hover:bg-(--color-surface-muted) dark:hover:bg-(--color-surface-muted-dark)
                transition-colors
            "
            aria-label="Close modal"
          >
            {/* Icono de cierre SVG simple */}
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

        <p className="text-(--color-text-muted) mb-8 text-lg leading-relaxed">
          {extension.description}
        </p>

        {extension.screenshots && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {extension.screenshots.map((src) => (
              <img
                key={src}
                src={src}
                alt={`Screenshot of ${extension.name}`}
                className="rounded-lg border border-(--color-border) dark:border-transparent shadow-sm"
              />
            ))}
          </div>
        )}

        <div className="flex justify-end gap-3 pt-4 border-t border-(--color-border) dark:border-(--color-border-dark)">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-(--color-text-muted) hover:text-(--color-text-main) transition-colors"
          >
            Close
          </button>
          <a
            href={extension.marketplaceUrl}
            target="_blank"
            rel="noreferrer"
            className="
                inline-flex items-center justify-center
                px-6 py-2.5
                rounded-lg
                bg-(--color-brand) text-white font-medium text-sm
                hover:bg-(--color-brand-dark)
                shadow-md hover:shadow-lg hover:-translate-y-0.5
                transition-all
            "
          >
            View in Marketplace
          </a>
        </div>
      </div>
    </div>
  );
}
