type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

function Button({
  children,
  className = "",
  variant = "default",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default: "bg-amber-400 text-slate-950 hover:bg-amber-300",
    outline:
      "border border-white/20 bg-transparent text-white hover:bg-white/10",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}


export { Button };
export type { ButtonProps };