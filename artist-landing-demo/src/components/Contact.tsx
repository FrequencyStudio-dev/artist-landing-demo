export default function Contact() {
  return (
    <section
      id="contacto"
      className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-6 font-sans text-xs uppercase tracking-[0.2em] text-muted">
            Contratación / Contacto
          </p>

          <h2 className="font-heading text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em] md:text-7xl">
            ¿Querés trabajar
            <br />
            con Lucía?
          </h2>

          <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-muted md:text-lg">
            Para contrataciones, shows y consultas generales, escribinos.
          </p>

          <a
            href="mailto:booking@koravandenberg.com"
            className="mt-10 inline-block font-heading text-xl font-bold uppercase tracking-[-0.02em] transition-colors hover:text-accent md:text-2xl"
          >
            booking@luciavarela.com
          </a>
        </div>

        <div className="mt-20 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-8">
          <a
            href="#"
            className="font-sans text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
          >
            Instagram
          </a>

          <a
            href="#"
            className="font-sans text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
          >
            YouTube
          </a>

          <a
            href="#"
            className="font-sans text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
          >
            Spotify
          </a>
        </div>
      </div>
    </section>
  );
}