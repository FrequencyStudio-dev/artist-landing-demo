const releases = [
  {
    title: "Freceuncia",
    type: "EP",
    year: "2022",
    cover: "/music/frecuencia.png",
  },
  {
    title: "Señales",
    type: "Single",
    year: "2023",
    cover: "/music/señales.jpg",
  },
  {
    title: "Luz Artificial",
    type: "LP",
    year: "2025",
    cover: "/featured-release/luz-artificial.png",
  },
];

export default function SelectedMusic() {
  return (
    <section
      id="musica"
      className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="font-heading text-4xl font-bold uppercase tracking-[-0.03em] md:text-6xl">
            Música
          </h2>

          <span className="hidden font-sans text-[10px] uppercase tracking-[0.2em] text-muted md:block">
            Selección
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {releases.map((release) => (
            <article key={release.title}>
               <div className="aspect-square overflow-hidden bg-surface-high">
                  <img
                    src={release.cover}
                    alt={`Portada de ${release.title}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase">
                    {release.title}
                  </h3>

                  <p className="mt-2 font-sans text-xs uppercase tracking-[0.15em] text-muted">
                    {release.type} · {release.year}
                  </p>
                </div>

                <a
                  href="#"
                  className="shrink-0 font-sans text-[10px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
                >
                  Escuchar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}