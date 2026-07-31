// GÉNÉRÉ par scripts/gen-registry.mjs — ne pas éditer à la main.
import type { Chapter, Grade, Subject } from "@/lib/types";
import { chapter as c000 } from "@/data/chapters/code/01-priorites";
import { chapter as c001 } from "@/data/chapters/code/02-vitesses";
import { chapter as c002 } from "@/data/chapters/code/03-alcool-conduite";

const RAW: Chapter[] = [
  c000, c001, c002,
];

/** Tous les chapitres, matière/niveau normalisés (défaut maths 6e). */
export const CHAPTERS: Chapter[] = RAW.map((c) => ({
  subject: "code" as Subject,
  grade: "permis" as Grade,
  ...c,
})).sort((a, b) => a.num - b.num);

export function getChapter(slug: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.slug === slug);
}

export function chaptersFor(subject: Subject, grade: Grade): Chapter[] {
  return CHAPTERS.filter((c) => c.subject === subject && c.grade === grade);
}
