/**
 * Journal des versions (semantic versioning).
 * RÈGLE DE RELEASE : chaque push qui modifie l'app ajoute une entrée ici —
 * major = rupture (données/URL), minor = nouvelle fonctionnalité ou contenu,
 * patch = correction. Trié du plus récent au plus ancien.
 */

export interface ChangelogEntry {
  version: string;
  /** YYYY-MM-DD */
  date: string;
  kind: "major" | "minor" | "patch";
  changes: string[];
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: "0.1.0",
    date: "2026-07-31",
    kind: "minor",
    changes: [
      "Première version : moteur de révision (cours en étapes, questions type examen, corrigés)",
      "Thème Code de la route : priorités, vitesses et distances, alcool et vigilance",
      "Examen blanc chronométré, révision espacée, série quotidienne",
      "Journal d'activité et journal des versions dans les réglages",
    ],
  },
];

export const APP_VERSION = CHANGELOG[0].version;
