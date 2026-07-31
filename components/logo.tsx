/**
 * Logo Créneau : feu tricolore 3D (dégradés radiaux + reflets), feu vert allumé
 * avec un sourire discret. Les ids de gradients sont préfixés pour éviter les
 * collisions si le SVG apparaît plusieurs fois dans la page.
 */

/** Compatibilité avec le moteur (accessoires non utilisés ici) */
export type Accessory = "aucun";

export function CreneauLogo({ size = 36 }: { size?: number; accessory?: Accessory }) {
  const uid = "cl";
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        {/* Boîtier métal */}
        <linearGradient id={`${uid}-case`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4A4A63" />
          <stop offset="35%" stopColor="#2D2D3F" />
          <stop offset="100%" stopColor="#1A1A28" />
        </linearGradient>
        {/* Feux : lumière en haut à gauche */}
        <radialGradient id={`${uid}-red`} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#FF8A7A" />
          <stop offset="60%" stopColor="#E5342A" />
          <stop offset="100%" stopColor="#A81810" />
        </radialGradient>
        <radialGradient id={`${uid}-amber`} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#FFE08A" />
          <stop offset="60%" stopColor="#F5A623" />
          <stop offset="100%" stopColor="#B36F00" />
        </radialGradient>
        <radialGradient id={`${uid}-green`} cx="35%" cy="28%" r="78%">
          <stop offset="0%" stopColor="#9BF5B4" />
          <stop offset="55%" stopColor="#2FBF63" />
          <stop offset="100%" stopColor="#0E7A38" />
        </radialGradient>
        {/* Halo du feu vert allumé */}
        <radialGradient id={`${uid}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5BE58A" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#5BE58A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ombre au sol */}
      <ellipse cx="32" cy="60" rx="15" ry="3" fill="#2d2d3f" opacity="0.16" />

      {/* Mât */}
      <rect x="29" y="52" width="6" height="7" rx="1.5" fill="#2D2D3F" />

      {/* Boîtier */}
      <rect x="16" y="3" width="32" height="50" rx="9" fill={`url(#${uid}-case)`} />
      {/* Reflet vertical sur le boîtier */}
      <rect x="19.5" y="6.5" width="4" height="43" rx="2" fill="#FFFFFF" opacity="0.13" />
      {/* Visière du feu vert */}
      <path d="M18.5 36 h27 a2 2 0 0 1 0 4 h-27 a2 2 0 0 1 0 -4 z" fill="#14141F" opacity="0.55" />

      {/* Halo vert */}
      <circle cx="32" cy="43" r="13" fill={`url(#${uid}-glow)`} />

      {/* Feux */}
      <circle cx="32" cy="14" r="6.5" fill={`url(#${uid}-red)`} opacity="0.35" />
      <circle cx="32" cy="28.5" r="6.5" fill={`url(#${uid}-amber)`} opacity="0.35" />
      <circle cx="32" cy="43" r="7.5" fill={`url(#${uid}-green)`} />

      {/* Reflet spéculaire sur le feu vert */}
      <ellipse cx="29" cy="39.5" rx="2.6" ry="1.8" fill="#FFFFFF" opacity="0.6" transform="rotate(-30 29 39.5)" />

      {/* Sourire discret dans le feu vert */}
      <path
        d="M28 44.5 Q32 48 36 44.5"
        fill="none"
        stroke="#0B5A2A"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}
