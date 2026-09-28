export default function ArtistIntro() {
  return (
    <section className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.35fr_0.65fr] md:gap-16">
        <div className="space-y-6">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted">
              Ciudad
            </p>
            <p className="mt-2 font-sans text-sm">
               Montevideo, Uruguay
            </p>
          </div>

          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted">
              Género
            </p>
            <p className="mt-2 font-sans text-sm">
              Pop · Electrónica
            </p>
          </div>
        </div>

        <div>
          <p className="mb-8 font-sans text-xs uppercase tracking-[0.2em] text-muted">
            Sobre el artista
          </p>

          <p className="max-w-3xl font-heading text-2xl leading-tight md:text-4xl md:leading-tight">
            Lucía Varela es una artista uruguaya que combina pop y electrónica en canciones de atmósfera 
            íntima y producción contemporánea. Su propuesta explora melodías envolventes, texturas electrónicas 
            y una identidad sonora propia.
          </p>

        </div>
      </div>
    </section>
  );
}