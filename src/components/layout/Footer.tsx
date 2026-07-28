import Container from './Container';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <Container className="flex items-center justify-between py-6">
        <p className="meta-label text-muted-foreground">Fengmin — 2026</p>
        <a href="#top" className="meta-label link-ink text-muted-foreground">
          Back to top ↑
        </a>
      </Container>
    </footer>
  );
}
