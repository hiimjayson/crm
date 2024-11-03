interface Props {
  title: string;
  description: string;
  actions?: React.ReactNode;

  children: React.ReactNode;
}

export function DashboardLayoutTemplate({
  title,
  description,
  actions,
  children,
}: Props) {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 px-10 py-8">
      <div className="flex flex-row justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">
          {title}
          <br />
          <p className="text-base font-normal text-gray-500">{description}</p>
        </h1>
        {actions}
      </div>
      {children}
    </main>
  );
}
