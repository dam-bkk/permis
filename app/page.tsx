"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Target,
  TimerReset,
  BrainCircuit,
  TrendingUp,
  CircleAlert,
  CalendarDays,
  Layers,
} from "lucide-react";
import { chaptersFor } from "@/lib/chapters";
import { useProgress, todayKey, dueReviews } from "@/lib/progress";
import { usePrefs, setStudentName, setGrade, setOptions } from "@/lib/prefs";
import { SUBJECTS } from "@/lib/subjects";
import { ChapterIcon } from "@/components/chapter-icon";
import { KreneauLogo } from "@/components/logo";

/* ------------------------------------------------------------------ */
/* Première visite : une seule question, on entre dans l'app aussitôt  */
/* ------------------------------------------------------------------ */

function FirstRun({ onDone }: { onDone: () => void }) {
  const [typed, setTyped] = useState("");
  return (
    <div className="fade-up mx-auto flex min-h-[70dvh] max-w-xl flex-col justify-center">
      <KreneauLogo size={56} />
      <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1]">
        Le code, préparé sérieusement.
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-muted">
        Des questions au format officiel, un entraînement qui cible vos erreurs,
        et un examen blanc qui vous dit où vous en êtes vraiment.
      </p>
      <form
        className="mt-8 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (typed.trim()) {
            setStudentName(typed);
            setGrade("permis");
            setOptions([]);
            onDone();
          }
        }}
      >
        <input
          value={typed}
          onChange={(e) => setTyped(e.target.value)}
          autoFocus
          placeholder="Votre prénom"
          className="btn-pop min-w-0 flex-1 bg-card px-5 py-3.5 font-medium outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          className="btn-pop flex shrink-0 items-center gap-2 bg-ink px-6 py-3.5 font-semibold"
        >
          Commencer
          <ArrowRight size={18} />
        </button>
      </form>
      <p className="mt-4 text-sm text-muted">
        Aucune inscription, aucune donnée envoyée : tout reste sur votre appareil.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Tableau de bord                                                     */
/* ------------------------------------------------------------------ */

