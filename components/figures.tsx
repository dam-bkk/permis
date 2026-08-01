/**
 * Catalogue de figures pour les cours (schémas SVG dessinés main).
 * Référencées dans les données par LessonSection.figure et Exercise.figure.
 *
 * - FIGURES : schémas de cours propres à ce fichier (vide pour l'instant)
 * - SITUATIONS : illustrations de situation routière (ids "sit-…"),
 *   voir components/figures-situations.tsx
 */

import { FIGURES_EXTRA as SITUATIONS } from "@/components/figures-situations";

export const FIGURES: Record<string, { title: string; svg: React.ReactNode }> = {};

/** Catalogue complet — utilisé par le rendu et par les tests d'intégrité */
const ALL: Record<string, { title: string; svg: React.ReactNode }> = {
  ...FIGURES,
  ...SITUATIONS,
};

export function getAllFigures(): Record<string, { title: string; svg: React.ReactNode }> {
  return { ...ALL };
}

export function Figure({ id }: { id: string }) {
  const fig = ALL[id];
  if (!fig) return null;
  return (
    <figure className="my-4 rounded-xl border-2 border-line bg-card p-4">
      {fig.svg}
      <figcaption className="mt-2 text-center text-sm font-bold text-muted">
        {fig.title}
      </figcaption>
    </figure>
  );
}
