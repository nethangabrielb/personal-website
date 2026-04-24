interface TechBadgeProps {
  icon?: React.ElementType;
  label: string;
  fill: string;
  className?: string;
}

export const TechBadge = ({ icon: Icon, label, fill, className }: TechBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 bg-muted text-primary text-sm font-mono px-2 py-0.5 rounded-md ${className ?? ""}`}
    >
      {Icon && (
        <Icon
          className="size-3.5 shrink-0"
          style={{
            color: fill.startsWith("#") ? fill : `#${fill}`,
          }}
        />
      )}
      {label}
    </span>
  );
};
