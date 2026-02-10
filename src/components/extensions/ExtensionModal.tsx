import type { Extension } from "../../data/extensions";

type Props = {
  extension: Extension;
  onClose: () => void;
};

export default function ExtensionModal({ extension, onClose }: Props) {
  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/50
        flex items-center justify-center
        px-6
      "
    >
      <div
        className="
          max-w-lg w-full
          p-6 rounded
          bg-(--color-surface-light)
          dark:bg-(--color-surface-dark)
        "
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{extension.name}</h3>

          <button
            onClick={onClose}
            className="text-sm text-(--color-text-muted)"
          >
            Close
          </button>
        </div>

        <p className="text-sm text-(--color-text-muted) mb-4">
          {extension.description}
        </p>

        {extension.screenshots && (
          <div className="grid grid-cols-2 gap-3 mb-6">
            {extension.screenshots.map((src) => (
              <img key={src} src={src} alt="" className="rounded" />
            ))}
          </div>
        )}

        <a
          href={extension.marketplaceUrl}
          target="_blank"
          rel="noreferrer"
          className="
            inline-block
            px-4 py-2
            rounded
            bg-(--color-brand)
            text-white
            text-sm
            hover:opacity-90
          "
        >
          View on VS Code Marketplace
        </a>
      </div>
    </div>
  );
}
