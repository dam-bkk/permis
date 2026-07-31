/**
 * Défi du jour : 6 questions de code de la route à réponse courte,
 * générées de façon déterministe à partir de la date (même défi toute la journée).
 * Chaque générateur porte sur un automatisme chiffré du code en vigueur.
 */

export interface DailyQuestion {
  question: string;
  answer: string;
  accept?: string[];
  explanation: string;
}

/** PRNG déterministe (mulberry32) */
function rng(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(r: () => number, arr: T[]): T {
  return arr[Math.floor(r() * arr.length)];
}

type Generator = (r: () => number) => DailyQuestion;

const generators: Generator[] = [
  // Limitations de vitesse par type de route
  (r) => {
    const roads: { label: string; kmh: number; why: string }[] = [
      { label: "en agglomération", kmh: 50, why: "La règle générale en ville est 50 km/h (des zones 30 ou 20 peuvent s'y ajouter localement)." },
      { label: "sur une route à double sens sans séparateur central", kmh: 80, why: "Depuis juillet 2018, ces routes sont limitées à 80 km/h (certains départements ont relevé des tronçons à 90)." },
      { label: "sur une route à chaussées séparées par un terre-plein", kmh: 110, why: "Les routes à chaussées séparées (voies rapides) sont limitées à 110 km/h par temps sec." },
      { label: "sur autoroute, par temps sec", kmh: 130, why: "L'autoroute est limitée à 130 km/h par temps sec pour un conducteur confirmé." },
    ];
    const road = pick(r, roads);
    return {
      question: `Vitesse maximale autorisée ${road.label} (en km/h) ?`,
      answer: String(road.kmh),
      accept: [`${road.kmh} km/h`],
      explanation: `${road.kmh} km/h. ${road.why}`,
    };
  },
  // Vitesses par temps de pluie
  (r) => {
    const cases: { label: string; sec: number; pluie: number }[] = [
      { label: "sur autoroute", sec: 130, pluie: 110 },
      { label: "sur route à chaussées séparées", sec: 110, pluie: 100 },
      { label: "sur route limitée à 90", sec: 90, pluie: 80 },
    ];
    const c = pick(r, cases);
    return {
      question: `Il pleut. Vitesse maximale ${c.label} (en km/h) ?`,
      answer: String(c.pluie),
      accept: [`${c.pluie} km/h`],
      explanation: `${c.pluie} km/h. Par temps de pluie, la limite passe de ${c.sec} à ${c.pluie} km/h. Attention : c'est une obligation, pas un conseil — et si la visibilité tombe sous 50 m, c'est 50 km/h partout.`,
    };
  },
  // Jeune conducteur
  (r) => {
    const cases: { label: string; kmh: number }[] = [
      { label: "sur autoroute", kmh: 110 },
      { label: "sur route à chaussées séparées", kmh: 100 },
      { label: "sur route limitée à 90", kmh: 80 },
    ];
    const c = pick(r, cases);
    return {
      question: `Jeune conducteur (permis probatoire) : vitesse maximale ${c.label} (en km/h) ?`,
      answer: String(c.kmh),
      accept: [`${c.kmh} km/h`],
      explanation: `${c.kmh} km/h. Pendant toute la période probatoire, les limites sont abaissées (110 sur autoroute, 100 sur voie rapide, 80 hors agglomération), même par beau temps.`,
    };
  },
  // Alcool
  (r) => {
    const jeune = r() < 0.5;
    return jeune
      ? {
          question: "Taux d'alcool maximal pour un jeune conducteur (en g/L de sang) ?",
          answer: "0,2",
          accept: ["0.2", "0,2 g/l", "0,2 g/L"],
          explanation: "0,2 g/L de sang pendant toute la période probatoire — en pratique, zéro verre : un seul verre suffit à dépasser ce seuil.",
        }
      : {
          question: "Taux d'alcool maximal pour un conducteur confirmé (en g/L de sang) ?",
          answer: "0,5",
          accept: ["0.5", "0,5 g/l", "0,5 g/L"],
          explanation: "0,5 g/L de sang (soit 0,25 mg/L d'air expiré). Au-delà : au moins 135 € d'amende et 6 points en moins ; à partir de 0,8 g/L, c'est un délit.",
        };
  },
  // Distance de sécurité en secondes
  () => ({
    question: "Quel délai minimal (en secondes) doit séparer deux véhicules qui se suivent ?",
    answer: "2",
    accept: ["2 secondes", "2s", "2 s", "deux"],
    explanation: "2 secondes au minimum, quelle que soit la vitesse. Repère sur autoroute : laisser 2 traits de la bande d'arrêt d'urgence entre soi et le véhicule qui précède.",
  }),
  // Distance d'arrêt (dizaine au carré)
  (r) => {
    const v = pick(r, [50, 80, 90, 110, 130]);
    const d = (v / 10) ** 2;
    return {
      question: `Sur sol sec, distance d'arrêt approximative à ${v} km/h (en mètres) ?`,
      answer: String(d),
      accept: [`${d} m`, `${d} mètres`],
      explanation: `Environ ${d} m. Astuce du code : on multiplie le chiffre des dizaines par lui-même (${v / 10} × ${v / 10} = ${d}). Sur sol mouillé, il faut majorer d'environ 50 %.`,
    };
  },
  // Distance parcourue par seconde
  (r) => {
    const v = pick(r, [50, 90, 110, 130]);
    const d = Math.round(v * 0.3);
    return {
      question: `À ${v} km/h, quelle distance parcourt-on environ en 1 seconde (en mètres) ?`,
      answer: String(d),
      accept: [`${d} m`, `${d} mètres`],
      explanation: `Environ ${d} m. Astuce : on multiplie le chiffre des dizaines par 3 (${v / 10} × 3 = ${d}). C'est la distance parcourue pendant le simple temps de réaction.`,
    };
  },
  // Sanctions téléphone / points
  (r) => {
    const q = pick(r, [
      {
        question: "Téléphone tenu en main au volant : combien de points en moins ?",
        answer: "3",
        accept: ["3 points", "trois"],
        explanation: "3 points en moins et 135 € d'amende. Les écouteurs et oreillettes sont interdits de la même façon — seul un dispositif intégré au véhicule (Bluetooth) est toléré.",
      },
      {
        question: "Alcool entre 0,5 et 0,8 g/L : combien de points en moins ?",
        answer: "6",
        accept: ["6 points", "six"],
        explanation: "6 points en moins et 135 € d'amende. Sur un permis probatoire à 6 points, c'est le permis invalidé d'un coup.",
      },
      {
        question: "Combien de points sur le permis d'un conducteur confirmé ?",
        answer: "12",
        accept: ["12 points", "douze"],
        explanation: "12 points. Un jeune conducteur démarre avec 6 points, puis en gagne 2 par an sans infraction (3 ans, ou 2 ans après conduite accompagnée) pour atteindre 12.",
      },
    ]);
    return q;
  },
  // Fatigue / pauses
  (r) => {
    const q = pick(r, [
      {
        question: "Sur un long trajet, une pause est recommandée toutes les combien d'heures ?",
        answer: "2",
        accept: ["2 heures", "2h", "2 h", "deux"],
        explanation: "Une pause d'au moins 15 à 20 minutes toutes les 2 heures. La fatigue est l'une des premières causes d'accident mortel sur autoroute.",
      },
      {
        question: "Visibilité inférieure à 50 m (brouillard) : vitesse maximale partout (en km/h) ?",
        answer: "50",
        accept: ["50 km/h"],
        explanation: "50 km/h sur toutes les routes, autoroute comprise, dès que la visibilité tombe sous 50 mètres.",
      },
    ]);
    return q;
  },
];

export const DAILY_SIZE = 6;

/** Le défi du jour pour une clé "YYYY-MM-DD" */
export function dailyChallenge(dateKey: string): DailyQuestion[] {
  const seed = Number(dateKey.replaceAll("-", ""));
  const r = rng(seed);
  // On mélange l'ordre des générateurs puis on en prend 6 (pas deux fois le même type)
  const order = generators
    .map((g, i) => ({ g, k: r(), i }))
    .sort((x, y) => x.k - y.k)
    .slice(0, DAILY_SIZE);
  return order.map(({ g }) => g(r));
}
