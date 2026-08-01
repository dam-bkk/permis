import type { ReactNode } from "react";

/* ---------------------------------------------------------------------------
 * Bibliothèque des panneaux de signalisation routière (France).
 *
 * Les codes et les libellés suivent l'instruction interministérielle sur la
 * signalisation routière (série A danger, AB priorité, B prescription,
 * C indication, CE services, D direction, AK/K signalisation temporaire).
 *
 * Les dessins sont volontairement HORS design system : un panneau garde ses
 * couleurs réglementaires (rouge, bleu, jaune, blanc) quel que soit le thème
 * de l'application, sinon on apprend un faux panneau.
 *
 * Fichier en .tsx : les pictogrammes sont du JSX, ce qui n'est pas compilable
 * dans un .ts. L'import reste « @/data/panneaux ».
 * ------------------------------------------------------------------------- */

export type PanneauFamille =
  | "danger" // triangle rouge  (type A)
  | "interdiction" // rond rouge      (type B)
  | "obligation" // rond bleu       (type B)
  | "priorite" // (type AB)
  | "indication" // carré bleu      (type C)
  | "direction" // (type D)
  | "temporaire"; // chantier, fond jaune

export interface Panneau {
  /** code officiel : "A1a", "B14", "AB4"… */
  code: string;
  famille: PanneauFamille;
  /** "Virage à droite" */
  nom: string;
  /** ce qu'il impose ou annonce, en une phrase */
  sens: string;
  /** précision utile (distance d'application, exceptions) */
  detail?: string;
  /** LE piège d'examen sur ce panneau */
  piege?: string;
  svg: ReactNode;
}

export const FAMILLES: {
  id: PanneauFamille;
  label: string;
  forme: string;
}[] = [
  { id: "danger", label: "Danger", forme: "Triangle rouge" },
  { id: "priorite", label: "Priorité", forme: "Intersections" },
  { id: "interdiction", label: "Interdiction", forme: "Rond rouge" },
  { id: "obligation", label: "Obligation", forme: "Rond bleu" },
  { id: "indication", label: "Indication", forme: "Carré bleu" },
  { id: "direction", label: "Direction", forme: "Rectangle" },
  { id: "temporaire", label: "Temporaire", forme: "Fond jaune" },
];

/* ------------------------------- couleurs -------------------------------- */

const ROUGE = "#E30613";
const BLEU = "#0059A5";
const JAUNE = "#F7C600";
const BLANC = "#FFFFFF";
const NOIR = "#141414";
const GRIS = "#8D8D8D";
const VERT = "#009B48";

const POLICE = "ui-sans-serif, system-ui, Arial, Helvetica, sans-serif";

/* -------------------------------- gabarits ------------------------------- */

function Sv({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="h-full w-full"
    >
      {children}
    </svg>
  );
}

/** Triangle équilatéral pointe en haut : danger (A) et temporaire (AK). */
function TriDanger({
  children,
  fond = BLANC,
}: {
  children?: ReactNode;
  fond?: string;
}) {
  return (
    <Sv>
      <path
        d="M50 7 L96 87 L4 87 Z"
        fill={ROUGE}
        stroke={ROUGE}
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <path
        d="M50 26 L79 77 L21 77 Z"
        fill={fond}
        stroke={fond}
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {children}
    </Sv>
  );
}

/** Triangle pointe en bas : cédez le passage (AB3a). */
function TriInverse({ children }: { children?: ReactNode }) {
  return (
    <Sv>
      <path
        d="M50 93 L4 13 L96 13 Z"
        fill={ROUGE}
        stroke={ROUGE}
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <path
        d="M50 74 L21 23 L79 23 Z"
        fill={BLANC}
        stroke={BLANC}
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {children}
    </Sv>
  );
}

/** Disque à listel rouge : interdictions (B). */
function DisqueInter({
  children,
  fond = BLANC,
}: {
  children?: ReactNode;
  fond?: string;
}) {
  return (
    <Sv>
      <circle cx="50" cy="50" r="47" fill={ROUGE} />
      <circle cx="50" cy="50" r="33" fill={fond} />
      {children}
    </Sv>
  );
}

/** Disque bleu à listel blanc : obligations (B21…B26). */
function DisqueOblig({ children }: { children?: ReactNode }) {
  return (
    <Sv>
      <circle cx="50" cy="50" r="47" fill={BLANC} />
      <circle cx="50" cy="50" r="44" fill={BLEU} />
      {children}
    </Sv>
  );
}

/** Disque blanc à listel gris : fins d'interdiction (B31, B33, B34). */
function DisqueFin({ children }: { children?: ReactNode }) {
  return (
    <Sv>
      <circle cx="50" cy="50" r="47" fill={NOIR} />
      <circle cx="50" cy="50" r="45" fill={BLANC} />
      {children}
    </Sv>
  );
}

/** Carré bleu à listel blanc : indications (C). */
function CarreIndic({
  children,
  fond = BLEU,
}: {
  children?: ReactNode;
  fond?: string;
}) {
  return (
    <Sv>
      <rect x="2" y="2" width="96" height="96" rx="8" fill={BLANC} />
      <rect x="6" y="6" width="88" height="88" rx="5" fill={fond} />
      {children}
    </Sv>
  );
}

/** Carré bleu avec cartouche blanc : services (CE). */
function CarreService({ children }: { children?: ReactNode }) {
  return (
    <Sv>
      <rect x="2" y="2" width="96" height="96" rx="8" fill={BLANC} />
      <rect x="6" y="6" width="88" height="88" rx="5" fill={BLEU} />
      <rect x="19" y="19" width="62" height="62" fill={BLANC} />
      {children}
    </Sv>
  );
}

/** Rectangle (sens unique, panneaux de direction, déviation). */
function Rect({
  children,
  fond = BLEU,
  bord = BLANC,
}: {
  children?: ReactNode;
  fond?: string;
  bord?: string;
}) {
  return (
    <Sv>
      <rect x="2" y="22" width="96" height="56" rx="6" fill={bord} />
      <rect x="5" y="25" width="90" height="50" rx="4" fill={fond} />
      {children}
    </Sv>
  );
}

/** Losange sur pointe : route à caractère prioritaire (AB6 / AB7). */
function Losange({ fin = false }: { fin?: boolean }) {
  return (
    <Sv>
      <polygon points="50,1 99,50 50,99 1,50" fill={NOIR} />
      <polygon points="50,5 95,50 50,95 5,50" fill={BLANC} />
      <polygon points="50,18 82,50 50,82 18,50" fill={JAUNE} />
      {fin && (
        <>
          <path d="M22 60 L60 22 M40 78 L78 40" stroke={NOIR} strokeWidth="10" />
          <path d="M22 60 L60 22 M40 78 L78 40" stroke={BLANC} strokeWidth="7" />
        </>
      )}
    </Sv>
  );
}

const OCTO = "94.4,31.6 68.4,5.7 31.6,5.7 5.7,31.6 5.7,68.4 31.6,94.4 68.4,94.4 94.4,68.4";
const OCTO_INT = "87.9,34.3 65.7,12.1 34.3,12.1 12.1,34.3 12.1,65.7 34.3,87.9 65.7,87.9 87.9,65.7";

/** Octogone rouge : STOP (AB4). */
function Octogone() {
  return (
    <Sv>
      <polygon points={OCTO} fill={ROUGE} />
      <polygon points={OCTO_INT} fill="none" stroke={BLANC} strokeWidth="3" />
      <text
        x="50"
        y="51"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily={POLICE}
        fontSize="25"
        fontWeight="700"
        letterSpacing="0.5"
        fill={BLANC}
      >
        STOP
      </text>
    </Sv>
  );
}

/* ------------------------------ pictogrammes ------------------------------ */

/** Flèche pleine verticale. */
const flecheHaut = (x: number, yTop: number, yBase: number, w = 5, hh = 13) =>
  `M${x - w} ${yBase} V${yTop + hh} H${x - 2.2 * w} L${x} ${yTop} L${
    x + 2.2 * w
  } ${yTop + hh} H${x + w} V${yBase} Z`;

const flecheBas = (x: number, yTop: number, yBase: number, w = 5, hh = 13) =>
  `M${x - w} ${yTop} V${yBase - hh} H${x - 2.2 * w} L${x} ${yBase} L${
    x + 2.2 * w
  } ${yBase - hh} H${x + w} V${yTop} Z`;

const flecheDroite = (y: number, xg: number, xd: number, w = 5, hh = 13) =>
  `M${xg} ${y - w} H${xd - hh} V${y - 2.2 * w} L${xd} ${y} L${xd - hh} ${
    y + 2.2 * w
  } V${y + w} H${xg} Z`;

