interface SectionRuleProps {
  number: string;
  title: string;
  date: string;
}

export function SectionRule({ number, title, date }: SectionRuleProps) {
  return (
    <div className="section-rule">
      <span className="sec-num">{number}</span>
      <span className="sec-title">{title}</span>
      <span className="sec-line" />
      <span className="sec-date">{date}</span>
    </div>
  );
}
