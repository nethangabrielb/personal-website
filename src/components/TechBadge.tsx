import type { SimpleIcon } from "simple-icons";

interface TechBadgeProps {
  icon?: SimpleIcon;
  label: string;
  fill: string;
  className?: string;
}

export const TechBadge = ({ icon, label, fill, className }: TechBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 bg-muted text-primary text-sm font-mono px-2 py-0.5 rounded-md ${className ?? ""}`}
    >
      {icon && (
        <span
          className="size-3.5 shrink-0"
          style={{
            color: fill.startsWith("#") ? fill : `#${fill}`,
            fill: "currentColor",
          }}
          dangerouslySetInnerHTML={{ __html: icon.svg }}
        />
      )}
      {label}
    </span>
  );
};
