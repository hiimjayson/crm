interface SectionProps {
  children: React.ReactNode;
}
function Section({ children }: SectionProps) {
  return <ul className="w-full px-8 py-6 bg-gray-50 space-y-5">{children}</ul>;
}

interface ItemProps {
  label: string;
  children: React.ReactNode;
}
function Item({ label, children }: ItemProps) {
  return (
    <li className="flex w-full">
      <label className="flex items-start w-full gap-2">
        <p className="w-[170px] m-[10px] text-sm font-semibold text-gray-700">
          {label}
        </p>
        {children}
      </label>
    </li>
  );
}

export const Control = { Section, Item };
