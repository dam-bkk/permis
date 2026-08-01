"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, X, ChevronLeft, ChevronRight, TriangleAlert, Info } from "lucide-react";
import { FAMILLES, PANNEAUX, type Panneau, type PanneauFamille } from "@/data/panneaux";

/* Chaque famille a son ton : lisible (AAA) sur le fond sombre. */
const TON: Record<PanneauFamille, { tint: string; strong: string }> = {
  danger: { tint: "bg-nombres-tint", strong: "text-nombres-strong" },
  priorite: { tint: "bg-sun-tint", strong: "text-sun-strong" },
  interdiction: { tint: "bg-ko-tint", strong: "text-ko-strong" },
  obligation: { tint: "bg-geometrie-tint", strong: "text-geometrie-strong" },
  indication: { tint: "bg-geometrie-tint", strong: "text-geometrie-strong" },
  direction: { tint: "bg-donnees-tint", strong: "text-donnees-strong" },
  temporaire: { tint: "bg-sun-tint", strong: "text-sun-strong" },
};

const cle = (p: Panneau) => `${p.code}-${p.nom}`;

/** Recherche insensible aux accents et à la casse. */
const normalise = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default function PanneauxPage() {
  const [query, setQuery] = useState("");
  const [familles, setFamilles] = useState<PanneauFamille[]>([]);
  const [ouvert, setOuvert] = useState<string | null>(null);

  const comptes = useMemo(() => {
    const m = {} as Record<PanneauFamille, number>;
    for (const f of FAMILLES) m[f.id] = 0;
    for (const p of PANNEAUX) m[p.famille] += 1;
    return m;
  }, []);

  const liste = useMemo(() => {
    const q = normalise(query.trim());
    return PANNEAUX.filter((p) => {
      if (familles.length > 0 && !familles.includes(p.famille)) return false;
      if (!q) return true;
      return (
        normalise(p.nom).includes(q) ||
        normalise(p.code).includes(q) ||
        normalise(p.sens).includes(q)
      );
    });
  }, [query, familles]);

  const index = ouvert ? liste.findIndex((p) => cle(p) === ouvert) : -1;
  const courant = index >= 0 ? liste[index] : null;

  // Échap ferme la fiche, les flèches passent au panneau suivant
  useEffect(() => {
    if (!courant) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOuvert(null);
      if (e.key === "ArrowRight" && index < liste.length - 1)
        setOuvert(cle(liste[index + 1]));
      if (e.key === "ArrowLeft" && index > 0) setOuvert(cle(liste[index - 1]));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [courant, index, liste]);

  const bascule = (id: PanneauFamille) =>
    setFamilles((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));

  return (
    <div className="rise mx-auto w-full max-w-[1600px]">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-extrabold md:text-3xl">
            Les panneaux
          </h1>
          <p className="mt-1 text-sm font-bold text-muted">
            {PANNEAUX.length} panneaux officiels, leur sens et le piège qui va
            avec. Touche un panneau pour ouvrir sa fiche.
          </p>
        </div>

        <label className="relative w-full sm:w-80">
          <Search
            size={17}
            strokeWidth={2.5}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Chercher un nom ou un code (A1a, STOP…)"
            aria-label="Chercher un panneau"
            className="w-full rounded-full border border-line bg-card py-2.5 pl-10 pr-4 text-sm font-semibold text-ink placeholder:text-muted focus:border-line-strong focus:outline-none"
          />
        </label>
      </div>

      {/* Filtres par famille */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => setFamilles([])}
          className={`btn-pop px-3.5 py-1.5 text-xs font-extrabold ${
            familles.length === 0
              ? "bg-zest-soft text-zest"
              : "bg-card text-muted hover:text-ink"
          }`}
        >
          Tout ({PANNEAUX.length})
        </button>
        {FAMILLES.map((f) => {
          const actif = familles.includes(f.id);
          const ton = TON[f.id];
          return (
            <button
              key={f.id}
              onClick={() => bascule(f.id)}
              aria-pressed={actif}
              title={f.forme}
              className={`btn-pop px-3.5 py-1.5 text-xs font-extrabold ${
                actif ? `${ton.tint} ${ton.strong}` : "bg-card text-muted hover:text-ink"
              }`}
            >
              {f.label} ({comptes[f.id]})
            </button>
          );
        })}
      </div>

      {/* Grille */}
      {liste.length === 0 ? (
        <p className="card-pop mt-6 p-8 text-center font-bold text-muted">
          Aucun panneau ne correspond à « {query} ».
        </p>
      ) : (
        <div className="stagger mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {liste.map((p) => (
            <button
              key={cle(p)}
              onClick={() => setOuvert(cle(p))}
              className="hero-card flex flex-col items-center gap-2 bg-card p-3 text-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-lg bg-raised p-1.5 md:h-20 md:w-20">
                {p.svg}
              </span>
              <span className="text-[13px] font-extrabold leading-tight text-ink">
                {p.nom}
              </span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold tabular ${
                  TON[p.famille].tint
                } ${TON[p.famille].strong}`}
              >
                {p.code}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Fiche de détail */}
      {courant && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          style={{ background: "rgba(8, 12, 24, 0.55)" }}
          onClick={() => setOuvert(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={courant.nom}
            onClick={(e) => e.stopPropagation()}
            className="card-pop rise w-full max-w-2xl p-5 md:p-7"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-raised p-2 md:h-24 md:w-24">
                {courant.svg}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-extrabold tabular ${
                      TON[courant.famille].tint
                    } ${TON[courant.famille].strong}`}
                  >
                    {courant.code}
                  </span>
                  <span className="text-[11px] font-extrabold uppercase tracking-wide text-muted">
                    {FAMILLES.find((f) => f.id === courant.famille)?.label}
                  </span>
                </div>
                <h2 className="mt-1 font-display text-xl font-extrabold leading-tight md:text-2xl">
                  {courant.nom}
                </h2>
                <p className="mt-1.5 text-sm font-semibold text-ink">
                  {courant.sens}
                </p>
              </div>
              <button
                onClick={() => setOuvert(null)}
                aria-label="Fermer"
                className="rounded-full p-2 text-muted hover:bg-zest-soft hover:text-ink"
              >
                <X size={18} strokeWidth={2.5} />
              </button>
            </div>

            {courant.detail && (
              <div className="mt-4 flex gap-2.5 rounded-xl bg-raised p-3.5">
                <Info
                  size={16}
                  strokeWidth={2.5}
                  className="mt-0.5 shrink-0 text-geometrie-strong"
                />
                <p className="text-sm font-semibold text-muted">{courant.detail}</p>
              </div>
            )}

            {courant.piege && (
              <div className="mt-2.5 flex gap-2.5 rounded-xl bg-sun-tint p-3.5">
                <TriangleAlert
                  size={16}
                  strokeWidth={2.5}
                  className="mt-0.5 shrink-0 text-sun-strong"
                />
                <p className="text-sm font-semibold text-ink">
                  <span className="font-extrabold text-sun-strong">Le piège : </span>
                  {courant.piege}
                </p>
              </div>
            )}

            <div className="mt-5 flex items-center justify-between">
              <button
                onClick={() => index > 0 && setOuvert(cle(liste[index - 1]))}
                disabled={index <= 0}
                className="btn-pop flex items-center gap-1 bg-card px-3.5 py-2 text-xs font-extrabold text-ink disabled:opacity-40"
              >
                <ChevronLeft size={15} strokeWidth={2.5} />
                Précédent
              </button>
              <span className="text-xs font-bold tabular text-muted">
                {index + 1} / {liste.length}
              </span>
              <button
                onClick={() =>
                  index < liste.length - 1 && setOuvert(cle(liste[index + 1]))
                }
                disabled={index >= liste.length - 1}
                className="btn-pop flex items-center gap-1 bg-card px-3.5 py-2 text-xs font-extrabold text-ink disabled:opacity-40"
              >
                Suivant
                <ChevronRight size={15} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
