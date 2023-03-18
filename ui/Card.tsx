import Icon from './Icon';

export default function Card({
  isLoading,
  icon,
  title,
  data
}: {
  isLoading: boolean;
  icon: string;
  title: string;
  data: any;
}) {
  if (isLoading)
    return (
      <div className="flex w-full items-center space-x-4 rounded-lg border-2 border-highlight-primary bg-primary-700 p-4 shadow-md">
        <Icon name={icon} className="text-2xl text-muted" />
        <div className="flex flex-col space-y-4">
          <span className="h-4 w-32 animate-pulse rounded bg-highlight-primary" />
          <span className="h-4 w-24 animate-pulse rounded bg-highlight-primary" />
        </div>
      </div>
    );

  return (
    <div className="flex w-full items-center space-x-4 rounded-lg border-2 border-highlight-primary bg-primary-700 p-4 shadow-md">
      <Icon name={icon} className="text-2xl text-muted" />
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">{data}</h3>
        <p className="text-muted">{title}</p>
      </div>
    </div>
  );
}
