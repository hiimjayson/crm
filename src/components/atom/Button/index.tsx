import { ButtonHTMLAttributes } from "react";
import { match } from "ts-pattern";

export type ButtonVariant = "primary" | "secondary" | "danger";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  left?: React.ReactNode;
  variant?: ButtonVariant;
  outline?: boolean;

  children: React.ReactNode;
}
export function Button({
  children,
  variant = "primary",
  outline = false,
  left,
  ...props
}: Props) {
  return (
    <button
      className={`flex items-center gap-2 font-semibold py-2 px-4 rounded-md border transition-all ${getVariantStyle(
        variant,
        outline
      )} ${props.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      {...props}
    >
      {left}
      {children}
    </button>
  );
}

function getVariantStyle(variant: ButtonVariant, outline: boolean) {
  return match(variant)
    .with("primary", () =>
      outline
        ? "border-blue-200 bg-white hover:bg-blue-50 text-blue-700"
        : "border-blue-600 bg-blue-600 hover:bg-blue-700 text-white"
    )
    .with("secondary", () =>
      outline
        ? "border-gray-300 bg-white hover:bg-gray-100 text-gray-800"
        : "border-gray-200 bg-gray-100 hover:bg-gray-200 text-gray-800"
    )
    .with("danger", () =>
      outline
        ? "border-red-200 bg-white hover:bg-red-50 text-red-600"
        : "border-red-600 bg-red-600 hover:bg-red-700 text-white"
    )
    .exhaustive();
}
