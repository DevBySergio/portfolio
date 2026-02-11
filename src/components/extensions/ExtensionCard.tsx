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
        rounded-xl
        text-left
        transition-all duration-300
        group

        /* Colors & Borders */
        bg-white dark:bg-(--color-surface-dark)
        border border-(--color-border) dark:border-(--color-border-dark)
        
        /* Hover Effects */
        hover:border-(--color-brand) dark:hover:border-(--color-brand)
        hover:shadow-md dark:hover:shadow-none
        hover:-translate-y-1
      "
    >
      <div className="p-2 rounded-lg bg-(--color-surface-muted) dark:bg-(--color-surface-muted-dark) w-fit mb-4">
        <img src={extension.icon} alt="" className="w-8 h-8 object-contain" />
      </div>

      <h3 className="font-bold text-lg mb-2 text-(--color-text-main) group-hover:text-(--color-brand) transition-colors">
        {extension.name}
      </h3>

      <p className="text-sm text-(--color-text-muted) leading-relaxed line-clamp-3">
        {extension.description}
      </p>
    </button>
  );
}
