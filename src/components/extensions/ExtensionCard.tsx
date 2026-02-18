import type { Extension } from "../../data/extensions";

type Props = {
  extension: Extension;
  onClick: () => void;
};

export default function ExtensionCard({ extension, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="
        w-full h-full
        flex flex-col
        p-5
        rounded-2xl
        text-left
        transition-all duration-300
        group
        relative
        overflow-hidden

        /* Colors & Borders */
        bg-white dark:bg-(--color-surface)
        border border-(--color-border) dark:border-(--color-border-dark)
        
        /* Hover Effects */
        hover:border-(--color-brand)/50 dark:hover:border-(--color-brand)
        hover:shadow-lg dark:hover:shadow-none
        hover:-translate-y-1
      "
    >
      <div className="flex items-start justify-between w-full mb-4">
        <div className="p-2.5 rounded-xl bg-(--color-surface-muted) dark:bg-(--color-surface-muted-dark) group-hover:bg-white dark:group-hover:bg-black/20 transition-colors border border-transparent group-hover:border-(--color-border)">
          <img src={extension.icon} alt="" className="w-8 h-8 object-contain" />
        </div>

        {/* Icono flecha sutil al hover */}
        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-(--color-brand) -mr-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </span>
      </div>

      <h3 className="font-bold text-lg mb-2 text-(--color-text-main) group-hover:text-(--color-brand) transition-colors line-clamp-1">
        {extension.name}
      </h3>

      <p className="text-sm text-(--color-text-muted) leading-relaxed line-clamp-2 mb-4">
        {extension.description}
      </p>

      {/* TAGS EN LA TARJETA (Limitado a 3 para que no rompa el diseño) */}
      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {extension.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="
              text-[10px] uppercase tracking-wider font-semibold 
              px-2 py-1 rounded-md
              bg-(--color-surface-muted) text-(--color-text-muted)
              group-hover:bg-(--color-surface) group-hover:text-(--color-text-main)
              transition-colors
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
}
