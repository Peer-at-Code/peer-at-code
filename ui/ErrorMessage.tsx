export default function ErrorMessage({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-warning">{children}</p>;
}
