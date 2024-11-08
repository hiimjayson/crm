import { XCircle } from "lucide-react";
import { useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  left?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}
export function Input({ className, left, right, ...props }: Props) {
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex items-center justify-center w-full max-w-[300px] h-10 px-4 py-2 border border-gray-400 rounded-lg data-[focus=true]:border-blue-500 data-[hover=true]:border-blue-500 transition-colors"
      data-focus={focus}
      data-hover={hover}
    >
      {left != null ? <div className="mr-2">{left}</div> : null}
      <input
        className={`flex flex-1 outline-none text-sm text-gray-700 placeholder:text-gray-500 ${className}`}
        {...props}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      {right != null ? <div className="ml-2">{right}</div> : null}
    </div>
  );
}

Input.ClearIcon = function ClearIcon() {
  return (
    <XCircle
      fill="currentColor"
      stroke="white"
      className="size-6 text-gray-400"
    />
  );
};
