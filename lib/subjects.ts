import type { Grade, Subject } from "@/lib/types";

/**
 * Métadonnées d'affichage des catégories de permis :
 * grandes cartes saturées en dégradé, titres blancs (grands = ≥3:1 vérifié),
 * petits textes blancs UNIQUEMENT sur la variante deep (AA vérifié —
 * cf. script de contrôle de contraste, tous les couples passent AA).
 */
export interface SubjectMeta {
  id: Subject;
  label: string;
  tagline: string;
  /** Icône lucide-react */
  icon: string;
  /** Dégradé de la carte (from → to) */
  from: string;
  to: string;
  /** Variante sombre : fond des chips à petit texte blanc (AA) */
  deep: string;
  /** Fond très clair (pages internes, anneaux) */
  tint: string;
  /** Niveaux où la catégorie existe (absent = tous) */
  grades?: Grade[];
  /** Catégorie optionnelle (badge « Option ») — non utilisé pour l'instant */
  optional?: boolean;
}

export const SUBJECTS: SubjectMeta[] = [
  {
    id: "code",
    label: "Code de la route",
    tagline: "Panneaux, priorités, vitesses : l'examen du code",
    icon: "Car",
    from: "#2E75C4",
    to: "#1D5FA8",
    deep: "#15477E",
    tint: "#DCEDFF",
  },
  {
    id: "moto",
    label: "Moto A1/A2",
    tagline: "Équipement, trajectoires, code moto",
    icon: "Bike",
    from: "#D63C3C",
    to: "#B91C1C",
    deep: "#8F1616",
    tint: "#FDE3E3",
  },
  {
    id: "poids-lourd",
    label: "Poids lourd C",
    tagline: "Transport de marchandises, temps de conduite",
    icon: "Truck",
    from: "#E0561C",
    to: "#C2410C",
    deep: "#93300A",
    tint: "#FFE8DC",
  },
  {
    id: "bateau",
    label: "Bateau côtier",
    tagline: "Permis plaisance : balisage, météo, sécurité en mer",
    icon: "Sailboat",
    from: "#14947F",
    to: "#0F766E",
    deep: "#0B5751",
    tint: "#D8F1EE",
  },
  {
    id: "caces",
    label: "CACES",
    tagline: "Chariots, nacelles, engins de chantier",
    icon: "Forklift",
    from: "#C96A08",
    to: "#B45309",
    deep: "#7C3A06",
    tint: "#FEF3C7",
  },
];

export function getSubjectMeta(id: Subject): SubjectMeta {
  return SUBJECTS.find((s) => s.id === id) ?? SUBJECTS[0];
}

export const GRADES: Grade[] = ["permis"];

export const GRADE_LABELS: Record<Grade, string> = {
  permis: "Permis",
};

/** Niveaux dont le contenu est déjà publié */
export const GRADES_READY: Grade[] = ["permis"];