/** Silhouette de piéton (marche vers la droite). */
function Pieton({
  x,
  y,
  s = 1,
  c = NOIR,
}: {
  x: number;
  y: number;
  s?: number;
  c?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle cx="0" cy="0" r="3.7" fill={c} />
      <path
        d="M0 5 V14"
        stroke={c}
        strokeWidth="3.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M0 14 L-4.5 24 M0 14 L5 23"
        stroke={c}
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M-1 7 L5.5 12"
        stroke={c}
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}

/** Voiture vue de l'arrière. */
function Voiture({
  x,
  y,
  s = 1,
  c = NOIR,
}: {
  x: number;
  y: number;
  s?: number;
  c?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={c}>
      <path d="M4.5 9 L7 2 H17 L19.5 9 Z" />
      <rect x="0.5" y="8" width="23" height="8.5" rx="2.2" />
      <rect x="2.5" y="15.5" width="5.5" height="3.2" rx="1.2" />
      <rect x="16" y="15.5" width="5.5" height="3.2" rx="1.2" />
    </g>
  );
}

/** Poids lourd vu de l'arrière. */
function Camion({
  x,
  y,
  s = 1,
  c = NOIR,
}: {
  x: number;
  y: number;
  s?: number;
  c?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={c}>
      <rect x="0.5" y="0" width="23" height="16" rx="1.6" />
      <rect x="2.5" y="15" width="5.5" height="3.5" rx="1.2" />
      <rect x="16" y="15" width="5.5" height="3.5" rx="1.2" />
    </g>
  );
}

/** Bicyclette de profil. */
function Velo({
  x,
  y,
  s = 1,
  c = NOIR,
}: {
  x: number;
  y: number;
  s?: number;
  c?: string;
}) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${s})`}
      stroke={c}
      fill="none"
      strokeWidth="2.1"
      strokeLinecap="round"
    >
      <circle cx="-10" cy="4" r="7" />
      <circle cx="10" cy="4" r="7" />
      <path d="M-10 4 L-3 -6 H4 M-3 -6 L3 4 M10 4 L4 -7 H0" />
      <path d="M-4 -8 H0" />
    </g>
  );
}

const trait = (
  d: string,
  w = 8.5,
  c = NOIR,
  cap: "round" | "butt" = "round"
) => (
  <path
    d={d}
    fill="none"
    stroke={c}
    strokeWidth={w}
    strokeLinecap={cap}
    strokeLinejoin="round"
  />
);

const chiffre = (
  txt: string,
  taille = 40,
  c = NOIR,
  y = 51,
  x = 50
) => (
  <text
    x={x}
    y={y}
    textAnchor="middle"
    dominantBaseline="central"
    fontFamily={POLICE}
    fontSize={taille}
    fontWeight="700"
    fill={c}
  >
    {txt}
  </text>
);

/** Barres obliques grises des panneaux de fin d'interdiction. */
const barresFin = (
  <g stroke={GRIS} strokeWidth="3.2" strokeLinecap="round">
    <path d="M30 74 L58 26" />
    <path d="M39 77 L67 29" />
    <path d="M48 78 L74 34" />
    <path d="M22 68 L48 24" />
    <path d="M16 57 L38 20" />
  </g>
);

/** Trois flèches en anneau : carrefour giratoire. */
const anneauGiratoire = (
  <g>
    {[0, 120, 240].map((a) => (
      <g key={a} transform={`rotate(${a} 50 61)`}>
        <path
          d="M50 47.5 A13.5 13.5 0 0 0 38.3 54.3"
          fill="none"
          stroke={NOIR}
          strokeWidth="5"
        />
        <polygon points="34.5,58.8 42.2,55 37,50.2" fill={NOIR} />
      </g>
    ))}
  </g>
);

/** Symbole autoroute : un pont et une chaussée en perspective. */
const symboleAutoroute = (
  <g fill={BLANC}>
    <rect x="18" y="22" width="64" height="9" rx="1.5" />
    <rect x="18" y="22" width="9" height="34" rx="1.5" />
    <rect x="73" y="22" width="9" height="34" rx="1.5" />
    <polygon points="41,82 59,82 55,38 45,38" />
  </g>
);

/* ------------------------------- catalogue -------------------------------- */

export const PANNEAUX: Panneau[] = [
  /* ============================ DANGER (type A) =========================== */
  {
    code: "A1a",
    famille: "danger",
    nom: "Virage à droite",
    sens: "Un virage dangereux vers la droite se présente devant vous.",
    detail:
      "Implanté à 150 m environ hors agglomération, à 50 m en agglomération. Un panonceau peut préciser la distance.",
    piege:
      "C'est un panneau de danger, pas une limitation : il n'impose aucune vitesse chiffrée, c'est à vous de ralentir avant d'y entrer.",
    svg: <TriDanger>{trait("M42 76 V62 Q42 48 56 48", 9)}</TriDanger>,
  },
  {
    code: "A1b",
    famille: "danger",
    nom: "Virage à gauche",
    sens: "Un virage dangereux vers la gauche se présente devant vous.",
    detail:
      "Le freinage se fait AVANT la courbe : on entre lentement et on accélère en sortie.",
    piege:
      "En virage à gauche, la visibilité est masquée par la voie d'en face : on se déporte légèrement à droite, jamais vers l'axe.",
    svg: <TriDanger>{trait("M58 76 V62 Q58 48 44 48", 9)}</TriDanger>,
  },
  {
    code: "A1c",
    famille: "danger",
    nom: "Succession de virages, le premier à droite",
    sens: "Au moins deux virages rapprochés arrivent, le premier tourne à droite.",
    detail:
      "Un panonceau d'étendue (par exemple « sur 3 km ») accompagne souvent le panneau.",
    piege:
      "Sur une section sinueuse, le dépassement est interdit dès que la visibilité est insuffisante, même sans panneau B3.",
    svg: <TriDanger>{trait("M40 76 V68 C40 60 60 60 60 52 V44", 8.5)}</TriDanger>,
  },
  {
    code: "A1d",
    famille: "danger",
    nom: "Succession de virages, le premier à gauche",
    sens: "Au moins deux virages rapprochés arrivent, le premier tourne à gauche.",
    detail: "Même règle qu'en A1c : on adapte l'allure sur toute la section.",
    piege:
      "Deux virages en sens inverse = pas de trajectoire de sécurité continue : on reste à droite de sa voie.",
    svg: <TriDanger>{trait("M60 76 V68 C60 60 40 60 40 52 V44", 8.5)}</TriDanger>,
  },
  {
    code: "A2a",
    famille: "danger",
    nom: "Cassis ou dos d'âne",
    sens: "Une déformation de la chaussée (creux ou bosse) réduit l'adhérence et la visibilité.",
    detail:
      "Danger naturel de la route, non aménagé : ni marquage, ni vitesse imposée.",
    piege:
      "Ne pas le confondre avec le ralentisseur A2b, qui signale un ouvrage construit exprès, généralement limité à 30 km/h.",
    svg: <TriDanger>{trait("M28 70 Q50 42 72 70", 9)}</TriDanger>,
  },
  {
    code: "A2b",
    famille: "danger",
    nom: "Ralentisseur de type dos d'âne",
    sens: "Un ralentisseur aménagé (trapézoïdal ou circulaire) barre la chaussée.",
    detail:
      "Il n'est réglementaire qu'en zone limitée à 30 km/h et hors des voies à grande circulation.",
    piege:
      "Un ralentisseur ne donne aucune priorité : le passage piéton surélevé reste un passage piéton, on cède le passage.",
    svg: <TriDanger>{trait("M28 70 L38 54 H62 L72 70", 9)}</TriDanger>,
  },
  {
    code: "A3",
    famille: "danger",
    nom: "Chaussée rétrécie",
    sens: "La largeur de la chaussée diminue des deux côtés devant vous.",
    detail:
      "Les variantes A3a et A3b annoncent un rétrécissement par la droite ou par la gauche.",
    piege:
      "Aucun ordre de passage n'est donné : si le rétrécissement ne laisse qu'une voie, c'est la courtoisie et la visibilité qui décident, sauf panneau B15 ou C18.",
    svg: (
      <TriDanger>
        {trait("M32 76 L40 46", 8)}
        {trait("M68 76 L60 46", 8)}
      </TriDanger>
    ),
  },
  {
    code: "A4",
    famille: "danger",
    nom: "Chaussée glissante",
    sens: "La chaussée peut être glissante (pluie, verglas, gravillons, boue).",
    detail:
      "Distance de freinage doublée sur sol mouillé : on double aussi la distance de sécurité.",
    piege:
      "Sur sol glissant, on freine en ligne droite avant le virage — freiner et tourner en même temps fait partir la voiture.",
    svg: (
      <TriDanger>
        <Voiture x={35} y={40} s={1.25} />
        {trait("M30 72 C34 66 38 76 42 70", 3)}
        {trait("M58 70 C62 76 66 66 70 72", 3)}
      </TriDanger>
    ),
  },
  {
    code: "A7",
    famille: "danger",
    nom: "Passage à niveau avec barrières",
    sens: "Un passage à niveau muni de barrières ou de demi-barrières est annoncé.",
    detail:
      "Il est précédé de balises J10 (trois, deux puis une barre) à 150, 100 et 50 m.",
    piege:
      "On ne s'engage jamais sans être certain de pouvoir dégager : rester immobilisé sur les rails est la faute éliminatoire type.",
    svg: (
      <TriDanger>
        {trait("M36 74 V46", 5)}
        {trait("M34 52 H68", 6)}
        {trait("M46 55 V63 M56 55 V63 M66 55 V63", 3.5)}
      </TriDanger>
    ),
  },
  {
    code: "A13a",
    famille: "danger",
    nom: "Traversée d'enfants",
    sens: "Endroit fréquenté par des enfants : école, centre de loisirs, arrêt de car.",
    detail: "Souvent couplé à une zone 30 ou à un passage piéton surélevé.",
    piege:
      "Piège classique : A13a = ENFANTS, A13b = passage piétons. Beaucoup les intervertissent le jour de l'examen.",
    svg: (
      <TriDanger>
        <Pieton x={42} y={50} s={0.82} />
        <Pieton x={58} y={54} s={0.62} />
      </TriDanger>
    ),
  },
  {
    code: "A13b",
    famille: "danger",
    nom: "Passage pour piétons",
    sens: "Un passage pour piétons non protégé par des feux est annoncé plus loin.",
    detail:
      "Il annonce le danger ; le passage lui-même est signalé par le carré bleu C20a et le marquage au sol.",
    piege:
      "Le triangle A13b annonce, le carré bleu C20a désigne. Devant un piéton engagé ou manifestant l'intention de traverser, l'arrêt est obligatoire.",
    svg: (
      <TriDanger>
        <Pieton x={48} y={46} s={0.95} />
        <g fill={NOIR}>
          <path d="M32 74 l4 -8 h4 l-4 8 z" />
          <path d="M40 74 l4 -8 h4 l-4 8 z" />
          <path d="M48 74 l4 -8 h4 l-4 8 z" />
          <path d="M56 74 l4 -8 h4 l-4 8 z" />
        </g>
      </TriDanger>
    ),
  },
  {
    code: "A14",
    famille: "danger",
    nom: "Autres dangers",
    sens: "Un danger non repris par les autres panneaux : sa nature est indiquée par un panonceau.",
    detail:
      "Sans panonceau, il signale un danger permanent difficile à représenter (par exemple sortie d'engins).",
    piege:
      "Le panonceau fait partie du panneau : c'est lui qui donne l'information utile, il faut le lire.",
    svg: (
      <TriDanger>
        <rect x="46.4" y="42" width="7.2" height="22" rx="3.6" fill={NOIR} />
        <circle cx="50" cy="71" r="4.3" fill={NOIR} />
      </TriDanger>
    ),
  },
  {
    code: "A15a1",
    famille: "danger",
    nom: "Passage d'animaux domestiques",
    sens: "Risque de traversée de troupeaux ou d'animaux de ferme.",
    detail: "Typique des routes de montagne et des zones d'estive.",
    piege:
      "Devant un troupeau, on s'arrête et on attend : klaxonner disperse les bêtes et crée le danger.",
    svg: (
      <TriDanger>
        <g fill={NOIR}>
          <rect x="34" y="52" width="28" height="12" rx="4" />
          <rect x="60" y="48" width="12" height="9" rx="3" />
          <rect x="36" y="63" width="3.4" height="9" rx="1.4" />
          <rect x="44" y="63" width="3.4" height="9" rx="1.4" />
          <rect x="52" y="63" width="3.4" height="9" rx="1.4" />
          <rect x="58" y="63" width="3.4" height="9" rx="1.4" />
        </g>
        {trait("M34 53 L28 48", 3)}
        {trait("M62 48 L60 43 M70 48 L72 43", 3)}
      </TriDanger>
    ),
  },
  {
    code: "A15b",
    famille: "danger",
    nom: "Passage d'animaux sauvages",
    sens: "Risque de traversée de gibier (cerfs, sangliers) sur la section.",
    detail:
      "Danger maximal à l'aube et au crépuscule, et surtout en automne (période du brame et des battues).",
    piege:
      "Un animal en cache souvent un autre : après le premier passage, on garde le pied levé au lieu de réaccélérer.",
    svg: (
      <TriDanger>
        <g fill={NOIR}>
          <rect x="34" y="56" width="26" height="10" rx="4" />
          <rect x="36" y="65" width="3.2" height="8" rx="1.3" />
          <rect x="43" y="65" width="3.2" height="8" rx="1.3" />
          <rect x="50" y="65" width="3.2" height="8" rx="1.3" />
          <rect x="56" y="65" width="3.2" height="8" rx="1.3" />
        </g>
        {trait("M58 58 L66 48", 4.5)}
        {trait("M66 48 L62 40 M66 48 L71 41 M64 44 L59 43 M69 44 L73 44", 2.6)}
      </TriDanger>
    ),
  },
  {
    code: "A16",
    famille: "danger",
    nom: "Descente dangereuse",
    sens: "Une forte pente descendante commence ; le pourcentage est inscrit sur le panneau.",
    detail:
      "En descente, on utilise le frein moteur en rétrogradant : le frein seul chauffe et perd son efficacité.",
    piege:
      "En cas de croisement difficile dans une pente étroite, c'est au véhicule qui DESCEND de reculer ou de s'effacer.",
    svg: (
      <TriDanger>
        <path d="M24 48 L76 74 L24 74 Z" fill={NOIR} />
        <text
          x="46"
          y="69"
          textAnchor="middle"
          fontFamily={POLICE}
          fontSize="11"
          fontWeight="700"
          fill={BLANC}
        >
          10 %
        </text>
      </TriDanger>
    ),
  },
  {
    code: "A17",
    famille: "danger",
    nom: "Feux tricolores",
    sens: "Une intersection réglée par des feux tricolores est annoncée.",
    detail:
      "Placé là où les feux se voient tard : sortie de virage, dos d'âne, entrée d'agglomération.",
    piege:
      "Feu orange = arrêt obligatoire, sauf si l'arrêt ne peut plus se faire en sécurité. Ce n'est pas une invitation à passer.",
    svg: (
      <TriDanger>
        <rect x="41" y="38" width="18" height="38" rx="4" fill={NOIR} />
        <circle cx="50" cy="47" r="4.6" fill={ROUGE} />
        <circle cx="50" cy="57" r="4.6" fill="#FFB020" />
        <circle cx="50" cy="67" r="4.6" fill={VERT} />
      </TriDanger>
    ),
  },
  {
    code: "A18",
    famille: "danger",
    nom: "Circulation dans les deux sens",
    sens: "Vous quittez une chaussée à sens unique : la circulation redevient à double sens.",
    detail:
      "Fréquent en sortie d'autoroute, après des travaux ou en fin de section à chaussées séparées.",
    piege:
      "On reprend immédiatement sa droite et on renonce à tout dépassement : un véhicule peut arriver en face.",
    svg: (
      <TriDanger>
        <path d={flecheHaut(41, 42, 76, 4, 11)} fill={NOIR} />
        <path d={flecheBas(59, 42, 76, 4, 11)} fill={NOIR} />
      </TriDanger>
    ),
  },
  {
    code: "A21",
    famille: "danger",
    nom: "Débouché de cyclistes",
    sens: "Des cyclistes peuvent déboucher d'une piste cyclable sur votre droite ou votre gauche.",
    detail:
      "En doublant un cycliste, on laisse 1 m en ville et 1,50 m hors agglomération.",
    piege:
      "Un cycliste sur une piste qui se termine reste prioritaire s'il circule sur la chaussée : on n'oblige jamais à se rabattre.",
    svg: (
      <TriDanger>
        <Velo x={50} y={58} s={1.15} />
      </TriDanger>
    ),
  },
  {
    code: "A24",
    famille: "danger",
    nom: "Vent latéral",
    sens: "Section exposée à des vents latéraux violents (viaduc, plateau, sortie de tunnel).",
    detail:
      "La manche à air pointe dans le sens du vent : elle indique aussi sa force en temps réel.",
    piege:
      "Le coup de vent frappe à la sortie de l'abri (fin de talus, de tunnel, dépassement d'un poids lourd) : on tient le volant à deux mains et on ralentit.",
    svg: (
      <TriDanger>
        {trait("M36 44 V76", 4.5)}
        <path d="M38 47 L70 43 L70 53 L38 58 Z" fill={NOIR} />
        <path d="M52 45.5 V55.2 M60 44.5 V54.2" stroke={BLANC} strokeWidth="2.4" />
      </TriDanger>
    ),
  },

  /* =========================== PRIORITÉ (type AB) ========================= */
  {
    code: "AB1",
    famille: "priorite",
    nom: "Priorité à droite",
    sens: "Intersection où vous devez céder le passage aux véhicules venant de votre droite.",
    detail:
      "C'est la règle par défaut en l'absence de tout marquage ; ce panneau ne fait que la rappeler.",
    piege:
      "La priorité à droite s'applique aussi quand la route de droite est plus petite — sauf si elle sort d'un chemin de terre, d'un parking ou d'une propriété privée.",
    svg: (
      <TriDanger>
        <rect x="46" y="42" width="8" height="34" fill={NOIR} />
        <rect x="33" y="58" width="34" height="8" fill={NOIR} />
      </TriDanger>
    ),
  },
  {
    code: "AB2",
    famille: "priorite",
    nom: "Priorité ponctuelle",
    sens: "Vous êtes prioritaire, mais uniquement à la prochaine intersection.",
    detail:
      "La flèche épaisse représente votre route, la barre la route transversale non prioritaire.",
    piege:
      "Après cette intersection, la priorité à droite redevient la règle : la priorité n'est pas donnée pour tout l'itinéraire, contrairement à AB6.",
    svg: (
      <TriDanger>
        <path d={flecheHaut(50, 40, 78, 5, 13)} fill={NOIR} />
        <rect x="33" y="63" width="34" height="6" fill={NOIR} />
      </TriDanger>
    ),
  },
  {
    code: "AB3a",
    famille: "priorite",
    nom: "Cédez le passage",
    sens: "Vous devez céder le passage aux véhicules circulant sur la route abordée, sans obligation de vous arrêter.",
    detail:
      "Le marquage au sol associé est une ligne discontinue à larges traits (ligne d'effet du cédez-le-passage).",
    piege:
      "Céder le passage n'est pas s'arrêter : si la voie est libre, on continue. Mais s'arrêter au milieu de l'intersection est une faute.",
    svg: <TriInverse />,
  },
  {
    code: "AB3b",
    famille: "priorite",
    nom: "Signal avancé de cédez-le-passage",
    sens: "Un « cédez le passage » se trouve à environ 150 m.",
    detail:
      "Hors agglomération, ce signal avancé prépare le conducteur à une intersection peu visible.",
    piege:
      "Ce n'est pas encore l'ordre : rien ne se joue ici, l'obligation s'applique au panneau AB3a lui-même.",
    svg: (
      <TriDanger>
        <path
          d="M50 74 L36.5 50 H63.5 Z"
          fill="none"
          stroke={ROUGE}
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </TriDanger>
    ),
  },
  {
    code: "AB4",
    famille: "priorite",
    nom: "STOP",
    sens: "Arrêt absolu obligatoire à la ligne, puis céder le passage à tous les véhicules.",
    detail:
      "Seul panneau octogonal du code : il reste identifiable même de dos ou couvert de neige.",
    piege:
      "L'arrêt se fait à la LIGNE d'arrêt, roues immobilisées. S'arrêter après la ligne, ou marquer un simple ralenti, est éliminatoire.",
    svg: <Octogone />,
  },
  {
    code: "AB5",
    famille: "priorite",
    nom: "Signal avancé de STOP",
    sens: "Un STOP se trouve à environ 150 m.",
    detail:
      "Le panonceau de distance sous le panneau précise la distance réelle.",
    piege:
      "Il annonce, il n'ordonne pas : l'arrêt se fait au panneau AB4, pas ici.",
    svg: (
      <TriDanger>
        <g transform="translate(50 60) scale(0.28) translate(-50 -50)">
          <polygon points={OCTO} fill={ROUGE} />
          <polygon
            points={OCTO_INT}
            fill="none"
            stroke={BLANC}
            strokeWidth="4"
          />
          <text
            x="50"
            y="52"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily={POLICE}
            fontSize="27"
            fontWeight="700"
            fill={BLANC}
          >
            STOP
          </text>
        </g>
      </TriDanger>
    ),
  },
  {
    code: "AB6",
    famille: "priorite",
    nom: "Route à caractère prioritaire",
    sens: "Vous circulez sur une route prioritaire : la priorité vous est donnée à toutes les intersections suivantes.",
    detail:
      "Il est rappelé après chaque intersection importante, jusqu'au panneau AB7.",
    piege:
      "Le losange ne dispense ni du céder-le-passage aux véhicules déjà engagés, ni des feux, ni des priorités aux piétons et aux trams.",
    svg: <Losange />,
  },
  {
    code: "AB7",
    famille: "priorite",
    nom: "Fin du caractère prioritaire d'une route",
    sens: "Votre route cesse d'être prioritaire.",
    detail:
      "Il est généralement suivi d'un panneau AB1, AB3a ou AB4 à l'intersection suivante.",
    piege:
      "Dès ce panneau, la priorité à droite s'applique à nouveau — même si la route reste large et rapide.",
    svg: <Losange fin />,
  },
  {
    code: "AB25",
    famille: "priorite",
    nom: "Carrefour à sens giratoire",
    sens: "Un giratoire est annoncé : les usagers déjà engagés dans l'anneau sont prioritaires.",
    detail:
      "Il est presque toujours accompagné d'un AB3a à l'entrée de l'anneau.",
    piege:
      "Sans ce panneau (et sans AB3a), il s'agit d'un simple rond-point à priorité à droite : ce sont alors les entrants qui sont prioritaires.",
    svg: <TriDanger>{anneauGiratoire}</TriDanger>,
  },

  /* ========================= INTERDICTION (type B) ======================== */
  {
    code: "B0",
    famille: "interdiction",
    nom: "Circulation interdite dans les deux sens",
    sens: "La voie est interdite à tous les véhicules, dans les deux sens.",
    detail:
      "Des panonceaux peuvent prévoir des exceptions (« sauf riverains », « sauf livraisons »).",
    piege:
      "Le disque blanc à listel rouge interdit dans les DEUX sens ; le sens interdit B1 n'interdit que le vôtre.",
    svg: <DisqueInter />,
  },
  {
    code: "B1",
    famille: "interdiction",
    nom: "Sens interdit",
    sens: "L'accès est interdit à tous les véhicules dans votre sens de circulation.",
    detail: "De l'autre côté, la voie est autorisée : c'est un sens unique.",
    piege:
      "Faire quelques mètres en marche arrière dans un sens interdit reste une circulation à contresens : c'est éliminatoire.",
    svg: (
      <Sv>
        <circle cx="50" cy="50" r="47" fill={ROUGE} />
        <rect x="17" y="43" width="66" height="14" rx="2" fill={BLANC} />
      </Sv>
    ),
  },
  {
    code: "B2a",
    famille: "interdiction",
    nom: "Interdiction de tourner à gauche",
    sens: "Interdiction de tourner à gauche à la prochaine intersection.",
    detail: "L'interdiction ne vaut que pour cette intersection-là.",
    piege:
      "Interdire de tourner à gauche interdit aussi le demi-tour à cette intersection.",
    svg: (
      <DisqueInter>
        {trait("M56 74 V54 H40", 8)}
        <polygon points="28,54 39,47 39,61" fill={NOIR} />
      </DisqueInter>
    ),
  },
  {
    code: "B2b",
    famille: "interdiction",
    nom: "Interdiction de tourner à droite",
    sens: "Interdiction de tourner à droite à la prochaine intersection.",
    detail:
      "Souvent posé pour empêcher un cisaillement dangereux ou l'accès à une voie réservée.",
    piege:
      "Le panneau se trouve AVANT l'intersection concernée : il ne s'applique pas aux entrées suivantes.",
    svg: (
      <DisqueInter>
        {trait("M44 74 V54 H60", 8)}
        <polygon points="72,54 61,47 61,61" fill={NOIR} />
      </DisqueInter>
    ),
  },
  {
    code: "B2c",
    famille: "interdiction",
    nom: "Interdiction de faire demi-tour",
    sens: "Demi-tour interdit sur la route suivie jusqu'à la prochaine intersection.",
    detail:
      "Fréquent sur les axes rapides urbains et devant les terre-pleins franchissables.",
    piege:
      "L'interdiction tombe à l'intersection suivante ; en revanche, sur autoroute, le demi-tour est interdit partout, sans aucun panneau.",
    svg: (
      <DisqueInter>
        {trait("M60 72 V56 A9 9 0 0 0 42 56 V62", 8)}
        <polygon points="42,76 34,62 50,62" fill={NOIR} />
      </DisqueInter>
    ),
  },
  {
    code: "B3",
    famille: "interdiction",
    nom: "Interdiction de dépasser",
    sens: "Interdiction de dépasser tous les véhicules à moteur, sauf les deux-roues sans side-car.",
    detail:
      "Valable jusqu'à la prochaine intersection ou jusqu'au panneau B34.",
    piege:
      "Dépasser un cyclomoteur ou une moto reste autorisé — mais uniquement si la manœuvre est sûre et sans franchir une ligne continue.",
    svg: (
      <DisqueInter>
        <Voiture x={25} y={40} s={0.95} c={ROUGE} />
        <Voiture x={51} y={40} s={0.95} c={NOIR} />
      </DisqueInter>
    ),
  },
  {
    code: "B3a",
    famille: "interdiction",
    nom: "Interdiction de dépasser pour les poids lourds",
    sens: "Interdiction de dépasser pour les véhicules de plus de 3,5 t de PTAC.",
    detail:
      "Le camion dessiné en rouge est le véhicule visé par l'interdiction.",
    piege:
      "Les voitures ne sont pas concernées : ce panneau ne s'adresse qu'aux poids lourds, et il ne les empêche pas de doubler un vélo.",
    svg: (
      <DisqueInter>
        <Camion x={25} y={42} s={0.95} c={ROUGE} />
        <Voiture x={51} y={41} s={0.95} c={NOIR} />
      </DisqueInter>
    ),
  },
  {
    code: "B6a1",
    famille: "interdiction",
    nom: "Stationnement interdit",
    sens: "Stationnement interdit du côté du panneau, l'arrêt restant autorisé.",
    detail:
      "S'applique jusqu'à la prochaine intersection, sauf indication contraire d'un panonceau.",
    piege:
      "Arrêt = conducteur au volant, véhicule immobilisé le temps de faire monter ou descendre quelqu'un. Dès qu'on quitte le véhicule, c'est du stationnement.",
    svg: (
      <DisqueInter fond={BLEU}>
        <path
          d="M74 26 L26 74"
          stroke={ROUGE}
          strokeWidth="8"
          strokeLinecap="round"
        />
      </DisqueInter>
    ),
  },
  {
    code: "B6d",
    famille: "interdiction",
    nom: "Arrêt et stationnement interdits",
    sens: "Interdiction de s'arrêter ET de stationner du côté du panneau.",
    detail: "La double barre en croix marque la double interdiction.",
    piege:
      "Même quelques secondes, feux de détresse allumés, l'arrêt est interdit : seul un arrêt imposé par la circulation reste toléré.",
    svg: (
      <DisqueInter fond={BLEU}>
        <path
          d="M74 26 L26 74 M26 26 L74 74"
          stroke={ROUGE}
          strokeWidth="8"
          strokeLinecap="round"
        />
      </DisqueInter>
    ),
  },
  {
    code: "B7b",
    famille: "interdiction",
    nom: "Accès interdit à tous les véhicules à moteur",
    sens: "Voitures, motos et cyclomoteurs ne peuvent pas emprunter cette voie.",
    detail: "Les vélos et les piétons, eux, restent autorisés.",
    piege:
      "Un cyclomoteur reste un véhicule à moteur, même moteur coupé : il faut alors le pousser à pied pour passer.",
    svg: (
      <DisqueInter>
        <Voiture x={24} y={42} s={0.85} />
        <g stroke={NOIR} fill="none" strokeWidth="3.4" strokeLinecap="round">
          <circle cx="56" cy="62" r="6" />
          <circle cx="73" cy="62" r="6" />
          <path d="M56 62 L64 52 H70" strokeWidth="3" />
          <path d="M64 52 L73 62" strokeWidth="3" />
          <path d="M67 49 H74" strokeWidth="2.6" />
        </g>
      </DisqueInter>
    ),
  },
  {
    code: "B9b",
    famille: "interdiction",
    nom: "Accès interdit aux cycles",
    sens: "La circulation des vélos est interdite sur cette voie.",
    detail:
      "Typique des tunnels, des voies rapides et de certaines voies de bus.",
    piege:
      "Le cycliste peut toujours passer en descendant de vélo : il devient alors piéton.",
    svg: (
      <DisqueInter>
        <Velo x={50} y={50} s={1.35} />
      </DisqueInter>
    ),
  },
  {
    code: "B11",
    famille: "interdiction",
    nom: "Largeur limitée",
    sens: "Accès interdit aux véhicules dont la largeur, chargement compris, dépasse la valeur indiquée.",
    detail: "On mesure le véhicule chargé, rétroviseurs inclus si fixes.",
    piege:
      "C'est la largeur RÉELLE avec le chargement (bagages, vélos, ridelles) qui compte, pas celle de la carte grise.",
    svg: (
      <DisqueInter>
        <g fill={NOIR}>
          <rect x="26" y="34" width="5" height="20" rx="1.5" />
          <rect x="69" y="34" width="5" height="20" rx="1.5" />
          <path d={flecheDroite(44, 34, 66, 3, 8)} />
          <path
            d={flecheDroite(44, 34, 66, 3, 8)}
            transform="rotate(180 50 44)"
          />
        </g>
        {chiffre("2,50 m", 15, NOIR, 66)}
      </DisqueInter>
    ),
  },
  {
    code: "B12",
    famille: "interdiction",
    nom: "Hauteur limitée",
    sens: "Accès interdit aux véhicules dont la hauteur, chargement compris, dépasse la valeur indiquée.",
    detail:
      "Panneau des ponts, tunnels et parkings couverts. La hauteur affichée intègre déjà une marge de sécurité.",
    piege:
      "Coffre de toit, vélos sur la galerie ou benne relevée : la hauteur du véhicule change, celle du pont non.",
    svg: (
      <DisqueInter>
        <g fill={NOIR}>
          <rect x="24" y="28" width="52" height="5" rx="1.5" />
          <rect x="24" y="67" width="52" height="5" rx="1.5" />
          <path d={flecheHaut(31, 35, 65, 2.6, 8)} />
          <path d={flecheBas(31, 35, 65, 2.6, 8)} />
        </g>
        {chiffre("3,5 m", 15, NOIR, 50, 58)}
      </DisqueInter>
    ),
  },
  {
    code: "B13",
    famille: "interdiction",
    nom: "Poids total limité",
    sens: "Accès interdit aux véhicules dont le poids total autorisé en charge dépasse la valeur indiquée.",
    detail:
      "On raisonne en PTAC (véhicule + chargement + passagers), pas en poids à vide.",
    piege:
      "B13 = poids TOTAL du véhicule ; B13a = poids par ESSIEU. Deux panneaux, deux calculs différents.",
    svg: <DisqueInter>{chiffre("3,5 t", 26)}</DisqueInter>,
  },
  {
    code: "B14",
    famille: "interdiction",
    nom: "Limitation de vitesse à 30 km/h",
    sens: "Vitesse maximale autorisée : 30 km/h.",
    detail:
      "Typique des abords d'école et des cœurs de ville ; s'applique jusqu'au prochain panneau de vitesse ou à la sortie d'agglomération.",
    piege:
      "C'est un maximum par temps sec et visibilité normale : pluie, brouillard ou jeune permis peuvent imposer moins.",
    svg: <DisqueInter>{chiffre("30", 42)}</DisqueInter>,
  },
  {
    code: "B14",
    famille: "interdiction",
    nom: "Limitation de vitesse à 50 km/h",
    sens: "Vitesse maximale autorisée : 50 km/h.",
    detail:
      "C'est la vitesse par défaut en agglomération, même sans aucun panneau.",
    piege:
      "En agglomération, le panneau d'entrée de ville (EB10) suffit à imposer 50 : ne pas attendre un disque rouge.",
    svg: <DisqueInter>{chiffre("50", 42)}</DisqueInter>,
  },
  {
    code: "B14",
    famille: "interdiction",
    nom: "Limitation de vitesse à 70 km/h",
    sens: "Vitesse maximale autorisée : 70 km/h.",
    detail:
      "Fréquent sur les rocades, les traversées de zones d'activité et les sections accidentogènes.",
    piege:
      "La limitation reste valable après une intersection tant qu'aucun autre panneau de vitesse n'apparaît.",
    svg: <DisqueInter>{chiffre("70", 42)}</DisqueInter>,
  },
  {
    code: "B14",
    famille: "interdiction",
    nom: "Limitation de vitesse à 90 km/h",
    sens: "Vitesse maximale autorisée : 90 km/h.",
    detail:
      "Sur les routes à double sens sans séparateur, la limite générale est de 80 km/h ; certains départements sont repassés à 90 avec ce panneau.",
    piege:
      "Sans panneau, une route bidirectionnelle hors agglomération est à 80 km/h : le 90 doit être explicitement affiché.",
    svg: <DisqueInter>{chiffre("90", 42)}</DisqueInter>,
  },
  {
    code: "B14",
    famille: "interdiction",
    nom: "Limitation de vitesse à 110 km/h",
    sens: "Vitesse maximale autorisée : 110 km/h.",
    detail:
      "Vitesse des routes à chaussées séparées, et de l'autoroute par temps de pluie.",
    piege:
      "Par temps de pluie, l'autoroute passe à 110 et la route à accès réglementé à 100 : le panneau ne change pas, la règle si.",
    svg: <DisqueInter>{chiffre("110", 34)}</DisqueInter>,
  },
  {
    code: "B14",
    famille: "interdiction",
    nom: "Limitation de vitesse à 130 km/h",
    sens: "Vitesse maximale autorisée : 130 km/h.",
    detail: "Vitesse maximale sur autoroute par temps sec.",
    piege:
      "Pendant les deux premières années de permis (un an après conduite accompagnée), la limite reste 110 km/h sur autoroute.",
    svg: <DisqueInter>{chiffre("130", 34)}</DisqueInter>,
  },
  {
    code: "B31",
    famille: "interdiction",
    nom: "Fin de toutes les interdictions",
    sens: "Toutes les interdictions signalées précédemment prennent fin.",
    detail:
      "Il lève d'un coup la vitesse, l'interdiction de dépasser, l'usage du klaxon, etc.",
    piege:
      "Il ne rétablit pas la vitesse maximale « libre » : on retombe sur la limite générale de la route (80, 110 ou 130).",
    svg: <DisqueFin>{barresFin}</DisqueFin>,
  },
  {
    code: "B33",
    famille: "interdiction",
    nom: "Fin de limitation de vitesse",
    sens: "La limitation de vitesse indiquée sur le panneau prend fin.",
    detail:
      "Seule cette limitation est levée : les autres interdictions restent en vigueur.",
    piege:
      "Fin de 70 ne veut pas dire « accélérez » : on reprend la vitesse maximale autorisée pour ce type de route.",
    svg: (
      <DisqueFin>
        {chiffre("70", 42, GRIS)}
        {barresFin}
      </DisqueFin>
    ),
  },
  {
    code: "B34",
    famille: "interdiction",
    nom: "Fin d'interdiction de dépasser",
    sens: "L'interdiction de dépasser signalée par le panneau B3 prend fin.",
    detail: "Le pictogramme reprend celui du B3, mais en gris et barré.",
    piege:
      "Le dépassement redevient possible, pas automatiquement sûr : ligne continue, visibilité et signalisation temporaire priment.",
    svg: (
      <DisqueFin>
        <Voiture x={25} y={40} s={0.95} c={GRIS} />
        <Voiture x={51} y={40} s={0.95} c={GRIS} />
        {barresFin}
      </DisqueFin>
    ),
  },

  /* ========================== OBLIGATION (type B) ========================= */
  {
    code: "B21b",
    famille: "obligation",
    nom: "Direction obligatoire : tout droit",
    sens: "À la prochaine intersection, vous devez continuer tout droit.",
    detail: "Placé avant l'intersection concernée, il vaut pour elle seule.",
    piege:
      "Rond bleu = obligation, rond rouge = interdiction. Une flèche blanche sur bleu ordonne, elle n'autorise pas simplement.",
    svg: (
      <DisqueOblig>
        <path d={flecheHaut(50, 24, 76, 6, 17)} fill={BLANC} />
      </DisqueOblig>
    ),
  },
  {
    code: "B21c1",
    famille: "obligation",
    nom: "Direction obligatoire : à droite",
    sens: "À la prochaine intersection, vous devez tourner à droite.",
    detail:
      "Il organise la circulation d'un quartier ou l'accès à une voie à sens unique.",
    piege:
      "Obligation de tourner à droite = interdiction d'aller tout droit, de tourner à gauche et de faire demi-tour.",
    svg: (
      <DisqueOblig>
        {trait("M44 74 V52 H58", 9, BLANC)}
        <polygon points="74,52 60,43 60,61" fill={BLANC} />
      </DisqueOblig>
    ),
  },
  {
    code: "B21c2",
    famille: "obligation",
    nom: "Direction obligatoire : à gauche",
    sens: "À la prochaine intersection, vous devez tourner à gauche.",
    detail: "L'obligation ne concerne que l'intersection qui suit le panneau.",
    piege:
      "Tourner à gauche impose de céder le passage aux véhicules venant en face : l'obligation ne donne aucune priorité.",
    svg: (
      <DisqueOblig>
        {trait("M56 74 V52 H42", 9, BLANC)}
        <polygon points="26,52 40,43 40,61" fill={BLANC} />
      </DisqueOblig>
    ),
  },
  {
    code: "B21d1",
    famille: "obligation",
    nom: "Directions obligatoires : tout droit ou à droite",
    sens: "À la prochaine intersection, vous devez aller tout droit ou tourner à droite.",
    detail: "Deux choix seulement : gauche et demi-tour sont exclus.",
    piege:
      "Le panneau à deux flèches laisse le choix, mais impose toujours d'annoncer sa manœuvre au clignotant.",
    svg: (
      <DisqueOblig>
        {trait("M42 76 V44", 8, BLANC)}
        <polygon points="42,24 31,42 53,42" fill={BLANC} />
        {trait("M42 62 H60", 8, BLANC)}
        <polygon points="76,62 62,53 62,71" fill={BLANC} />
      </DisqueOblig>
    ),
  },
  {
    code: "B21a1",
    famille: "obligation",
    nom: "Contournement obligatoire par la droite",
    sens: "Vous devez contourner l'obstacle ou l'îlot en passant à sa droite.",
    detail:
      "Il est posé sur l'obstacle lui-même : îlot central, terre-plein, zone de chantier.",
    piege:
      "Passer du mauvais côté d'un îlot revient à circuler à contresens : c'est éliminatoire, même sur quelques mètres.",
    svg: (
      <DisqueOblig>
        {trait("M32 70 L62 40", 10, BLANC, "butt")}
        <polygon points="74,26 54,32 68,46" fill={BLANC} />
      </DisqueOblig>
    ),
  },
  {
    code: "B21a2",
    famille: "obligation",
    nom: "Contournement obligatoire par la gauche",
    sens: "Vous devez contourner l'obstacle ou l'îlot en passant à sa gauche.",
    detail:
      "Fréquent en travaux, quand la circulation est basculée sur l'autre chaussée.",
    piege:
      "En signalisation temporaire, ce panneau prime sur le marquage au sol permanent, même si les lignes disent l'inverse.",
    svg: (
      <DisqueOblig>
        {trait("M68 70 L38 40", 10, BLANC, "butt")}
        <polygon points="26,26 46,32 32,46" fill={BLANC} />
      </DisqueOblig>
    ),
  },
  {
    code: "B22a",
    famille: "obligation",
    nom: "Piste ou bande cyclable obligatoire",
    sens: "Les cyclistes doivent emprunter cette piste ou cette bande cyclable.",
    detail:
      "Sans ce panneau, une piste signalée par le panneau carré C113 reste seulement conseillée.",
    piege:
      "Rond bleu = piste OBLIGATOIRE pour les vélos ; carré bleu = piste conseillée. Et pour l'automobiliste, les deux interdisent de rouler ou de stationner dessus.",
    svg: (
      <DisqueOblig>
        <Velo x={50} y={50} s={1.5} c={BLANC} />
      </DisqueOblig>
    ),
  },
  {
    code: "B22b",
    famille: "obligation",
    nom: "Chemin obligatoire pour piétons",
    sens: "Les piétons doivent emprunter ce chemin ; les autres usagers n'y ont pas accès.",
    detail: "Il prend fin au panneau B41.",
    piege:
      "Un chemin réservé aux piétons n'est jamais une place de stationnement, même « deux minutes ».",
    svg: (
      <DisqueOblig>
        <Pieton x={46} y={36} s={1.5} c={BLANC} />
      </DisqueOblig>
    ),
  },
  {
    code: "B25",
    famille: "obligation",
    nom: "Vitesse minimale obligatoire",
    sens: "Vous devez rouler au moins à la vitesse indiquée.",
    detail:
      "On le trouve dans les tunnels et sur certaines voies rapides pour éviter les bouchons.",
    piege:
      "Chiffre blanc sur fond BLEU = minimum imposé ; chiffre noir cerclé de rouge = maximum. Confusion très fréquente.",
    svg: <DisqueOblig>{chiffre("30", 42, BLANC)}</DisqueOblig>,
  },
  {
    code: "B26",
    famille: "obligation",
    nom: "Chaînes à neige obligatoires",
    sens: "Les chaînes sont obligatoires sur au moins deux roues motrices.",
    detail:
      "L'obligation dure jusqu'au panneau B44 (fin d'obligation des chaînes).",
    piege:
      "Les pneus hiver ne remplacent les chaînes que si un panonceau l'autorise expressément.",
    svg: (
      <DisqueOblig>
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke={BLANC}
          strokeWidth="9"
        />
        <circle cx="50" cy="50" r="5" fill={BLANC} />
        <g
          fill="none"
          stroke={BLANC}
          strokeWidth="2.6"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <path d="M50 24 L44 30 L50 36 L56 42 L50 48" />
          <path d="M50 76 L56 70 L50 64 L44 58 L50 52" />
          <path d="M26 44 L32 50 L26 56" />
          <path d="M74 44 L68 50 L74 56" />
        </g>
      </DisqueOblig>
    ),
  },

  /* ========================== INDICATION (type C) ========================= */
  {
    code: "C20a",
    famille: "indication",
    nom: "Passage pour piétons",
    sens: "Indique l'emplacement exact d'un passage pour piétons.",
    detail:
      "Le marquage au sol (bandes blanches) et ce panneau désignent la même zone.",
    piege:
      "Interdiction de s'arrêter, de stationner et de dépasser sur un passage piéton et dans les 5 m qui le précèdent.",
    svg: (
      <CarreIndic>
        <path d="M50 20 L84 82 H16 Z" fill={BLANC} />
        <Pieton x={48} y={48} s={0.85} />
        <g fill={NOIR}>
          <path d="M34 78 l4 -8 h4 l-4 8 z" />
          <path d="M42 78 l4 -8 h4 l-4 8 z" />
          <path d="M50 78 l4 -8 h4 l-4 8 z" />
          <path d="M58 78 l4 -8 h4 l-4 8 z" />
        </g>
      </CarreIndic>
    ),
  },
  {
    code: "C1a",
    famille: "indication",
    nom: "Lieu aménagé pour le stationnement",
    sens: "Signale un emplacement ou un parc de stationnement autorisé.",
    detail:
      "Un panonceau peut réserver les places (personnes handicapées, livraisons, durée limitée).",
    piege:
      "Le panneau autorise le stationnement, il ne dispense pas du disque ni de l'horodateur quand un panonceau le prévoit.",
    svg: <CarreIndic>{chiffre("P", 62, BLANC, 52)}</CarreIndic>,
  },
  {
    code: "C12",
    famille: "indication",
    nom: "Circulation à sens unique",
    sens: "La voie abordée est à sens unique dans la direction de la flèche.",
    detail:
      "Le panneau B1 (sens interdit) est posé à l'autre extrémité de la même voie.",
    piege:
      "Dans une rue à sens unique, le stationnement peut être autorisé des deux côtés — mais le dépassement par la droite reste soumis aux règles habituelles.",
    svg: (
      <Rect>
        <path d={flecheDroite(50, 20, 82, 6, 16)} fill={BLANC} />
      </Rect>
    ),
  },
  {
    code: "C13a",
    famille: "indication",
    nom: "Impasse (voie sans issue)",
    sens: "La voie abordée ne débouche sur aucune autre : il faudra revenir en arrière.",
    detail:
      "Les variantes C13c et C13d signalent une issue pour les piétons ou les cyclistes.",
    piege:
      "Une impasse reste une voie ouverte à la circulation publique : la priorité à droite y joue normalement.",
    svg: (
      <CarreIndic>
        <rect x="45" y="34" width="10" height="46" fill={BLANC} />
        <rect x="24" y="24" width="52" height="11" fill={ROUGE} />
      </CarreIndic>
    ),
  },
  {
    code: "C18",
    famille: "indication",
    nom: "Priorité par rapport à la circulation venant en sens inverse",
    sens: "Dans le rétrécissement qui suit, vous êtes prioritaire sur les véhicules venant en face.",
    detail: "La flèche blanche est la vôtre, la flèche rouge celle d'en face.",
    piege:
      "Son symétrique B15 (rond à listel rouge) impose l'inverse : c'est vous qui cédez. Vérifiez toujours la couleur de VOTRE flèche.",
    svg: (
      <CarreIndic>
        <path d={flecheHaut(60, 20, 82, 6, 16)} fill={BLANC} />
        <path d={flecheBas(33, 30, 74, 4, 11)} fill={ROUGE} />
      </CarreIndic>
    ),
  },
  {
    code: "C27",
    famille: "indication",
    nom: "Surélévation de chaussée",
    sens: "Signale l'emplacement même d'un ralentisseur ou d'un plateau surélevé.",
    detail:
      "Complète le triangle A2b qui, lui, annonce le ralentisseur à l'avance.",
    piege:
      "Le triangle annonce, le carré bleu désigne l'ouvrage : ils ne se remplacent pas, ils se suivent.",
    svg: (
      <CarreIndic>
        {trait("M20 62 L36 44 H64 L80 62", 8, BLANC)}
        {trait("M16 74 H84", 5, BLANC)}
      </CarreIndic>
    ),
  },
  {
    code: "C207",
    famille: "indication",
    nom: "Début d'autoroute",
    sens: "À partir de ce panneau s'appliquent toutes les règles propres à l'autoroute.",
    detail:
      "130 km/h par temps sec, 110 sous la pluie, bande d'arrêt d'urgence réservée aux urgences.",
    piege:
      "Sur autoroute : ni piétons, ni vélos, ni demi-tour, ni marche arrière, ni arrêt sur la BAU pour se reposer.",
    svg: <CarreIndic>{symboleAutoroute}</CarreIndic>,
  },
  {
    code: "C208",
    famille: "indication",
    nom: "Fin d'autoroute",
    sens: "Les règles spécifiques à l'autoroute cessent de s'appliquer.",
    detail:
      "La vitesse retombe à celle de la route abordée : souvent 110, 90 ou 80 km/h.",
    piege:
      "Fin d'autoroute veut aussi dire retour possible des piétons, des vélos et des intersections : on lève le pied tout de suite.",
    svg: (
      <CarreIndic>
        {symboleAutoroute}
        <path
          d="M20 82 L80 20"
          stroke={ROUGE}
          strokeWidth="7"
          strokeLinecap="round"
        />
      </CarreIndic>
    ),
  },
  {
    code: "C107",
    famille: "indication",
    nom: "Route à accès réglementé",
    sens: "Voie rapide réservée aux véhicules à moteur, sans les règles complètes de l'autoroute.",
    detail:
      "Vitesse habituelle : 110 km/h sur chaussées séparées, 100 par temps de pluie.",
    piege:
      "Elle est interdite aux piétons, vélos et cyclomoteurs, mais elle peut comporter des intersections et des feux : la vigilance reste maximale.",
    svg: (
      <CarreIndic>
        <Voiture x={26} y={34} s={2} c={BLANC} />
      </CarreIndic>
    ),
  },
  {
    code: "C108",
    famille: "indication",
    nom: "Fin de route à accès réglementé",
    sens: "La section à accès réglementé se termine.",
    detail: "On retrouve une route ordinaire, ouverte à tous les usagers.",
    piege:
      "Piétons, cyclistes et engins agricoles redeviennent possibles : on adapte la vitesse avant de les découvrir.",
    svg: (
      <CarreIndic>
        <Voiture x={26} y={34} s={2} c={BLANC} />
        <path
          d="M20 82 L80 20"
          stroke={ROUGE}
          strokeWidth="7"
          strokeLinecap="round"
        />
      </CarreIndic>
    ),
  },
  {
    code: "C115",
    famille: "indication",
    nom: "Voie verte",
    sens: "Voie réservée aux piétons, aux cyclistes et aux véhicules non motorisés.",
    detail: "Elle prend fin au panneau C116.",
    piege:
      "Aucun véhicule à moteur n'y circule, sauf riverains et services autorisés : la traverser en voiture est une infraction.",
    svg: (
      <CarreIndic>
        <Pieton x={30} y={36} s={1.15} c={BLANC} />
        <Velo x={64} y={58} s={1.15} c={BLANC} />
      </CarreIndic>
    ),
  },
  {
    code: "B30",
    famille: "indication",
    nom: "Entrée de zone 30",
    sens: "Dans toute la zone qui commence, la vitesse est limitée à 30 km/h.",
    detail:
      "C'est un panneau de prescription (type B) présenté sur fond blanc : la limitation vaut pour la zone entière, pas seulement pour la rue.",
    piege:
      "Pas besoin de rappel à chaque rue : la limite court jusqu'au panneau de sortie B51, y compris après les intersections.",
    svg: (
      <Sv>
        <rect x="14" y="4" width="72" height="92" rx="5" fill={BLANC} />
        <rect
          x="14"
          y="4"
          width="72"
          height="92"
          rx="5"
          fill="none"
          stroke={NOIR}
          strokeWidth="2"
        />
        <text
          x="50"
          y="22"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily={POLICE}
          fontSize="17"
          fontWeight="700"
          fill={NOIR}
        >
          ZONE
        </text>
        <circle cx="50" cy="62" r="27" fill={ROUGE} />
        <circle cx="50" cy="62" r="19" fill={BLANC} />
        {chiffre("30", 24, NOIR, 62)}
      </Sv>
    ),
  },
  {
    code: "B51",
    famille: "indication",
    nom: "Sortie de zone 30",
    sens: "La zone limitée à 30 km/h se termine.",
    detail:
      "On reprend la vitesse de la route abordée, en général 50 km/h en agglomération.",
    piege:
      "La sortie de zone 30 ne signifie pas sortie d'agglomération : le 50 s'applique, pas le 80.",
    svg: (
      <Sv>
        <rect x="14" y="4" width="72" height="92" rx="5" fill={BLANC} />
        <rect
          x="14"
          y="4"
          width="72"
          height="92"
          rx="5"
          fill="none"
          stroke={NOIR}
          strokeWidth="2"
        />
        <text
          x="50"
          y="22"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily={POLICE}
          fontSize="17"
          fontWeight="700"
          fill={GRIS}
        >
          ZONE
        </text>
        <circle cx="50" cy="62" r="27" fill={GRIS} />
        <circle cx="50" cy="62" r="19" fill={BLANC} />
        {chiffre("30", 24, GRIS, 62)}
        <path
          d="M26 86 L74 38"
          stroke={GRIS}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </Sv>
    ),
  },
  {
    code: "CE1",
    famille: "indication",
    nom: "Poste de secours",
    sens: "Signale un poste de secours, utile pour les premiers soins.",
    detail:
      "Panneau de service (série CE) : cartouche blanc dans un carré bleu. Les hôpitaux, eux, sont fléchés par idéogramme sur les panneaux de direction.",
    piege:
      "Aucune priorité ni autorisation d'arrêt n'en découle : c'est une simple information de service.",
    svg: (
      <CarreService>
        <g fill={ROUGE}>
          <rect x="43" y="28" width="14" height="44" rx="1" />
          <rect x="28" y="43" width="44" height="14" rx="1" />
        </g>
      </CarreService>
    ),
  },
  {
    code: "CE7",
    famille: "indication",
    nom: "Aire de repos",
    sens: "Annonce une aire de repos aménagée (tables, ombre, sanitaires), sans carburant.",
    detail:
      "Sur autoroute, une aire se présente environ tous les 10 à 20 km ; une pause s'impose toutes les 2 heures.",
    piege:
      "L'aire de repos n'a ni pompe ni atelier : pour faire le plein, il faut une aire de service (CE15a).",
    svg: (
      <CarreService>
        <g fill={NOIR}>
          <rect x="46" y="52" width="8" height="24" rx="2" />
          <path d="M50 22 C34 40 38 58 50 58 C62 58 66 40 50 22 Z" />
          <rect x="30" y="70" width="40" height="6" rx="2" />
        </g>
      </CarreService>
    ),
  },
  {
    code: "CE15a",
    famille: "indication",
    nom: "Station-service",
    sens: "Signale un poste de distribution de carburant ouvert 24 h/24 et 7 j/7.",
    detail:
      "Sur autoroute, la distance jusqu'à la prochaine station est rappelée sur un panonceau.",
    piege:
      "Tomber en panne de carburant sur autoroute est une immobilisation fautive : on fait le plein avant, pas « à la réserve ».",
    svg: (
      <CarreService>
        <g fill={NOIR}>
          <rect x="30" y="26" width="26" height="50" rx="3" />
          <rect x="35" y="32" width="16" height="12" rx="1.5" fill={BLANC} />
          <path d="M56 40 h8 a3 3 0 0 1 3 3 v20 a3 3 0 0 0 6 0 V46 h5 v17 a8 8 0 0 1 -16 0 V46 h-6 z" />
        </g>
      </CarreService>
    ),
  },

  /* ========================== DIRECTION (type D) ========================== */
  {
    code: "D21",
    famille: "direction",
    nom: "Panneau de direction",
    sens: "Indique, à l'intersection même, la direction à suivre pour une destination.",
    detail:
      "Le fond donne le type de route : bleu = autoroute, vert = grande liaison, blanc = route locale, jaune = itinéraire temporaire.",
    piege:
      "Un panneau de direction n'accorde jamais la priorité : il informe, la règle de priorité reste celle de l'intersection.",
    svg: (
      <Sv>
        <path
          d="M6 30 H74 L94 50 L74 70 H6 Z"
          fill={BLANC}
          stroke={NOIR}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <rect x="14" y="44" width="44" height="5" rx="2.5" fill={NOIR} />
        <rect x="14" y="54" width="30" height="5" rx="2.5" fill={NOIR} />
      </Sv>
    ),
  },
  {
    code: "D42",
    famille: "direction",
    nom: "Présignalisation d'une intersection",
    sens: "Schématise l'intersection à venir et les directions desservies par chaque branche.",
    detail:
      "Il est implanté quelques centaines de mètres avant, pour choisir sa voie à temps.",
    piege:
      "Se rabattre au dernier moment devant la sortie est une faute : la présignalisation existe pour se placer AVANT.",
    svg: (
      <Sv>
        <rect x="6" y="14" width="88" height="72" rx="4" fill={VERT} />
        <rect
          x="6"
          y="14"
          width="88"
          height="72"
          rx="4"
          fill="none"
          stroke={BLANC}
          strokeWidth="3"
        />
        <g stroke={BLANC} strokeWidth="6" fill="none" strokeLinecap="round">
          <path d="M50 82 V34" />
          <path d="M50 52 H76" />
        </g>
        <rect x="16" y="24" width="24" height="5" rx="2.5" fill={BLANC} />
        <rect x="16" y="34" width="18" height="5" rx="2.5" fill={BLANC} />
      </Sv>
    ),
  },
  {
    code: "D62",
    famille: "direction",
    nom: "Panneau de confirmation",
    sens: "Après l'intersection, il confirme l'itinéraire et donne les distances restantes.",
    detail:
      "Les distances sont exprimées en kilomètres jusqu'au centre de la localité.",
    piege:
      "Il ne prescrit rien : lire un panneau de confirmation ne dispense pas de surveiller la route et les rétroviseurs.",
    svg: (
      <Sv>
        <rect x="6" y="20" width="88" height="60" rx="4" fill={BLANC} />
        <rect
          x="6"
          y="20"
          width="88"
          height="60"
          rx="4"
          fill="none"
          stroke={NOIR}
          strokeWidth="3"
        />
        <g fill={NOIR}>
          <rect x="16" y="32" width="38" height="5" rx="2.5" />
          <rect x="68" y="32" width="14" height="5" rx="2.5" />
          <rect x="16" y="47" width="30" height="5" rx="2.5" />
          <rect x="68" y="47" width="14" height="5" rx="2.5" />
          <rect x="16" y="62" width="34" height="5" rx="2.5" />
          <rect x="68" y="62" width="14" height="5" rx="2.5" />
        </g>
      </Sv>
    ),
  },

  /* ======================== TEMPORAIRE (AK, K, KD) ======================== */
  {
    code: "AK5",
    famille: "temporaire",
    nom: "Travaux",
    sens: "Un chantier occupe la chaussée ou ses abords.",
    detail:
      "Fond jaune = signalisation temporaire : elle prime toujours sur la signalisation permanente.",
    piege:
      "En cas de contradiction entre le marquage au sol permanent et la signalisation de chantier, on suit le jaune.",
    svg: (
      <TriDanger fond={JAUNE}>
        <g fill={NOIR}>
          <circle cx="50" cy="44" r="4" />
          <path d="M44 50 h12 l6 14 h-5 l-3 -7 v17 h-8 V57 l-3 7 h-5 z" />
          <rect x="60" y="44" width="4" height="30" rx="1.5" transform="rotate(24 62 59)" />
        </g>
      </TriDanger>
    ),
  },
  {
    code: "AK3",
    famille: "temporaire",
    nom: "Chaussée rétrécie (temporaire)",
    sens: "La chaussée se rétrécit à cause du chantier.",
    detail:
      "Souvent suivi d'un basculement de circulation ou d'un alternat par feux.",
    piege:
      "Version temporaire du A3 : même dessin, fond jaune. Le fond jaune signale que la situation est provisoire et évolutive.",
    svg: (
      <TriDanger fond={JAUNE}>
        {trait("M32 76 L40 46", 8)}
        {trait("M68 76 L60 46", 8)}
      </TriDanger>
    ),
  },
  {
    code: "AK14",
    famille: "temporaire",
    nom: "Autres dangers (temporaire)",
    sens: "Danger temporaire dont la nature est précisée par un panonceau.",
    detail: "Employé pour les situations imprévues : gravillons, boue, fumée.",
    piege:
      "Sans panonceau lisible, on considère le danger comme maximal et on réduit fortement l'allure.",
    svg: (
      <TriDanger fond={JAUNE}>
        <rect x="46.4" y="42" width="7.2" height="22" rx="3.6" fill={NOIR} />
        <circle cx="50" cy="71" r="4.3" fill={NOIR} />
      </TriDanger>
    ),
  },
  {
    code: "AK17",
    famille: "temporaire",
    nom: "Annonce de feux temporaires",
    sens: "Des feux tricolores provisoires règlent la circulation alternée du chantier.",
    detail:
      "L'alternat peut aussi être réglé par un agent muni de piquets K10.",
    piege:
      "Un agent de chantier prime sur les feux : ses gestes remplacent la couleur affichée.",
    svg: (
      <TriDanger fond={JAUNE}>
        <rect x="41" y="38" width="18" height="38" rx="4" fill={NOIR} />
        <circle cx="50" cy="47" r="4.6" fill={ROUGE} />
        <circle cx="50" cy="57" r="4.6" fill="#FFB020" />
        <circle cx="50" cy="67" r="4.6" fill={VERT} />
      </TriDanger>
    ),
  },
  {
    code: "AK22",
    famille: "temporaire",
    nom: "Projection de gravillons",
    sens: "Risque de projection de gravillons : la chaussée vient d'être gravillonnée.",
    detail:
      "Une limitation temporaire à 50 km/h accompagne presque toujours ce panneau.",
    piege:
      "On augmente nettement la distance de sécurité : les gravillons projetés brisent les pare-brise et allongent le freinage.",
    svg: (
      <TriDanger fond={JAUNE}>
        <Voiture x={30} y={44} s={0.95} />
        <g fill={NOIR}>
          <circle cx="60" cy="50" r="2.6" />
          <circle cx="68" cy="58" r="2.2" />
          <circle cx="60" cy="66" r="2.4" />
          <circle cx="70" cy="45" r="1.8" />
        </g>
      </TriDanger>
    ),
  },
  {
    code: "KD22a",
    famille: "temporaire",
    nom: "Déviation",
    sens: "Indique l'itinéraire de déviation à suivre pendant les travaux.",
    detail:
      "La série des panneaux jaunes KD balise toute la déviation, jusqu'au panneau de fin KD69.",
    piege:
      "Sur une déviation, on suit les panneaux jaunes et non le GPS : ce dernier ramène souvent sur la route barrée.",
    svg: (
      <Rect fond={JAUNE} bord={NOIR}>
        <text
          x="42"
          y="42"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily={POLICE}
          fontSize="13"
          fontWeight="700"
          fill={NOIR}
        >
          DÉVIATION
        </text>
        <path d={flecheDroite(60, 26, 74, 3.5, 10)} fill={NOIR} />
      </Rect>
    ),
  },
  {
    code: "K5a",
    famille: "temporaire",
    nom: "Cône de chantier",
    sens: "Matérialise la limite d'une zone de travaux ou d'un obstacle temporaire.",
    detail:
      "Les cônes se posent en biseau pour guider progressivement vers la voie laissée libre.",
    piege:
      "Franchir une ligne de cônes revient à franchir une ligne continue : la zone derrière n'est plus une voie de circulation.",
    svg: (
      <Sv>
        <path d="M50 14 L70 82 H30 Z" fill={ROUGE} />
        <rect x="36" y="52" width="28" height="10" fill={BLANC} />
        <rect x="22" y="82" width="56" height="9" rx="3" fill={ROUGE} />
      </Sv>
    ),
  },
  {
    code: "K2",
    famille: "temporaire",
    nom: "Barrage (signal de position)",
    sens: "Barre la voie et signale la position exacte d'un obstacle ou d'un chantier.",
    detail:
      "Les bandes rouges et blanches sont inclinées vers le côté où l'on doit passer.",
    piege:
      "Le K2 ne s'annonce pas tout seul : il est précédé d'une signalisation d'approche jaune, qu'il ne faut pas rater.",
    svg: (
      <Sv>
        <rect x="4" y="30" width="92" height="40" rx="4" fill={BLANC} />
        <rect
          x="4"
          y="30"
          width="92"
          height="40"
          rx="4"
          fill="none"
          stroke={NOIR}
          strokeWidth="2"
        />
        <g fill={ROUGE}>
          <path d="M10 70 L26 30 h14 L24 70 z" />
          <path d="M38 70 L54 30 h14 L52 70 z" />
          <path d="M66 70 L82 30 h13 L79 70 z" />
        </g>
      </Sv>
    ),
  },
  {
    code: "K8",
    famille: "temporaire",
    nom: "Signal de position d'une déviation",
    sens: "Marque, sur la chaussée, le point où la circulation est déviée ou rétrécie.",
    detail:
      "Fond jaune à chevrons noirs : il guide physiquement la trajectoire à suivre.",
    piege:
      "Les chevrons indiquent le côté vers lequel se déporter : on les lit comme une flèche, pas comme un simple obstacle.",
    svg: (
      <Sv>
        <rect x="4" y="30" width="92" height="40" rx="4" fill={JAUNE} />
        <rect
          x="4"
          y="30"
          width="92"
          height="40"
          rx="4"
          fill="none"
          stroke={NOIR}
          strokeWidth="2"
        />
        <g fill={NOIR}>
          <path d="M14 32 L30 50 L14 68 h12 L42 50 L26 32 z" />
          <path d="M42 32 L58 50 L42 68 h12 L70 50 L54 32 z" />
          <path d="M66 32 L82 50 L66 68 h12 L94 50 L78 32 z" />
        </g>
      </Sv>
    ),
  },
];
