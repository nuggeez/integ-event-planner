/* eslint-disable @typescript-eslint/no-explicit-any */

export default function DashboardCard(props: {
  title: any;
  description: any;
  subtitle: any;
  icon: any;
  className?: any;
}) {
  const {
    title,
    description,
    subtitle,
    icon,
    className = "flex flex-col gap-4 rounded-3xl bg-blue-300/30 p-8 justify-center",
  } = props;

  return (
    <div className={className}>
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex flex-row items-end justify-between gap-4">
        <h1 className="text-2xl font-bold">{subtitle}</h1>
        <div className="flex flex-row gap-4">
          <p>{description}</p>
          {icon}
        </div>
      </div>
    </div>
  );
}
