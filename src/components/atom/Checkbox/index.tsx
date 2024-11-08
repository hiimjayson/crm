import { Check } from "lucide-react";

interface Props {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  children?: React.ReactNode;
  className?: string;
}
export function Checkbox({ checked, onChange, children, className }: Props) {
  return (
    <button
      className={`h-10 flex items-center gap-2 text-base text-gray-400 hover:text-gray-500 ${
        checked ? "!text-gray-700" : null
      } transition-colors ${className}`}
      onClick={() => onChange?.(!checked)}
    >
      <div
        className={`size-4 border border-gray-400 rounded-sm flex items-center justify-center mt-1 transition-colors ${
          checked ? "bg-blue-500 !border-blue-500" : null
        }`}
      >
        {checked ? <Check className="size-4 text-white" /> : null}
      </div>
      {children}
    </button>
  );
}
