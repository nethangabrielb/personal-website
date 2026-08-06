export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-row">
          <span className="footer-sig">Nethan Gabriel B. Bagasbas</span>
          <div className="footer-links">
            <a href="https://github.com/nethangabrielb" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/nethangabrielb" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/bagasbas-resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
        <p className="footer-colophon">
          © 2026 Nethan Bagasbas · Set in Fraunces &amp; IBM Plex Mono · Built with React, TypeScript &amp; Vite
        </p>
      </div>
    </footer>
  );
}
