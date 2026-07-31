export type Subject = "code" | "moto" | "poids-lourd" | "bateau" | "caces";

/**
 * Famille de couleur d'un thème (héritée du moteur Créneau ;
 * c'est un simple choix de couleur, le libellé affiché vient de domainLabel).
 */
export type Domain = "nombres" | "geometrie" | "grandeurs" | "donnees";

export const DOMAIN_LABELS: Record<Domain, string> = {
  nombres: "Règles et sanctions",
  geometrie: "Signalisation et priorités",
  grandeurs: "Vitesse et distances",
  donnees: "Conduite et environnement",
};

/** Un bloc de leçon : paragraphes + exemple + astuce optionnels */
export interface LessonSection {
  title: string;
  /** Paragraphes du cours. Texte brut, symboles unicode autorisés (× ÷ ² ³ ° …). */
  paragraphs: string[];
  /** Encadré exemple (lignes affichées dans un bloc "Exemple") */
  example?: string[];
  /** Astuce / méthode mémorisable, affichée dans un encadré coloré */
  tip?: string;
  /** Id d'une figure du catalogue components/figures.tsx */
  figure?: string;
}

export type ExerciseType = "qcm" | "input" | "truefalse";

export interface Exercise {
  id: string;
  /** 1 = je démarre, 2 = je m'entraîne, 3 = je me dépasse */
  level: 1 | 2 | 3;
  type: ExerciseType;
  question: string;
  /** Pour qcm : les propositions (2 à 4) */
  choices?: string[];
  /**
   * qcm → index de la bonne réponse (number)
   * input → string attendue (comparaison tolérante : espaces, virgule/point)
   * truefalse → boolean
   */
  answer: number | string | boolean;
  /** Réponses alternatives acceptées pour input ("3,5" et "3.5" sont déjà gérées) */
  accept?: string[];
  /** Corrigé détaillé : LA règle du code en vigueur + le piège à éviter */
  explanation: string;
  /** Indice affichable avant de répondre */
  hint?: string;
}

/** Un seul niveau pour l'instant — champ conservé pour la compatibilité du moteur. */
export type Grade = "permis";

/** Vidéo YouTube associée à un thème (id vérifié via oEmbed avant ajout) */
export interface ChapterVideo {
  title: string;
  /** Identifiant YouTube (11 caractères), embarqué via youtube-nocookie.com */
  youtubeId: string;
  /** Chaîne d'origine */
  channel?: string;
}

export interface Chapter {
  slug: string;
  /** Catégorie de permis — absent = "code" */
  subject?: Subject;
  /** Niveau — absent = "permis" (un seul niveau) */
  grade?: Grade;
  /** Numéro d'ordre, PAR catégorie */
  num: number;
  title: string;
  domain: Domain;
  /** Libellé du domaine affiché sur la carte ; absent = DOMAIN_LABELS[domain] */
  domainLabel?: string;
  /** Nom d'icône lucide-react (PascalCase, ex: "TrafficCone") */
  icon: string;
  /** Phrase d'accroche courte pour la carte du thème */
  teaser: string;
  /** Objectifs, formulés pour le candidat ("Je sais…") */
  objectives: string[];
  lesson: LessonSection[];
  exercises: Exercise[];
  /** Vidéos pour réviser (affichées dans l'onglet leçon) */
  videos?: ChapterVideo[];
}
