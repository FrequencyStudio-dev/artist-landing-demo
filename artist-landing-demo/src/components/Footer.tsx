export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="font-heading text-sm font-bold uppercase tracking-[0.12em]">
          Lucía Varela
        </p>

        <div className="flex flex-wrap gap-6">
          <a
            href="#"
            className="font-sans text-[10px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
          >
            Instagram
          </a>

          <a
            href="#"
            className="font-sans text-[10px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
          >
            YouTube
          </a>

          <a
            href="#"
            className="font-sans text-[10px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
          >
            Spotify
          </a>
        </div>

        <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-muted">
          © 2026 Lucía Varela. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}