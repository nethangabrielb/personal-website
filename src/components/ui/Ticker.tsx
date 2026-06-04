const TICKER_ITEMS = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma",
  "Docker", "Express", "Socket.IO", "Redis", "DigitalOcean", "Vercel",
];

export function Ticker() {
  // Duplicate items for seamless infinite scroll
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="hero-ticker">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="ticker-item">
            {item}
            <span className="ticker-sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
