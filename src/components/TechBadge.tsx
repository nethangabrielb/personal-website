import "devicon/devicon.min.css";

interface TechBadgeProps {
  icon: string;
  label: string;
}

export const TechBadge = ({ icon, label }: TechBadgeProps) => {
  return (
    <span className="inline-flex items-center gap-1 bg-muted text-primary text-sm font-mono px-2 py-0.5 rounded-md">
      <i className={`${icon} text-base`} />
      {label}
    </span>
  );
};
