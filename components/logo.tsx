/**
 * Logo Kreneau — marque minimaliste : un « K » construit à partir d'une barre
 * verticale et de deux obliques qui s'écartent, comme une trajectoire qui
 * bifurque. Monochrome, sans dégradé ni relief : il fonctionne à 20 px comme
 * à 200 px, en une seule couleur.
 */

/** Compatibilité avec le moteur (accessoires non utilisés ici) */
export type Accessory = "aucun";

export function KreneauLogo({ size = 32 }: { size?: number; accessory?: Accessory }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="var(--color-zest)" />
      {/* Le K : montant + deux obliques */}
      <path
        d="M11 8v16"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M21.5 8.5 11.5 16l10 7.5"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
