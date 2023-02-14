export default function Card({ title, data }: { title: string; data: string }) {
  return (
    <div className="flex w-full flex-col rounded-lg border-2 border-highlight-primary bg-primary-700 p-4 shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted">{data}</p>
    </div>
  );
}
