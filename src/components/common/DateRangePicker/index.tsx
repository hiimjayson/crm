interface Props {
  value: [Date | null, Date | null];
  onChange: (value: [Date | null, Date | null]) => void;
}

export function DateRangePicker({ value, onChange }: Props) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="date"
        value={value[0]?.toISOString().split("T")[0] || ""}
        onChange={(e) => {
          const newDate = e.target.value ? new Date(e.target.value) : null;
          onChange([newDate, value[1]]);
        }}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span>~</span>
      <input
        type="date"
        value={value[1]?.toISOString().split("T")[0] || ""}
        onChange={(e) => {
          const newDate = e.target.value ? new Date(e.target.value) : null;
          onChange([value[0], newDate]);
        }}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
