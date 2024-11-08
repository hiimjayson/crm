interface Props {
  value: string;
  options: string[] | { label: string; value: string }[];
  onChange: (value: string) => void;
}

export function Select({ value, options, onChange }: Props) {
  const _options = options.map((option) =>
    typeof option === "string" ? { label: option, value: option } : option
  );

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full max-w-[300px] px-3 h-10 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-sm text-gray-700"
    >
      {_options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
