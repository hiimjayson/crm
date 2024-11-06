interface SectionProps {
  children: React.ReactNode;
}
function Section({ children }: SectionProps) {
  return <ul className="w-full px-8 py-6 bg-gray-50">{children}</ul>;
}

interface ItemProps {
  label: string;
  children: React.ReactNode;
}
function Item({ label, children }: ItemProps) {
  return (
    <li className="flex items-start w-full gap-2">
      <p className="w-[170px] m-2 text-sm font-medium text-gray-600">{label}</p>
      {children}
    </li>
  );
}

export const Control = { Section, Item };
