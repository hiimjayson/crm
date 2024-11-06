import { useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  left?: React.ReactNode;
  className?: string;
}
export function Input({ className, left, ...props }: Props) {
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex items-center justify-center w-full max-w-[300px] h-10 px-4 py-2 border border-gray-300 rounded-sm data-[focus=true]:border-blue-500 data-[hover=true]:border-blue-500 transition-colors"
      data-focus={focus}
      data-hover={hover}
    >
      {left != null ? <div className="mr-2">{left}</div> : null}
      <input
        className={`flex flex-1 outline-none text-sm text-gray-600 ${className}`}
        {...props}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </div>
  );
}
