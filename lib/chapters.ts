// GÉNÉRÉ par scripts/gen-registry.mjs — ne pas éditer à la main.
import type { Chapter, Grade, Subject } from "@/lib/types";
import { chapter as c000 } from "@/data/chapters/bateau/01-permis-cotier";
import { chapter as c001 } from "@/data/chapters/bateau/02-balisage";
import { chapter as c002 } from "@/data/chapters/bateau/03-securite-mer";
import { chapter as c003 } from "@/data/chapters/code/01-priorites";
import { chapter as c004 } from "@/data/chapters/code/02-vitesses";
import { chapter as c005 } from "@/data/chapters/code/03-alcool-conduite";
import { chapter as c006 } from "@/data/chapters/moto/01-categories-moto";
import { chapter as c007 } from "@/data/chapters/moto/02-equipement-moto";
import { chapter as c008 } from "@/data/chapters/moto/03-conduite-moto";
import { chapter as c009 } from "@/data/chapters/poids-lourd/01-categories-pl";
import { chapter as c010 } from "@/data/chapters/poids-lourd/02-chronotachygraphe";
import { chapter as c011 } from "@/data/chapters/poids-lourd/03-chargement-securite";

const RAW: Chapter[] = [
  c000, c001, c002, c003, c004, c005, c006, c007, c008, c009, c010, c011,
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
