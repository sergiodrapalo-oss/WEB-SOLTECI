interface BadgeProps {
  label: string;
  variant?: 'accent' | 'primary';
}

export default function Badge({ label, variant = 'accent' }: BadgeProps) {
  const styles = {
    accent: 'bg-accent/20 text-accent-dark border border-accent/30',
    primary: 'bg-primary/10 text-primary border border-primary/20',
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles[variant]}`}
    >
      {label}
    </span>
  );
}
