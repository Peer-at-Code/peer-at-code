import Icon from './Icon';

export default function Card({ icon, title, data }: { icon: string; title: string; data: string }) {
  return (
    <div className="flex w-full items-center space-x-4 rounded-lg border-2 border-highlight-primary bg-primary-700 p-4 shadow-md">
      <Icon name={icon} className="text-2xl text-muted" />
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted">{data}</p>
      </div>
    </div>
  );
}
