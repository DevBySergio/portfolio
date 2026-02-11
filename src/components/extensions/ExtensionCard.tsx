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
    w-full
    p-5
    rounded
    text-left
    bg-(--color-surface-light)
    dark:bg-(--color-surface-dark)
    border border-transparent
    hover:border-(--color-brand)
    transition
  "
    >
      <img src={extension.icon} alt="" className="w-10 h-10 mb-4" />

      <h3 className="font-semibold mb-1">{extension.name}</h3>

      <p className="text-sm text-(--color-text-muted)">
        {extension.description}
      </p>
    </button>
  );
}
