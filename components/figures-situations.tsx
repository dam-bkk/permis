/**
 * Illustrations de SITUATION pour les questions du code de la route.
 * Schémas d'auto-école : vue de dessus (ou coupe simple), chaussée grise,
 * marquages blancs, véhicules en rectangles. Le véhicule du candidat est
 * TOUJOURS bleu (#1e40af) et étiqueté « vous ».
 *
 * Référencées par Exercise.figure / LessonSection.figure via l'id "sit-…".
 */

/* ---------- Palette ---------- */

const ROAD = "#aeb8c6"; // chaussée
const ROAD_SOFT = "#c8d0da"; // voie secondaire / accotement
const MARK = "#ffffff"; // marquage
const INK = "#0f172a";
const MUTED = "#475569";
const LINE = "#dde3ec";
const BLUE = "#1e40af"; // « vous »
const OTHER = "#7c2d12"; // autre véhicule
const DARK = "#334155"; // poids lourd, tramway
const RED = "#c8102e"; // rouge signalisation
const SIGN_BLUE = "#00529c"; // bleu signalisation
const OK = "#0b5d16";
const WARN = "#b45309";
const TINT_KO = "#fceaea";
const TINT_OK = "#e6f4ec";

/* ---------- Briques de dessin ---------- */

function T({
  x,
  y,
  children,
  anchor = "middle",
  size = 12,
  color = INK,
  weight = 700,
}: {
  x: number;
  y: number;
  children: React.ReactNode;
  anchor?: "start" | "middle" | "end";
  size?: number;
  color?: string;
  weight?: number;
}) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={weight} fill={color}>
      {children}
    </text>
  );
}

/** Étiquette encadrée (fond blanc) — lisible par-dessus la chaussée */
function Tag({
  x,
  y,
  text,
  color = BLUE,
}: {
  x: number;
  y: number;
  text: string;
  color?: string;
}) {
  const w = Math.max(30, text.length * 6.7 + 14);
  return (
    <g>
      <rect
        x={x - w / 2}
        y={y - 10}
        width={w}
        height={20}
        rx={2}
        fill="#ffffff"
        stroke={color}
        strokeWidth={1.6}
      />
      <T x={x} y={y + 4.5} size={12} color={color}>
        {text}
      </T>
    </g>
  );
}

/** Voiture vue de dessus. rot = 0 → capot vers le haut. */
function Car({
  x,
  y,
  w = 24,
  h = 42,
  color = OTHER,
  rot = 0,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  color?: string;
  rot?: number;
}) {
  return (
    <g transform={`rotate(${rot} ${x} ${y})`}>
      <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={3} fill={color} />
      <rect
        x={x - w / 2 + 3}
        y={y - h / 2 + 6}
        width={w - 6}
        height={9}
        rx={1}
        fill="#ffffff"
        opacity={0.9}
      />
      <rect
        x={x - w / 2 + 3}
        y={y + h / 2 - 14}
        width={w - 6}
        height={8}
        rx={1}
        fill="#ffffff"
        opacity={0.55}
      />
    </g>
  );
}

/** Poids lourd vu de dessus. rot = 0 → capot vers le haut. */
function Truck({
  x,
  y,
  w = 30,
  h = 96,
  color = DARK,
  rot = 0,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  color?: string;
  rot?: number;
}) {
  return (
    <g transform={`rotate(${rot} ${x} ${y})`}>
      <rect x={x - w / 2} y={y - h / 2 + 26} width={w} height={h - 26} rx={2} fill={color} />
      <rect x={x - w / 2} y={y - h / 2} width={w} height={24} rx={3} fill="#1f2937" />
      <rect
        x={x - w / 2 + 4}
        y={y - h / 2 + 5}
        width={w - 8}
        height={8}
        rx={1}
        fill="#ffffff"
        opacity={0.85}
      />
    </g>
  );
}

/** Voiture vue de profil (scènes en coupe) */
function SideCar({
  x,
  y,
  w = 62,
  color = OTHER,
  rot = 0,
  flip = false,
}: {
  x: number;
  y: number;
  w?: number;
  color?: string;
  rot?: number;
  flip?: boolean;
}) {
  const h = w * 0.34;
  return (
    <g transform={`rotate(${rot} ${x} ${y}) ${flip ? `scale(-1,1) translate(${-2 * x},0)` : ""}`}>
      <rect x={x - w / 2} y={y - h} width={w} height={h} rx={3} fill={color} />
      <path
        d={`M ${x - w * 0.22} ${y - h} L ${x - w * 0.1} ${y - h * 1.7} L ${x + w * 0.18} ${
          y - h * 1.7
        } L ${x + w * 0.26} ${y - h} Z`}
        fill={color}
      />
      <circle cx={x - w * 0.28} cy={y} r={w * 0.11} fill="#1f2937" />
      <circle cx={x + w * 0.28} cy={y} r={w * 0.11} fill="#1f2937" />
    </g>
  );
}

/** Flèche droite */
function Arrow({
  x1,
  y1,
  x2,
  y2,
  color = BLUE,
  width = 3,
  dashed = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  width?: number;
  dashed?: boolean;
}) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const hl = 10;
  const hw = 6;
  const bx = x2 - Math.cos(a) * hl;
  const by = y2 - Math.sin(a) * hl;
  const px = -Math.sin(a) * hw;
  const py = Math.cos(a) * hw;
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={bx}
        y2={by}
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeDasharray={dashed ? "7 5" : undefined}
      />
      <polygon
        points={`${x2},${y2} ${bx + px},${by + py} ${bx - px},${by - py}`}
        fill={color}
      />
    </g>
  );
}

/** Flèche courbe : le chemin + une pointe orientée manuellement */
function CurveArrow({
  d,
  hx,
  hy,
  angle,
  color = BLUE,
  width = 3,
  dashed = false,
}: {
  d: string;
  hx: number;
  hy: number;
  angle: number;
  color?: string;
  width?: number;
  dashed?: boolean;
}) {
  const a = (angle * Math.PI) / 180;
  const hl = 10;
  const hw = 6;
  const bx = hx - Math.cos(a) * hl;
  const by = hy - Math.sin(a) * hl;
  const px = -Math.sin(a) * hw;
  const py = Math.cos(a) * hw;
  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeDasharray={dashed ? "7 5" : undefined}
      />
      <polygon points={`${hx},${hy} ${bx + px},${by + py} ${bx - px},${by - py}`} fill={color} />
    </g>
  );
}

/** Cote / accolade horizontale avec libellé */
function Span({
  x1,
  x2,
  y,
  label,
  color = INK,
  above = true,
}: {
  x1: number;
  x2: number;
  y: number;
  label: string;
  color?: string;
  above?: boolean;
}) {
  return (
    <g>
      <line x1={x1} y1={y - 6} x2={x1} y2={y + 6} stroke={color} strokeWidth={2} />
      <line x1={x2} y1={y - 6} x2={x2} y2={y + 6} stroke={color} strokeWidth={2} />
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={color} strokeWidth={2} />
      <T x={(x1 + x2) / 2} y={above ? y - 10 : y + 17} size={12} color={color}>
        {label}
      </T>
    </g>
  );
}

