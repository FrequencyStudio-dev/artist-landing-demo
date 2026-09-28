export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
        <a
          href="#inicio"
          className="font-heading text-sm font-bold uppercase tracking-[0.12em]"
        >
          Lucía Varela
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#musica"
            className="font-sans text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
          >
            Música
          </a>

          <a
            href="#en-vivo"
            className="font-sans text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
          >
            En vivo
          </a>

          <a
            href="#contacto"
            className="font-sans text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
          >
            Contacto
          </a>

          <a
            href="#lanzamiento"
            className="bg-accent px-5 py-3 font-sans text-xs font-medium uppercase tracking-[0.12em] text-black transition-opacity hover:opacity-85"
          >
            Escuchar música
          </a>
        </nav>
      </div>
    </header>
  );
}