interface SectionHeaderProps {
  number: string;
  title: string;
  caption: string;
}

export function SectionHeader({ number, title, caption }: SectionHeaderProps) {
  return (
    <div className="section-head">
      <span className="section-head-no">{number}</span>
      <h2 className="section-head-title">{title}</h2>
      <span className="section-head-line" />
      <span className="section-head-caption">{caption}</span>
    </div>
  );
}
