export default function FeaturedRelease() {
  return (
    <section
      id="lanzamiento"
      className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-12 font-sans text-xs uppercase tracking-[0.2em] text-muted">
          Lanzamiento destacado
        </p>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
          <div className="aspect-square bg-surface-high">
            <div className="flex h-full items-center justify-center">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
                Portada del lanzamiento
              </span>
            </div>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-muted">
              Album · 2025
            </p>

            <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-none tracking-[-0.03em] md:text-6xl">
              Luz
              <br />
              Artificial
            </h2>

            <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-muted md:text-lg">
              Un álbum de pop electrónico que combina melodías íntimas, texturas sintéticas y 
              una producción contemporánea para explorar las distintas formas de habitar la noche.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#"
                className="border border-white/20 px-5 py-3 font-sans text-xs uppercase tracking-[0.15em] transition-colors hover:border-accent hover:text-accent"
              >
                Spotify
              </a>

              <a
                href="#"
                className="border border-white/20 px-5 py-3 font-sans text-xs uppercase tracking-[0.15em] transition-colors hover:border-accent hover:text-accent"
              >
                Apple Music
              </a>

              <a
                href="#"
                className="border border-white/20 px-5 py-3 font-sans text-xs uppercase tracking-[0.15em] transition-colors hover:border-accent hover:text-accent"
              >
                Bandcamp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}