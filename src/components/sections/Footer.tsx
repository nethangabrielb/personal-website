import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__socials">
        <a
          href="mailto:contact@nethangabrielb.dev"
          className="footer__link"
          aria-label="Email"
        >
          Email <ArrowUpRight size={14} className="ml-1" />
        </a>
        <a
          href="https://github.com/nethangabrielb"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
          aria-label="GitHub"
        >
          GitHub <ArrowUpRight size={14} className="ml-1" />
        </a>
        <a
          href="https://linkedin.com/in/nethangabrielb"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
          aria-label="LinkedIn"
        >
          LinkedIn <ArrowUpRight size={14} className="ml-1" />
        </a>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} Nethan Bagasbas. All rights reserved.
      </p>
    </footer>
  );
}
