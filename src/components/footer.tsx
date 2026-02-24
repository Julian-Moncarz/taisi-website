export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
      <span>© 2026 Toronto AI Safety Initiative</span>
      <a href="mailto:hello@taisi.ca" className="hover:text-foreground transition-colors">hello@taisi.ca</a>
    </footer>
  );
}
