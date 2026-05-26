function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border bg-white shadow ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export {Card, CardContent};