import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  left?: React.ReactNode;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}
export function Button({
  children,
  variant = "primary",
  left,
  ...props
}: Props) {
  return (
    <button
      className={`flex items-center gap-2 font-semibold py-2 px-4 rounded-md border transition-colors ${
        variant === "secondary"
          ? "border-gray-200 bg-gray-100 hover:bg-gray-200 text-gray-800"
          : "border-blue-600 bg-blue-600 hover:bg-blue-700 text-white"
      } ${props.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      {...props}
    >
      {left}
      {children}
    </button>
  );
}