/** Ligne de conclusion : petit triangle plein + texte (évite le caractère « → ») */
function Concl({
  x,
  y,
  children,
  color = INK,
  size = 13,
}: {
  x: number;
  y: number;
  children: React.ReactNode;
  color?: string;
  size?: number;
}) {
  return (
    <g>
      <polygon points={`${x},${y - 10} ${x},${y - 1} ${x + 8},${y - 5.5}`} fill={color} />
      <T x={x + 14} y={y} anchor="start" size={size} color={color}>
        {children}
      </T>
    </g>
  );
}

/* ---------- Panneaux miniatures (couleurs réglementaires) ---------- */

function SignCedez({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g>
      <polygon
        points={`${x - 17 * s},${y - 13 * s} ${x + 17 * s},${y - 13 * s} ${x},${y + 16 * s}`}
        fill="#ffffff"
        stroke={RED}
        strokeWidth={4 * s}
        strokeLinejoin="round"
      />
    </g>
  );
}

function SignStop({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  const r = 17 * s;
  const pts = Array.from({ length: 8 }, (_, i) => {
    const a = Math.PI / 8 + (i * Math.PI) / 4;
    return `${(x + r * Math.cos(a)).toFixed(1)},${(y + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
  return (
    <g>
      <polygon points={pts} fill={RED} stroke="#ffffff" strokeWidth={2 * s} />
      <T x={x} y={y + 4 * s} size={10 * s} color="#ffffff">
        STOP
      </T>
    </g>
  );
}

function SignGiratoire({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  const r = 16 * s;
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={SIGN_BLUE} />
      {[0, 120, 240].map((a) => (
        <g key={a} transform={`rotate(${a} ${x} ${y})`}>
          <path
            d={`M ${x - 2 * s} ${y - 10 * s} A ${10 * s} ${10 * s} 0 0 1 ${x + 8.6 * s} ${y + 5 * s}`}
            fill="none"
            stroke="#ffffff"
            strokeWidth={2.8 * s}
            strokeLinecap="round"
          />
          <polygon
            points={`${x - 8 * s},${y - 9 * s} ${x + 1 * s},${y - 13 * s} ${x + 1 * s},${y - 4 * s}`}
            fill="#ffffff"
          />
        </g>
      ))}
    </g>
  );
}

function SignAgglo({ x, y, label = "VILLE", barre = false }: { x: number; y: number; label?: string; barre?: boolean }) {
  const w = 78;
  const h = 26;
  return (
    <g>
      <rect x={x - w / 2} y={y - h / 2} width={w} height={h} fill="#ffffff" stroke={INK} strokeWidth={2} />
      <T x={x} y={y + 5} size={13} color={INK}>
        {label}
      </T>
      {barre && (
        <line
          x1={x - w / 2 + 4}
          y1={y + h / 2 - 4}
          x2={x + w / 2 - 4}
          y2={y - h / 2 + 4}
          stroke={RED}
          strokeWidth={3}
        />
      )}
    </g>
  );
}

function SignLimit({ x, y, v, s = 1 }: { x: number; y: number; v: string; s?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={18 * s} fill="#ffffff" stroke={RED} strokeWidth={4 * s} />
      <T x={x} y={y + 6 * s} size={15 * s} color={INK}>
        {v}
      </T>
    </g>
  );
}

function SignStationnementInterdit({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={17 * s} fill={SIGN_BLUE} stroke={RED} strokeWidth={4 * s} />
      <line
        x1={x - 11 * s}
        y1={y + 11 * s}
        x2={x + 11 * s}
        y2={y - 11 * s}
        stroke={RED}
        strokeWidth={4 * s}
      />
    </g>
  );
}

/** Croix « interdit » posée sur une manœuvre */
function Forbidden({ x, y, r = 16 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#ffffff" stroke={RED} strokeWidth={4} />
      <line
        x1={x - r * 0.6}
        y1={y - r * 0.6}
        x2={x + r * 0.6}
        y2={y + r * 0.6}
        stroke={RED}
        strokeWidth={4}
      />
      <line
        x1={x + r * 0.6}
        y1={y - r * 0.6}
        x2={x - r * 0.6}
        y2={y + r * 0.6}
        stroke={RED}
        strokeWidth={4}
      />
    </g>
  );
}

/** Feu tricolore (vue de face) */
function TrafficLight({
  x,
  y,
  on,
  s = 1,
}: {
  x: number;
  y: number;
  on: "rouge" | "orange" | "vert";
  s?: number;
}) {
  const lamp = (cy: number, active: boolean, color: string) => (
    <circle cx={x} cy={cy} r={9 * s} fill={active ? color : "#64748b"} opacity={active ? 1 : 0.35} />
  );
  return (
    <g>
      <rect
        x={x - 15 * s}
        y={y - 34 * s}
        width={30 * s}
        height={68 * s}
        rx={3 * s}
        fill="#1f2937"
      />
      {lamp(y - 22 * s, on === "rouge", "#e11d48")}
      {lamp(y, on === "orange", "#f59e0b")}
      {lamp(y + 22 * s, on === "vert", "#16a34a")}
    </g>
  );
}

/** Piéton simplifié */
function Pedestrian({ x, y, color = INK }: { x: number; y: number; color?: string }) {
  return (
    <g>
      <circle cx={x} cy={y - 11} r={5} fill={color} />
      <rect x={x - 4} y={y - 5} width={8} height={13} rx={2} fill={color} />
      <line x1={x - 4} y1={y + 8} x2={x - 7} y2={y + 17} stroke={color} strokeWidth={3} />
      <line x1={x + 4} y1={y + 8} x2={x + 7} y2={y + 17} stroke={color} strokeWidth={3} />
    </g>
  );
}

/* ---------- Décors récurrents ---------- */

const VX = 166; // bord gauche de la route verticale
const VW = 78;
const HY = 86; // bord haut de la route horizontale
const HH = 70;
const VC = VX + VW / 2; // 205
const HC = HY + HH / 2; // 121
const LANE_UP = VC + 20; // 225 — sens sud → nord
const LANE_DOWN = VC - 20; // 185 — sens nord → sud
const LANE_W = HY + 17; // 103 — sens est → ouest

/** Carrefour en croix : chaussées + axes discontinus */
function CrossRoads() {
  return (
    <g>
      <rect x={0} y={HY} width={400} height={HH} fill={ROAD} />
      <rect x={VX} y={0} width={VW} height={240} fill={ROAD} />
      <line
        x1={6}
        y1={HC}
        x2={VX - 8}
        y2={HC}
        stroke={MARK}
        strokeWidth={3}
        strokeDasharray="14 10"
      />
      <line
        x1={VX + VW + 8}
        y1={HC}
        x2={394}
        y2={HC}
        stroke={MARK}
        strokeWidth={3}
        strokeDasharray="14 10"
      />
      <line
        x1={VC}
        y1={6}
        x2={VC}
        y2={HY - 8}
        stroke={MARK}
        strokeWidth={3}
        strokeDasharray="14 10"
      />
      <line
        x1={VC}
        y1={HY + HH + 8}
        x2={VC}
        y2={234}
        stroke={MARK}
        strokeWidth={3}
        strokeDasharray="14 10"
      />
    </g>
  );
}

/** Anneau de giratoire centré (200, 118) */
function Ring() {
  return (
    <g>
      <rect x={182} y={168} width={40} height={72} fill={ROAD} />
      <rect x={182} y={0} width={40} height={68} fill={ROAD} />
      <rect x={0} y={98} width={140} height={40} fill={ROAD} />
      <rect x={260} y={98} width={140} height={40} fill={ROAD} />
      <circle cx={200} cy={118} r={66} fill={ROAD} />
      <circle cx={200} cy={118} r={30} fill={ROAD_SOFT} stroke={MARK} strokeWidth={3} />
      <circle cx={200} cy={118} r={18} fill="#dbe4ee" />
    </g>
  );
}

const svgProps = { viewBox: "0 0 400 240", className: "w-full", xmlns: "http://www.w3.org/2000/svg" };

/* ---------- Catalogue ---------- */

export const FIGURES_EXTRA: Record<string, { title: string; svg: React.ReactNode }> = {
  /* ============ PRIORITÉS ============ */

  "sit-priorite-droite": {
    title: "Intersection sans signalisation : la priorité à droite",
    svg: (
      <svg {...svgProps}>
        <CrossRoads />
        <Car x={LANE_UP} y={205} color={BLUE} />
        <Arrow x1={LANE_UP} y1={180} x2={LANE_UP} y2={164} color={BLUE} dashed />
        <Tag x={300} y={200} text="vous" />
        <Car x={318} y={LANE_W} rot={-90} />
        <Arrow x1={292} y1={LANE_W} x2={252} y2={LANE_W} color={OTHER} />
        <Tag x={330} y={58} text="à ma droite" color={OTHER} />
        <T x={12} y={200} anchor="start" size={12} color={MUTED}>
          Ni panneau, ni feu, ni marquage
        </T>
        <Concl x={12} y={222}>je lui cède le passage</Concl>
      </svg>
    ),
  },

  "sit-cedez-passage": {
    title: "« Cédez le passage » : ralentir, s'arrêter seulement si besoin",
    svg: (
      <svg {...svgProps}>
        <CrossRoads />
        {/* ligne de cédez-le-passage : triangles pointés vers le conducteur */}
        {[0, 1, 2, 3].map((i) => (
          <polygon
            key={i}
            points={`${VC - 30 + i * 20},${164} ${VC - 18 + i * 20},${164} ${VC - 24 + i * 20},${174}`}
            fill={MARK}
          />
        ))}
        <SignCedez x={268} y={182} />
        <Car x={LANE_UP} y={212} color={BLUE} />
        <Arrow x1={LANE_UP} y1={186} x2={LANE_UP} y2={168} color={BLUE} dashed />
        <Tag x={318} y={214} text="vous" />
        <Car x={318} y={LANE_W} rot={-90} />
        <Arrow x1={292} y1={LANE_W} x2={252} y2={LANE_W} color={OTHER} />
        <Tag x={330} y={58} text="prioritaire" color={OTHER} />
        <T x={12} y={200} anchor="start" size={12} color={MUTED}>
          Voie libre ?
        </T>
        <Concl x={12} y={222}>je passe sans m'arrêter</Concl>
      </svg>
    ),
  },

  "sit-stop": {
    title: "« Stop » : arrêt absolu à la ligne, même si la route est libre",
    svg: (
      <svg {...svgProps}>
        <CrossRoads />
        <rect x={VC} y={162} width={40} height={6} fill={MARK} />
        <SignStop x={268} y={182} />
        <Car x={LANE_UP} y={200} color={BLUE} />
        <Tag x={318} y={214} text="vous" />
        <T x={12} y={200} anchor="start" size={12} color={MUTED}>
          Route dégagée, bonne visibilité
        </T>
        <Concl x={12} y={222}>l'arrêt reste obligatoire</Concl>
      </svg>
    ),
  },

  "sit-giratoire": {
    title: "Carrefour à sens giratoire : l'anneau est prioritaire",
    svg: (
      <svg {...svgProps}>
        <Ring />
        <CurveArrow
          d="M 168 92 A 46 46 0 0 0 172 148"
          hx={172}
          hy={148}
          angle={80}
          color={MARK}
          width={3}
        />
        <Car x={152} y={112} rot={175} />
        <Tag x={62} y={172} text="prioritaire" color={OTHER} />
        <Car x={210} y={212} color={BLUE} />
        <Arrow x1={210} y1={188} x2={210} y2={176} color={BLUE} dashed />
        <Tag x={318} y={212} text="vous" />
        <SignCedez x={252} y={196} s={0.8} />
        <SignGiratoire x={300} y={172} s={0.9} />
        <T x={200} y={122} size={11} color={MUTED}>
          îlot
        </T>
        <T x={12} y={26} anchor="start" size={12} color={MUTED}>
          « Cédez le passage » à l'entrée
        </T>
        <Concl x={12} y={48}>je laisse passer l'anneau</Concl>
      </svg>
    ),
  },

  "sit-rond-point": {
    title: "Rond-point sans panneau : la priorité à droite reprend ses droits",
    svg: (
      <svg {...svgProps}>
        <Ring />
        <Car x={196} y={166} rot={90} color={BLUE} />
        <Arrow x1={224} y1={166} x2={252} y2={160} color={BLUE} dashed />
        <Tag x={92} y={196} text="vous, sur l'anneau" />
        <Car x={212} y={216} />
        <Arrow x1={212} y1={192} x2={212} y2={182} color={OTHER} />
        <Tag x={340} y={216} text="prioritaire" color={OTHER} />
        <Forbidden x={264} y={196} r={13} />
        <T x={284} y={200} anchor="start" size={11} color={RED}>
          aucun panneau
        </T>
        <T x={12} y={26} anchor="start" size={12} color={MUTED}>
          Aucun « cédez le passage » aux entrées
        </T>
        <Concl x={12} y={50}>priorité à droite : il passe</Concl>
      </svg>
    ),
  },

  "sit-intersection-t": {
    title: "Intersection en T sans panneau : deux priorités à droite",
    svg: (
      <svg {...svgProps}>
        <rect x={0} y={56} width={400} height={70} fill={ROAD} />
        <rect x={VX} y={126} width={VW} height={114} fill={ROAD} />
        <line x1={6} y1={91} x2={VX - 8} y2={91} stroke={MARK} strokeWidth={3} strokeDasharray="14 10" />
        <line x1={VX + VW + 8} y1={91} x2={394} y2={91} stroke={MARK} strokeWidth={3} strokeDasharray="14 10" />
        <line x1={VC} y1={148} x2={VC} y2={234} stroke={MARK} strokeWidth={3} strokeDasharray="14 10" />
        <Car x={LANE_UP} y={196} color={BLUE} />
        <Tag x={306} y={196} text="vous" />
        <Car x={320} y={74} rot={-90} />
        <Arrow x1={294} y1={74} x2={256} y2={74} color={OTHER} />
        <Tag x={340} y={26} text="il passe" color={OTHER} />
        <Car x={80} y={108} rot={90} color={DARK} />
        <Arrow x1={106} y1={108} x2={144} y2={108} color={DARK} dashed />
        <Tag x={80} y={158} text="je suis à sa droite" color={DARK} />
        <T x={12} y={202} anchor="start" size={12} color={MUTED}>
          Sans panneau, même en T :
        </T>
        <Concl x={12} y={226}>je regarde à droite</Concl>
      </svg>
    ),
  },

  "sit-vehicule-urgence": {
    title: "Véhicule d'urgence : je facilite le passage, sans me mettre en danger",
    svg: (
      <svg {...svgProps}>
        <rect x={0} y={72} width={400} height={96} fill={ROAD} />
        <line x1={6} y1={120} x2={394} y2={120} stroke={MARK} strokeWidth={3} strokeDasharray="14 10" />
        <line x1={0} y1={72} x2={400} y2={72} stroke={MARK} strokeWidth={3} />
        <line x1={0} y1={166} x2={400} y2={166} stroke={MARK} strokeWidth={3} />
        <Car x={240} y={152} rot={90} color={BLUE} />
        <Arrow x1={240} y1={132} x2={240} y2={148} color={BLUE} dashed width={2.5} />
        <Tag x={238} y={196} text="vous : je me serre à droite" />
        <Car x={110} y={144} rot={90} color={RED} />
        <circle cx={132} cy={136} r={5} fill={SIGN_BLUE} />
        <circle cx={132} cy={152} r={5} fill={SIGN_BLUE} />
        {[0, 1, 2].map((i) => (
          <line
            key={i}
            x1={142 + i * 10}
            y1={128 + i * 4}
            x2={150 + i * 10}
            y2={124 + i * 4}
            stroke={SIGN_BLUE}
            strokeWidth={3}
          />
        ))}
        <Tag x={104} y={44} text="gyrophare + sirène" color={RED} />
        <Arrow x1={104} y1={58} x2={104} y2={116} color={RED} width={2} dashed />
        <T x={12} y={232} anchor="start" size={12} color={MUTED}>
          Sans les deux avertisseurs, aucune priorité
        </T>
      </svg>
    ),
  },

  "sit-tourne-a-gauche": {
    title: "Tourner à gauche : je cède aux véhicules d'en face",
    svg: (
      <svg {...svgProps}>
        <CrossRoads />
        <Car x={LANE_UP} y={202} color={BLUE} />
        <CurveArrow
          d={`M ${LANE_UP} 176 C ${LANE_UP} 140, 200 ${LANE_W}, 150 ${LANE_W}`}
          hx={132}
          hy={LANE_W}
          angle={180}
          color={BLUE}
          dashed
        />
        <Tag x={312} y={202} text="vous" />
        <Car x={LANE_DOWN} y={40} rot={180} />
        <Arrow x1={LANE_DOWN} y1={64} x2={LANE_DOWN} y2={172} color={OTHER} />
        <Tag x={86} y={40} text="en face : prioritaire" color={OTHER} />
        <T x={12} y={202} anchor="start" size={12} color={MUTED}>
          Le clignotant annonce
        </T>
        <Concl x={12} y={226}>j'attends qu'il soit passé</Concl>
      </svg>
    ),
  },

  "sit-sortie-parking": {
    title: "Sortie de parking : je cède à tous, même à gauche",
    svg: (
      <svg {...svgProps}>
        <rect x={0} y={104} width={400} height={94} fill={ROAD} />
        <line x1={6} y1={151} x2={394} y2={151} stroke={MARK} strokeWidth={3} strokeDasharray="14 10" />
        <rect x={16} y={12} width={210} height={82} fill={ROAD_SOFT} stroke={LINE} strokeWidth={2} />
        {[1, 2, 3, 4].map((i) => (
          <line key={i} x1={16 + i * 42} y1={12} x2={16 + i * 42} y2={72} stroke={MARK} strokeWidth={2.5} />
        ))}
        <T x={62} y={34} size={12} color={MUTED}>
          parking
        </T>
        <Car x={190} y={54} h={38} w={22} color={BLUE} rot={180} />
        <Arrow x1={190} y1={80} x2={190} y2={122} color={BLUE} dashed />
        <Tag x={286} y={54} text="vous : je sors" />
        <Car x={320} y={126} rot={-90} />
        <Arrow x1={294} y1={126} x2={244} y2={126} color={OTHER} />
        <Tag x={332} y={214} text="prioritaire" color={OTHER} />
        <T x={12} y={232} anchor="start" size={12} color={MUTED}>
          Parking, accès privé, trottoir : aucune priorité
        </T>
      </svg>
    ),
  },

  "sit-chemin-de-terre": {
    title: "Il débouche d'un chemin de terre : la priorité à droite ne joue pas",
    svg: (
      <svg {...svgProps}>
        <rect x={0} y={70} width={400} height={86} fill={ROAD} />
        <line x1={6} y1={113} x2={394} y2={113} stroke={MARK} strokeWidth={3} strokeDasharray="14 10" />
        <rect x={272} y={156} width={54} height={84} fill="#d9c7a3" />
        <line x1={272} y1={156} x2={272} y2={240} stroke="#b59f74" strokeWidth={2} strokeDasharray="8 6" />
        <line x1={326} y1={156} x2={326} y2={240} stroke="#b59f74" strokeWidth={2} strokeDasharray="8 6" />
        <T x={299} y={232} size={11} color="#6b5a34">
          chemin de terre
        </T>
        <Car x={90} y={136} rot={90} color={BLUE} />
        <Arrow x1={116} y1={136} x2={168} y2={136} color={BLUE} />
        <Tag x={104} y={192} text="vous : je garde ma priorité" />
        <Car x={299} y={196} h={38} w={22} />
        <Tag x={326} y={40} text="il doit céder" color={OTHER} />
        <Arrow x1={326} y1={54} x2={310} y2={168} color={OTHER} width={2} dashed />
        <T x={12} y={228} anchor="start" size={12} color={MUTED}>
          Priorité à droite : entre routes seulement
        </T>
      </svg>
    ),
  },

  "sit-carrefour-bloque": {
    title: "Feu vert mais sortie bloquée : je n'entre pas dans le carrefour",
    svg: (
      <svg {...svgProps}>
        <CrossRoads />
        <g opacity={0.5}>
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1={VX + i * 20}
              y1={HY}
              x2={VX + VW}
              y2={HY + HH - i * 18}
              stroke={RED}
              strokeWidth={2}
            />
          ))}
        </g>
        <rect x={VC} y={162} width={40} height={5} fill={MARK} />
        <Car x={LANE_UP} y={196} color={BLUE} />
        <Tag x={318} y={196} text="vous" />
        <Car x={LANE_UP} y={62} color={DARK} />
        <Car x={LANE_UP} y={18} color={OTHER} />
        <Tag x={318} y={40} text="circulation à l'arrêt" color={DARK} />
        <TrafficLight x={272} y={128} on="vert" s={0.7} />
        <T x={12} y={30} anchor="start" size={12} color={MUTED}>
          Le vert autorise,
        </T>
        <Concl x={12} y={54}>il n'oblige pas à s'engager</Concl>
      </svg>
    ),
  },

  "sit-croisement-pente": {
    title: "Croisement difficile en pente : celui qui descend s'arrête",
    svg: (
      <svg {...svgProps}>
        <polygon points="0,240 0,196 400,72 400,116 400,240" fill="#e6e9ee" />
        <polygon points="0,196 400,72 400,110 0,234" fill={ROAD} />
        <line x1={0} y1={215} x2={400} y2={91} stroke={MARK} strokeWidth={2.5} strokeDasharray="12 9" />
        <g transform="rotate(-17 110 200)">
          <SideCar x={110} y={200} color={BLUE} />
        </g>
        <Arrow x1={168} y1={176} x2={214} y2={162} color={BLUE} />
        <Tag x={92} y={148} text="vous : je monte" />
        <g transform="rotate(-17 300 140)">
          <SideCar x={300} y={140} color={OTHER} flip />
        </g>
        <Tag x={322} y={62} text="il descend" color={OTHER} />
        <T x={12} y={32} anchor="start" size={12} color={MUTED}>
          Croisement impossible : portion étroite
        </T>
        <Concl x={12} y={56}>celui qui descend s'arrête et recule</Concl>
      </svg>
    ),
  },

  "sit-tramway": {
    title: "Tramway à l'arrêt : dépassement interdit du côté des voyageurs",
    svg: (
      <svg {...svgProps}>
        <rect x={0} y={44} width={400} height={140} fill={ROAD} />
        {[74, 84].map((y) => (
          <line key={y} x1={0} y1={y} x2={400} y2={y} stroke="#7c8798" strokeWidth={3} />
        ))}
        <rect x={110} y={56} width={230} height={44} rx={4} fill={DARK} />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={126 + i * 54} y={64} width={34} height={12} rx={2} fill="#ffffff" opacity={0.8} />
        ))}
        <T x={225} y={94} size={12} color="#ffffff">
          tramway
        </T>
        <Pedestrian x={150} y={126} />
        <Pedestrian x={196} y={134} />
        <Pedestrian x={240} y={124} />
        <Car x={62} y={150} rot={90} color={BLUE} />
        <Tag x={64} y={200} text="vous" />
        <Arrow x1={92} y1={150} x2={200} y2={150} color={RED} dashed width={2.5} />
        <Forbidden x={300} y={150} />
        <T x={388} y={228} anchor="end" size={12} color={MUTED}>
          Montée et descente des voyageurs : interdiction absolue
        </T>
      </svg>
    ),
  },

  "sit-passage-pieton": {
    title: "Piéton engagé : arrêt obligatoire (135 € et 6 points)",
    svg: (
      <svg {...svgProps}>
        <rect x={0} y={62} width={400} height={116} fill={ROAD} />
        <rect x={0} y={30} width={400} height={32} fill={ROAD_SOFT} />
        <rect x={0} y={178} width={400} height={32} fill={ROAD_SOFT} />
        <line x1={6} y1={120} x2={188} y2={120} stroke={MARK} strokeWidth={3} strokeDasharray="14 10" />
        <line x1={288} y1={120} x2={394} y2={120} stroke={MARK} strokeWidth={3} strokeDasharray="14 10" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={210 + i * 16} y={62} width={9} height={116} fill={MARK} />
        ))}
        <rect x={190} y={62} width={6} height={116} fill={MARK} />
        <Car x={120} y={148} rot={90} color={BLUE} />
        <Tag x={110} y={202} text="vous : je m'arrête" />
        <Pedestrian x={244} y={140} />
        <Arrow x1={244} y1={168} x2={244} y2={92} color={INK} width={2.5} dashed />
        <T x={388} y={44} anchor="end" size={12} color={MUTED}>
          Piéton engagé ou manifestant son intention de traverser
        </T>
        <T x={388} y={226} anchor="end" size={13} color={INK}>
          Refus de priorité au piéton : 135 € et 6 points
        </T>
      </svg>
    ),
  },

  "sit-feux-tricolores": {
    title: "Les trois états du feu tricolore",
    svg: (
      <svg {...svgProps}>
        {[
          { x: 70, on: "rouge" as const, t1: "ROUGE", t2: "arrêt à la ligne,", t3: "sans franchir" },
          { x: 200, on: "orange" as const, t1: "ORANGE", t2: "je m'arrête, sauf si", t3: "l'arrêt est dangereux" },
          { x: 330, on: "vert" as const, t1: "VERT", t2: "je passe si la sortie", t3: "est dégagée" },
        ].map((f) => (
          <g key={f.t1}>
            <TrafficLight x={f.x} y={70} on={f.on} />
            <T x={f.x} y={140} size={13} color={INK}>
              {f.t1}
            </T>
            <T x={f.x} y={162} size={12} color={MUTED} weight={600}>
              {f.t2}
            </T>
            <T x={f.x} y={180} size={12} color={MUTED} weight={600}>
              {f.t3}
            </T>
          </g>
        ))}
        <line x1={20} y1={202} x2={380} y2={202} stroke={LINE} strokeWidth={2} />
        <T x={200} y={224} size={12} color={INK}>
          Feu clignotant orange : passage autorisé, priorité à droite
        </T>
      </svg>
    ),
  },

  "sit-stationnement": {
    title: "Stationnement : où l'on peut, où l'on ne peut pas",
    svg: (
      <svg {...svgProps}>
        <rect x={0} y={110} width={400} height={100} fill={ROAD} />
        <rect x={0} y={62} width={400} height={48} fill={ROAD_SOFT} />
        <line x1={0} y1={110} x2={400} y2={110} stroke={MARK} strokeWidth={3} />
        <T x={40} y={90} size={12} color={MUTED}>
          trottoir
        </T>
        <rect x={20} y={116} width={116} height={46} fill={TINT_OK} stroke={OK} strokeWidth={2} />
        <Car x={78} y={139} rot={90} w={22} h={40} color={BLUE} />
        <T x={78} y={180} size={12} color={OK}>
          autorisé
        </T>
        <rect x={150} y={116} width={230} height={46} fill={TINT_KO} stroke={RED} strokeWidth={2} />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={286 + i * 16} y={116} width={8} height={46} fill={MARK} />
        ))}
        <T x={218} y={144} size={12} color={RED}>
          interdit
        </T>
        <SignStationnementInterdit x={362} y={88} s={0.8} />
        <T x={200} y={206} size={12} color={MUTED}>
          Passage piéton, entrée carrossable, arrêt de bus, angle de rue
        </T>
        <T x={200} y={230} size={13} color={INK}>
          Stationnement gênant : 35 €, très gênant : 135 €
        </T>
      </svg>
    ),
  },

  /* ============ VITESSES ET DISTANCES ============ */

  "sit-agglomeration": {
    title: "Le panneau d'entrée d'agglomération vaut limitation à 50 km/h",
    svg: (
      <svg {...svgProps}>
        <rect x={0} y={104} width={400} height={92} fill={ROAD} />
        <line x1={6} y1={150} x2={394} y2={150} stroke={MARK} strokeWidth={3} strokeDasharray="14 10" />
        <SignAgglo x={92} y={52} label="LA VILLE" />
        <line x1={92} y1={65} x2={92} y2={102} stroke={MUTED} strokeWidth={3} />
        <SignAgglo x={310} y={52} label="LA VILLE" barre />
        <line x1={310} y1={65} x2={310} y2={102} stroke={MUTED} strokeWidth={3} />
        <Car x={180} y={172} rot={90} color={BLUE} />
        <Arrow x1={206} y1={172} x2={252} y2={172} color={BLUE} />
        <Tag x={176} y={214} text="vous" />
        <T x={92} y={228} size={13} color={INK}>
          50 km/h
        </T>
        <T x={310} y={228} size={13} color={INK}>
          80 ou 90 km/h
        </T>
        <line x1={92} y1={200} x2={310} y2={200} stroke={INK} strokeWidth={2} />
        <line x1={92} y1={194} x2={92} y2={206} stroke={INK} strokeWidth={2} />
        <line x1={310} y1={194} x2={310} y2={206} stroke={INK} strokeWidth={2} />
        <T x={388} y={26} anchor="end" size={12} color={MUTED}>
          Aucun panneau chiffré n'est nécessaire
        </T>
      </svg>
    ),
  },

  "sit-file-autoroute": {
    title: "Autoroute : 130 km/h par temps sec, voie de droite par défaut",
    svg: (
      <svg {...svgProps}>
        <rect x={0} y={62} width={400} height={140} fill={ROAD} />
        <rect x={0} y={182} width={400} height={20} fill={ROAD_SOFT} />
        <line x1={0} y1={182} x2={400} y2={182} stroke={MARK} strokeWidth={3} />
        <line x1={0} y1={62} x2={400} y2={62} stroke={MARK} strokeWidth={3} />
        {[102, 142].map((y) => (
          <line key={y} x1={6} y1={y} x2={394} y2={y} stroke={MARK} strokeWidth={3} strokeDasharray="18 14" />
        ))}
        <Truck x={110} y={164} rot={90} h={86} w={26} />
        <Car x={300} y={164} rot={90} color={DARK} />
        <Car x={214} y={122} rot={90} color={BLUE} />
        <Tag x={290} y={122} text="vous" />
        <Car x={330} y={82} rot={90} color={OTHER} />
        <Arrow x1={356} y1={82} x2={392} y2={82} color={OTHER} width={2.5} />
        <SignLimit x={32} y={30} v="130" s={0.8} />
        <T x={222} y={30} size={12} color={MUTED}>
          110 km/h sous la pluie · 110 km/h en probatoire
        </T>
        <T x={12} y={228} anchor="start" size={12} color={MUTED}>
          Bande d'arrêt d'urgence : jamais pour circuler
        </T>
      </svg>
    ),
  },

  "sit-insertion-autoroute": {
    title: "Bretelle d'insertion : accélérer, puis s'insérer sans forcer",
    svg: (
      <svg {...svgProps}>
        <rect x={0} y={40} width={400} height={96} fill={ROAD} />
        <line x1={6} y1={88} x2={394} y2={88} stroke={MARK} strokeWidth={3} strokeDasharray="18 14" />
        <line x1={0} y1={40} x2={400} y2={40} stroke={MARK} strokeWidth={3} />
        <path d="M 0 236 L 120 172 L 400 172 L 400 136 L 120 136 L 0 200 Z" fill={ROAD} />
        <path d="M 150 136 L 400 136" stroke={MARK} strokeWidth={3} strokeDasharray="10 10" />
        <Car x={200} y={154} rot={90} color={BLUE} />
        <CurveArrow
          d="M 228 154 C 280 154, 280 112, 330 112"
          hx={348}
          hy={112}
          angle={0}
          color={BLUE}
          dashed
        />
        <Tag x={196} y={204} text="vous : j'accélère" />
        <Car x={92} y={112} rot={90} color={DARK} />
        <Car x={250} y={66} rot={90} color={OTHER} />
        <T x={330} y={196} anchor="middle" size={12} color={MUTED}>
          voie d'insertion
        </T>
        <T x={388} y={232} anchor="end" size={13} color={INK}>
          Je m'insère à la vitesse du flux, sans couper la route
        </T>
      </svg>
    ),
  },

  "sit-depassement-camion": {
    title: "Dépasser un poids lourd : voir tout le véhicule avant de se rabattre",
    svg: (
      <svg {...svgProps}>
        <rect x={0} y={70} width={400} height={128} fill={ROAD} />
        <line x1={0} y1={70} x2={400} y2={70} stroke={MARK} strokeWidth={3} />
        <line x1={0} y1={198} x2={400} y2={198} stroke={MARK} strokeWidth={3} />
        <line x1={6} y1={134} x2={394} y2={134} stroke={MARK} strokeWidth={3} strokeDasharray="18 14" />
        <Truck x={220} y={168} rot={90} h={110} w={28} />
        <Car x={130} y={102} rot={90} color={BLUE} />
        <Tag x={100} y={44} text="vous" />
        <CurveArrow
          d="M 60 168 C 96 168, 100 102, 156 102"
          hx={170}
          hy={102}
          angle={0}
          color={BLUE}
          dashed
        />
        <CurveArrow
          d="M 300 102 C 340 102, 336 168, 372 168"
          hx={384}
          hy={168}
          angle={30}
          color={BLUE}
          dashed
        />
        <T x={326} y={92} size={12} color={INK}>
          rabattement
        </T>
        <T x={326} y={110} size={12} color={MUTED} weight={600}>
          après l'avoir vu
        </T>
        <T x={326} y={126} size={12} color={MUTED} weight={600}>
          dans le rétroviseur
        </T>
        <T x={12} y={226} anchor="start" size={12} color={MUTED}>
          Un ensemble fait jusqu'à 18 m : il faut de la visibilité
        </T>
      </svg>
    ),
  },

  "sit-angle-mort-camion": {
    title: "Angles morts d'un poids lourd : les zones où il ne vous voit pas",
    svg: (
      <svg {...svgProps}>
        <rect x={0} y={40} width={400} height={168} fill={ROAD} />
        <line x1={0} y1={40} x2={400} y2={40} stroke={MARK} strokeWidth={3} />
        <line x1={0} y1={208} x2={400} y2={208} stroke={MARK} strokeWidth={3} />
        <g opacity={0.55}>
          <rect x={120} y={148} width={190} height={56} fill={TINT_KO} stroke={RED} strokeWidth={2} />
          <rect x={120} y={44} width={130} height={44} fill={TINT_KO} stroke={RED} strokeWidth={2} />
          <rect x={38} y={88} width={82} height={60} fill={TINT_KO} stroke={RED} strokeWidth={2} />
          <rect x={310} y={88} width={72} height={60} fill={TINT_KO} stroke={RED} strokeWidth={2} />
        </g>
        <Truck x={215} y={118} rot={90} h={190} w={50} />
        <Car x={230} y={176} rot={90} w={22} h={38} color={BLUE} />
        <Tag x={230} y={224} text="vous : invisible" color={RED} />
        <T x={182} y={68} size={12} color={RED}>
          côté gauche
        </T>
        <T x={78} y={122} size={12} color={RED}>
          arrière
        </T>
        <T x={346} y={122} size={12} color={RED}>
          avant
        </T>
        <T x={156} y={182} size={12} color={RED}>
          côté droit
        </T>
        <T x={12} y={26} anchor="start" size={12} color={MUTED}>
          Si je ne vois pas ses rétroviseurs, il ne me voit pas
        </T>
      </svg>
    ),
  },

  "sit-distance-securite": {
    title: "Distance de sécurité : la règle des 2 secondes",
    svg: (
      <svg {...svgProps}>
        <rect x={0} y={74} width={400} height={92} fill={ROAD} />
        <line x1={6} y1={120} x2={394} y2={120} stroke={MARK} strokeWidth={3} strokeDasharray="18 14" />
        <Car x={310} y={144} rot={90} color={OTHER} />
        <Car x={140} y={144} rot={90} color={BLUE} />
        <Tag x={140} y={98} text="vous" />
        <line x1={310} y1={62} x2={310} y2={74} stroke={MUTED} strokeWidth={3} />
        <rect x={298} y={44} width={24} height={20} fill="#ffffff" stroke={MUTED} strokeWidth={2} />
        <T x={310} y={30} size={11} color={MUTED}>
          repère fixe
        </T>
        <Span x1={140} x2={310} y={182} label="2 secondes" color={INK} above={false} />
        <T x={225} y={214} size={12} color={MUTED}>
          « mille un, mille deux » — 50 m à 90 km/h
        </T>
        <T x={388} y={232} anchor="end" size={12} color={RED}>
          Pluie ou chaussée glissante : je double l'intervalle
        </T>
      </svg>
    ),
  },

  "sit-distance-arret": {
    title: "Distance d'arrêt à 90 km/h : sec contre mouillé",
    svg: (
      <svg {...svgProps}>
        <T x={12} y={30} anchor="start" size={13} color={INK}>
          Chaussée sèche
        </T>
        <rect x={40} y={44} width={70} height={26} fill={WARN} />
        <rect x={110} y={44} width={141} height={26} fill={BLUE} />
        <T x={75} y={92} size={12} color={WARN}>
          réaction 27 m
        </T>
        <T x={180} y={92} size={12} color={BLUE}>
          freinage 54 m
        </T>
        <T x={266} y={62} anchor="start" size={13} color={INK}>
          ≈ 81 m
        </T>

        <T x={12} y={132} anchor="start" size={13} color={INK}>
          Chaussée mouillée
        </T>
        <rect x={40} y={146} width={70} height={26} fill={WARN} />
        <rect x={110} y={146} width={242} height={26} fill={RED} />
        <T x={75} y={194} size={12} color={WARN}>
          réaction 27 m
        </T>
        <T x={230} y={194} size={12} color={RED}>
          freinage ≈ 93 m
        </T>
        <T x={310} y={165} size={13} color="#ffffff">
          ≈ 120 m
        </T>

        <line x1={12} y1={212} x2={388} y2={212} stroke={LINE} strokeWidth={2} />
        <T x={200} y={232} size={12} color={MUTED}>
          Repère : distance d'arrêt sur sec = dizaines × dizaines (9 × 9 = 81 m)
        </T>
      </svg>
    ),
  },

  "sit-temps-reaction": {
    title: "Le temps de réaction décide de tout",
    svg: (
      <svg {...svgProps}>
        <rect x={0} y={28} width={400} height={70} fill={ROAD} />
        <Car x={60} y={62} rot={90} w={20} h={36} color={BLUE} />
        <rect x={92} y={50} width={70} height={24} fill={WARN} opacity={0.85} />
        <rect x={162} y={50} width={120} height={24} fill={BLUE} opacity={0.85} />
        <Pedestrian x={320} y={62} color={INK} />
        <T x={127} y={40} size={11} color="#ffffff">
          1 s
        </T>
        <T x={222} y={40} size={11} color="#ffffff">
          freinage
        </T>
        <T x={388} y={22} anchor="end" size={12} color={OK}>
          conducteur reposé : il s'arrête à temps
        </T>

        <rect x={0} y={130} width={400} height={70} fill={ROAD} />
        <Car x={60} y={164} rot={90} w={20} h={36} color={BLUE} />
        <rect x={92} y={152} width={104} height={24} fill={RED} opacity={0.85} />
        <rect x={196} y={152} width={120} height={24} fill={BLUE} opacity={0.85} />
        <Pedestrian x={320} y={164} color={INK} />
        <T x={144} y={142} size={11} color="#ffffff">
          1,5 s
        </T>
        <T x={256} y={142} size={11} color="#ffffff">
          freinage
        </T>
        <Forbidden x={322} y={164} r={14} />
        <T x={388} y={124} anchor="end" size={12} color={RED}>
          alcool, fatigue, téléphone : le choc a lieu
        </T>
        <T x={200} y={226} size={12} color={MUTED}>
          À 90 km/h, une demi-seconde de plus = 12,5 mètres de plus
        </T>
      </svg>
    ),
  },

  "sit-visibilite-reduite": {
    title: "Visibilité inférieure à 50 m : 50 km/h sur toutes les routes",
    svg: (
      <svg {...svgProps}>
        <polygon points="120,240 280,240 232,44 168,44" fill={ROAD} />
        <line x1={200} y1={240} x2={200} y2={44} stroke={MARK} strokeWidth={4} strokeDasharray="20 16" />
        <Car x={228} y={206} w={22} h={38} color={BLUE} />
        {[
          { y: 44, h: 34, o: 0.9 },
          { y: 78, h: 30, o: 0.75 },
          { y: 108, h: 28, o: 0.55 },
          { y: 136, h: 26, o: 0.35 },
          { y: 162, h: 24, o: 0.18 },
        ].map((b) => (
          <rect key={b.y} x={0} y={b.y} width={400} height={b.h} fill="#e2e8f0" opacity={b.o} />
        ))}
        <line x1={92} y1={186} x2={92} y2={64} stroke={INK} strokeWidth={2} />
        <line x1={86} y1={186} x2={98} y2={186} stroke={INK} strokeWidth={2} />
        <line x1={86} y1={64} x2={98} y2={64} stroke={INK} strokeWidth={2} />
        <T x={62} y={128} size={12} color={INK}>
          50 m
        </T>
        <SignLimit x={330} y={186} v="50" s={0.85} />
        <Tag x={318} y={224} text="vous" />
        <T x={200} y={26} size={12} color={MUTED}>
          Brouillard, neige, forte pluie — autoroute comprise
        </T>
      </svg>
    ),
  },

  "sit-energie-choc": {
    title: "Vitesse doublée, énergie du choc multipliée par quatre",
    svg: (
      <svg {...svgProps}>
        <T x={100} y={30} size={13} color={INK}>
          50 km/h
        </T>
        <rect x={70} y={124} width={60} height={60} fill={BLUE} />
        <T x={100} y={162} size={16} color="#ffffff">
          ×1
        </T>
        <T x={100} y={208} size={12} color={MUTED}>
          chute du 3e étage
        </T>

        <T x={280} y={30} size={13} color={INK}>
          100 km/h
        </T>
        {[
          [220, 64],
          [280, 64],
          [220, 124],
          [280, 124],
        ].map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width={60} height={60} fill={RED} stroke="#ffffff" strokeWidth={2} />
        ))}
        <T x={280} y={104} size={20} color="#ffffff">
          ×4
        </T>
        <T x={280} y={208} size={12} color={MUTED}>
          chute du 12e étage
        </T>
        <line x1={170} y1={40} x2={170} y2={200} stroke={LINE} strokeWidth={2} />
        <T x={200} y={232} size={12} color={INK}>
          L'énergie du choc varie avec le carré de la vitesse
        </T>
      </svg>
    ),
  },

  /* ============ ALCOOL, VIGILANCE ============ */

  "sit-taux-alcool": {
    title: "Les seuils d'alcoolémie et ce qu'ils déclenchent",
    svg: (
      <svg {...svgProps}>
        <rect x={40} y={98} width={55} height={34} fill={OK} />
        <rect x={95} y={98} width={82} height={34} fill={WARN} />
        <rect x={177} y={98} width={83} height={34} fill="#a13a0b" />
        <rect x={260} y={98} width={110} height={34} fill={RED} />
        {[
          { x: 95, v: "0,2 g/L" },
          { x: 177, v: "0,5 g/L" },
          { x: 260, v: "0,8 g/L" },
        ].map((m) => (
          <g key={m.v}>
            <line x1={m.x} y1={88} x2={m.x} y2={142} stroke={INK} strokeWidth={2} />
            <T x={m.x} y={80} size={13} color={INK}>
              {m.v}
            </T>
          </g>
        ))}
        <T x={40} y={80} anchor="start" size={12} color={MUTED}>
          0
        </T>
        <T x={136} y={121} size={12} color="#ffffff">
          jeunes
        </T>
        <T x={218} y={121} size={12} color="#ffffff">
          tous
        </T>
        <T x={315} y={121} size={12} color="#ffffff">
          délit
        </T>

        <T x={95} y={172} size={12} color={INK}>
          permis probatoire,
        </T>
        <T x={95} y={190} size={12} color={MUTED} weight={600}>
          conduite accompagnée,
        </T>
        <T x={95} y={206} size={12} color={MUTED} weight={600}>
          transport en commun
        </T>
        <T x={212} y={172} size={12} color={INK}>
          135 € et 6 points
        </T>
        <T x={212} y={190} size={12} color={MUTED} weight={600}>
          contravention
        </T>
        <T x={320} y={172} size={12} color={RED}>
          3 ans de prison,
        </T>
        <T x={320} y={190} size={12} color={MUTED} weight={600}>
          9 000 €, 6 points,
        </T>
        <T x={320} y={206} size={12} color={MUTED} weight={600}>
          permis retenu
        </T>
        <T x={200} y={40} size={12} color={MUTED}>
          En air expiré, on divise par deux : 0,10 · 0,25 · 0,40 mg/L
        </T>
      </svg>
    ),
  },

  "sit-elimination-alcool": {
    title: "L'alcool s'élimine lentement : seul le temps agit",
    svg: (
      <svg {...svgProps}>
        <line x1={50} y1={186} x2={380} y2={186} stroke={INK} strokeWidth={2} />
        <line x1={50} y1={30} x2={50} y2={186} stroke={INK} strokeWidth={2} />
        {[0, 1, 2, 3, 4, 5, 6].map((h) => (
          <g key={h}>
            <line x1={50 + h * 47} y1={186} x2={50 + h * 47} y2={192} stroke={INK} strokeWidth={2} />
            <T x={50 + h * 47} y={208} size={12} color={MUTED} weight={600}>
              {h} h
            </T>
          </g>
        ))}
        <line x1={44} y1={96} x2={380} y2={96} stroke={WARN} strokeWidth={2} strokeDasharray="7 6" />
        <T x={384} y={92} anchor="end" size={11} color={WARN}>
          0,5 g/L
        </T>
        <polyline
          points="50,44 97,66 144,88 191,110 238,132 285,154 332,176 379,186"
          fill="none"
          stroke={BLUE}
          strokeWidth={4}
          strokeLinejoin="round"
        />
        <circle cx={50} cy={44} r={5} fill={BLUE} />
        <T x={64} y={38} anchor="start" size={12} color={BLUE}>
          0,8 g/L
        </T>
        <T x={200} y={112} anchor="start" size={12} color={INK}>
          −0,10 à −0,15 g/L par heure
        </T>
        <T x={12} y={230} anchor="start" size={12} color={RED}>
          Café, douche froide, air frais, repas : aucun effet sur le taux
        </T>
      </svg>
    ),
  },

  "sit-fatigue-pause": {
    title: "Une pause d'au moins 20 minutes toutes les 2 heures",
    svg: (
      <svg {...svgProps}>
        <rect x={20} y={98} width={150} height={30} fill={BLUE} />
        <rect x={170} y={98} width={44} height={30} fill={OK} />
        <rect x={214} y={98} width={150} height={30} fill={BLUE} />
        <T x={95} y={119} size={12} color="#ffffff">
          2 h de conduite
        </T>
        <T x={192} y={119} size={11} color="#ffffff">
          20 min
        </T>
        <T x={289} y={119} size={12} color="#ffffff">
          2 h de conduite
        </T>
        <T x={192} y={150} size={12} color={OK}>
          pause
        </T>
        <T x={200} y={72} size={13} color={INK}>
          La pause précède la fatigue, elle ne la répare pas
        </T>
        <T x={12} y={186} anchor="start" size={12} color={RED}>
          Signaux d'alerte : bâillements, paupières lourdes, regard fixe,
        </T>
        <T x={12} y={204} anchor="start" size={12} color={RED}>
          trajectoire flottante, ligne franchie sans le vouloir
        </T>
        <Concl x={12} y={230}>s'arrêter et dormir 15 à 20 minutes</Concl>
      </svg>
    ),
  },

  "sit-telephone": {
    title: "Cinq secondes sur l'écran, 70 mètres à l'aveugle",
    svg: (
      <svg {...svgProps}>
        <rect x={0} y={70} width={400} height={80} fill={ROAD} />
        <line x1={6} y1={110} x2={394} y2={110} stroke={MARK} strokeWidth={3} strokeDasharray="18 14" />
        <rect x={70} y={128} width={288} height={20} fill={RED} opacity={0.28} />
        <Car x={54} y={132} rot={90} w={22} h={38} color={BLUE} />
        <Tag x={60} y={198} text="vous, à 50 km/h" />
        <Span x1={70} x2={358} y={62} label="≈ 70 m parcourus sans regarder la route" color={RED} />
        <T x={214} y={140} size={12} color={RED}>
          5 secondes sur l'écran
        </T>
        <T x={388} y={186} anchor="end" size={13} color={INK}>
          Téléphone tenu en main : 135 € et 3 points
        </T>
        <T x={388} y={208} anchor="end" size={12} color={MUTED}>
          Y compris à l'arrêt à un feu ou dans un embouteillage
        </T>
        <T x={388} y={228} anchor="end" size={12} color={MUTED}>
          Oreillette, casque, écouteurs : même sanction
        </T>
      </svg>
    ),
  },

  "sit-pictogrammes-medicaments": {
    title: "Les trois pictogrammes des médicaments",
    svg: (
      <svg {...svgProps}>
        {[
          { x: 70, c: "#f7d117", n: "1", t1: "Soyez prudent", t2: "lisez la notice" },
          { x: 200, c: "#f39200", n: "2", t1: "Soyez très prudent", t2: "demandez conseil" },
          { x: 326, c: "#e30613", n: "3", t1: "Ne conduisez pas", t2: "avis d'un médecin" },
        ].map((p) => (
          <g key={p.n}>
            <polygon
              points={`${p.x},46 ${p.x + 40},116 ${p.x - 40},116`}
              fill={p.c}
              stroke={INK}
              strokeWidth={4}
              strokeLinejoin="round"
            />
            <T x={p.x} y={104} size={17} color={INK}>
              {p.n}
            </T>
            <T x={p.x} y={148} size={13} color={INK}>
              {p.t1}
            </T>
            <T x={p.x} y={168} size={12} color={MUTED} weight={600}>
              {p.t2}
            </T>
          </g>
        ))}
        <line x1={20} y1={192} x2={380} y2={192} stroke={LINE} strokeWidth={2} />
        <T x={200} y={216} size={12} color={MUTED}>
          Somnifères, anxiolytiques, antihistaminiques, antitussifs, collyres
        </T>
        <T x={200} y={234} size={12} color={RED}>
          Associés à l'alcool, leurs effets se multiplient
        </T>
      </svg>
    ),
  },
};

export default FIGURES_EXTRA;
