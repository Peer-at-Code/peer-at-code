export default function Card({ title = 'Title', data = 'Data' }) {
  return (
    <div className="flex w-full flex-col rounded-lg border-2 border-highlight-primary bg-primary-700 p-4 shadow-md">
      <p className="font-bold">{title}</p>
      <p className="text-lg">{data}</p>
    </div>
  );
}