/** Jauge circulaire du niveau de préparation */
function ReadinessGauge({ value }: { value: number }) {
  const r = 62;
  const c = 2 * Math.PI * r;
  const filled = Math.max(0, Math.min(100, value)) / 100;
  const color =
    value >= 75
      ? "var(--color-ok-strong)"
      : value >= 45
        ? "var(--color-sun)"
        : "var(--color-ko-strong)";
  return (
    <div className="relative flex items-center justify-center">
      <svg width="160" height="160" viewBox="0 0 160 160" aria-hidden="true">
        <circle cx="80" cy="80" r={r} fill="none" stroke="var(--color-line)" strokeWidth="10" />
        <circle
          cx="80"
          cy="80"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${c * filled} ${c}`}
          transform="rotate(-90 80 80)"
          style={{ transition: "stroke-dasharray 0.8s cubic-bezier(0.2,0.8,0.2,1)" }}
        />
      </svg>
      <div className="absolute text-center">
        <p className="tabular font-display text-4xl font-bold leading-none">{Math.round(value)}</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted">sur 100</p>
      </div>
    </div>
  );
}

function Metric({
  icon: Icon,
  label,
  value,
  sub,
  accent,
}: {
  icon: typeof Target;
  label: string;
  value: string;
  sub?: string;
  accent?: string;
}) {
  return (
    <div className="card-pop p-4">
      <div className="flex items-center gap-2 text-muted">
        <Icon size={15} strokeWidth={2} />
        <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
      </div>
      <p
        className="tabular mt-2 font-display text-3xl font-bold leading-none"
        style={accent ? { color: accent } : undefined}
      >
        {value}
      </p>
      {sub && <p className="mt-1.5 text-sm text-muted">{sub}</p>}
    </div>
  );
}

export default function Dashboard() {
  const progress = useProgress();
  const { name, grade, hydrated } = usePrefs();
  const [showFirstRun, setShowFirstRun] = useState(false);
  const [autoOpened, setAutoOpened] = useState(false);

  if (hydrated && !name && !autoOpened) {
    setShowFirstRun(true);
    setAutoOpened(true);
  }
  if (!hydrated) return <div className="card-pop h-64 animate-pulse" />;
  if (showFirstRun || !name) return <FirstRun onDone={() => setShowFirstRun(false)} />;

  /* --- Calculs du tableau de bord --- */
  const subjects = SUBJECTS.map((s) => ({ meta: s, chapters: chaptersFor(s.id, grade) }));
  const active = subjects.filter((s) => s.chapters.length > 0);

  const allQuestions = active.flatMap((s) => s.chapters.flatMap((c) => c.exercises));
  const answered = allQuestions.filter((q) => progress.exercises[q.id]);
  const correct = allQuestions.filter((q) => progress.exercises[q.id]?.correct);
  const successRate = answered.length ? Math.round((correct.length / answered.length) * 100) : 0;
  const coverage = allQuestions.length ? correct.length / allQuestions.length : 0;

  // Niveau de préparation : couverture pondérée par la réussite. Plafonné tant
  // qu'aucun examen blanc n'a été passé — on ne peut pas être prêt sans s'être testé.
  const mockDone = Object.keys(progress.dailies).length > 0;
  const raw = coverage * 100 * (0.5 + (successRate / 100) * 0.5);
  const readiness = mockDone ? raw : Math.min(raw, 70);

  const due = dueReviews(progress).length;
  const daily = progress.dailies[todayKey()];

  // Thèmes les plus fragiles
  const weak = active
    .flatMap((s) => s.chapters)
    .map((c) => {
      const tried = c.exercises.filter((e) => progress.exercises[e.id]);
      const ok = c.exercises.filter((e) => progress.exercises[e.id]?.correct);
      return {
        chapter: c,
        tried: tried.length,
        rate: tried.length ? ok.length / tried.length : -1,
      };
    })
    .filter((x) => x.tried >= 3 && x.rate < 0.75)
    .sort((a, b) => a.rate - b.rate)
    .slice(0, 3);

  // Activité des 14 derniers jours
  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (13 - i));
    return progress.activity[todayKey(d)]?.ex ?? 0;
  });
  const peak = Math.max(1, ...days);

  const nextAction =
    due > 0
      ? {
          href: "/revision",
          label: `Revoir ${due} question${due > 1 ? "s" : ""}`,
          why: "Ces questions vous ont piégé — elles reviennent aujourd'hui.",
        }
      : !daily
        ? {
            href: "/defi",
            label: "Session d'entraînement",
            why: "Série ciblée sur les thèmes que vous maîtrisez le moins.",
          }
        : {
            href: "/controle",
            label: "Lancer un examen blanc",
            why: "Conditions réelles : questions chronométrées, note à la fin.",
          };

  return (
    <div className="fade-up">
      {/* En-tête */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-muted">Bonjour {name}</p>
          <h1 className="font-display text-3xl font-bold leading-tight md:text-4xl">
            Votre préparation
          </h1>
        </div>
        <Link
          href={nextAction.href}
          className="btn-pop flex items-center gap-2 bg-ink px-6 py-3 font-semibold"
        >
          {nextAction.label}
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Jauge + métriques */}
      <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(280px,340px)_1fr]">
        <div className="card-pop flex flex-col items-center justify-center p-6">
          <ReadinessGauge value={readiness} />
          <p className="mt-4 text-center font-display text-lg font-semibold">
            {readiness >= 75
              ? "Vous êtes prêt"
              : readiness >= 45
                ? "En bonne voie"
                : "Préparation à consolider"}
          </p>
          <p className="mt-1 max-w-[28ch] text-center text-sm leading-relaxed text-muted">
            {mockDone
              ? "Estimation fondée sur vos réponses et vos examens blancs."
              : "Plafonné à 70 tant qu'aucun examen blanc n'a été passé."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:content-start">
          <Metric
            icon={TrendingUp}
            label="Réussite"
            value={answered.length ? `${successRate} %` : "—"}
            sub={`${correct.length} bonnes sur ${answered.length} traitées`}
            accent={successRate >= 75 ? "var(--color-ok-strong)" : undefined}
          />
          <Metric
            icon={Layers}
            label="Couverture"
            value={`${Math.round(coverage * 100)} %`}
            sub={`${correct.length} / ${allQuestions.length} questions acquises`}
          />
          <Metric
            icon={BrainCircuit}
            label="À revoir"
            value={String(due)}
            sub={due ? "Programmé pour aujourd'hui" : "Rien en attente"}
            accent={due > 0 ? "var(--color-sun)" : undefined}
          />
          <Metric
            icon={CalendarDays}
            label="Régularité"
            value={`${progress.streak.current} j`}
            sub={`Record : ${progress.streak.best} jours`}
          />

          <div className="card-pop col-span-2 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                Activité — 14 derniers jours
              </span>
              <span className="tabular text-xs text-muted">
                {days.reduce((a, b) => a + b, 0)} questions
              </span>
            </div>
            <div className="mt-3 flex h-16 items-end gap-1">
              {days.map((v, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-xl transition-all"
                  style={{
                    height: `${Math.max(4, (v / peak) * 100)}%`,
                    background: v ? "var(--color-zest)" : "var(--color-line)",
                    opacity: v ? 0.35 + (v / peak) * 0.65 : 1,
                  }}
                  title={`${v} question${v > 1 ? "s" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action recommandée */}
      <Link
        href={nextAction.href}
        className={`hero-card mt-4 flex items-center justify-between gap-4 bg-card p-5 ${
          !daily && due === 0 ? "daily-glow" : ""
        }`}
      >
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zest-soft text-ok-strong">
            <Target size={22} strokeWidth={2} />
          </span>
          <div>
            <p className="font-display text-lg font-semibold">{nextAction.label}</p>
            <p className="text-sm text-muted">{nextAction.why}</p>
          </div>
        </div>
        <ArrowRight size={20} className="shrink-0 text-muted" />
      </Link>

      {/* Points faibles */}
      {weak.length > 0 && (
        <section className="mt-6">
          <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
            <CircleAlert size={19} className="text-sun-strong" />
            À travailler en priorité
          </h2>
          <div className="stagger mt-3 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {weak.map(({ chapter, rate, tried }) => (
              <Link
                key={chapter.slug}
                href={`/chapitre/${chapter.slug}`}
                className="hero-card bg-card p-4"
              >
                <p className="font-semibold leading-snug">{chapter.title}</p>
                <p className="tabular mt-1 text-sm text-ko-strong">
                  {Math.round(rate * 100)} % de réussite
                </p>
                <div className="mt-2.5 h-1.5 overflow-hidden rounded-xl bg-line">
                  <div
                    className="h-full rounded-xl bg-ko-strong transition-all duration-700"
                    style={{ width: `${Math.max(3, rate * 100)}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-muted">{tried} questions traitées</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Thèmes */}
      <section className="mt-6">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-xl font-semibold">Les thèmes</h2>
          <Link
            href="/controle"
            className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink"
          >
            <TimerReset size={15} />
            Examen blanc
          </Link>
        </div>
        <div className="stagger mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {subjects.map(({ meta, chapters }) => {
            const total = chapters.reduce((n, c) => n + c.exercises.length, 0);
            const done = chapters.reduce(
              (n, c) => n + c.exercises.filter((e) => progress.exercises[e.id]?.correct).length,
              0
            );
            const available = chapters.length > 0;
            const inner = (
              <>
                <div className="flex items-start justify-between">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: meta.tint, color: meta.from }}
                  >
                    <ChapterIcon name={meta.icon} size={20} strokeWidth={2} />
                  </span>
                  {available ? (
                    <span className="tabular text-xs font-semibold text-muted">
                      {done}/{total}
                    </span>
                  ) : (
                    <span className="rounded-xl border border-line px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                      bientôt
                    </span>
                  )}
                </div>
                <p className="mt-3 font-display text-base font-semibold leading-tight">
                  {meta.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{meta.tagline}</p>
                {available && (
                  <div className="mt-3 h-1.5 overflow-hidden rounded-xl bg-line">
                    <div
                      className="h-full rounded-xl transition-all duration-700"
                      style={{
                        width: `${total ? Math.max(3, (done / total) * 100) : 0}%`,
                        background: meta.from,
                      }}
                    />
                  </div>
                )}
              </>
            );
            return available ? (
              <Link key={meta.id} href={`/matiere/${meta.id}`} className="hero-card bg-card p-4">
                {inner}
              </Link>
            ) : (
              <div key={meta.id} className="hero-card bg-card p-4 opacity-55">
                {inner}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
