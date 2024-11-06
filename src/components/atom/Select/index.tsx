interface Props {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export function Select({ value, options, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full max-w-[300px] px-3 h-10 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-sm text-gray-600"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
