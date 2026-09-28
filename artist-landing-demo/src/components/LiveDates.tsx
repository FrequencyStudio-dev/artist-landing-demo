const shows = [
  {
    date: "12 OCT 2026",
    venue: "Sala del Museo",
    city: "Montevideo",
    ticketsUrl: "#",
  },
  {
    date: "28 OCT 2026",
    venue: "La Trastienda",
    city: "Montevideo",
    ticketsUrl: "#",
  },
  {
    date: "08 NOV 2026",
    venue: "Niceto Club",
    city: "Buenos Aires, Argentina",
    ticketsUrl: "#",
  },
];

export default function LiveDates() {
  if (shows.length === 0) {
    return null;
  }

  return (
    <section
      id="en-vivo"
      className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-muted">
            Próximas fechas
          </p>

          <h2 className="font-heading text-4xl font-bold uppercase tracking-[-0.03em] md:text-6xl">
            En vivo
          </h2>
        </div>

        <div className="border-t border-white/10">
          {shows.map((show) => (
            <div
              key={`${show.date}-${show.venue}`}
              className="grid gap-4 border-b border-white/10 py-6 md:grid-cols-[0.8fr_1fr_1fr_auto] md:items-center md:gap-8"
            >
              <p className="font-sans text-xs font-medium uppercase tracking-[0.15em]">
                {show.date}
              </p>

              <p className="font-heading text-xl font-bold uppercase">
                {show.venue}
              </p>

              <p className="font-sans text-sm text-muted">{show.city}</p>

              <a
                href={show.ticketsUrl}
                className="w-fit font-sans text-[10px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
              >
                Entradas →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}