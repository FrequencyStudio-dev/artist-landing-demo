export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 md:px-8 md:pt-40"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="relative z-10">
          <p className="mb-6 font-sans text-xs uppercase tracking-[0.2em] text-muted">
            Pop · Electrónica · Montevideo, Uruguay
          </p>

          <h1 className="font-heading text-[clamp(3.5rem,9vw,7rem)] font-bold uppercase leading-[0.88] tracking-[-0.05em]">
            Lucía
            <br />
            Varela
          </h1>

          <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-muted md:text-xl">
            Canciones de pulso íntimo, melodías envolventes y una mirada contemporánea sobre el pop.
          </p>

          <a
            href="#lanzamiento"
            className="mt-10 inline-flex bg-accent px-6 py-4 font-sans text-xs font-medium uppercase tracking-[0.15em] text-black transition-opacity hover:opacity-85"
          >
            Escuchar música
          </a>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden bg-surface-high lg:aspect-[4/5]">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/hero/hero.png"
              alt="Lucía Varela"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}