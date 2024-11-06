import { ColumnVariantColor } from "./types";

const backgroundColorMap = {
  gray: "bg-gray-200",
  red: "bg-red-200",
  green: "bg-green-200",
  blue: "bg-blue-200",
  yellow: "bg-yellow-200",
  purple: "bg-purple-200",
} as const;
const textColorMap = {
  gray: "text-gray-700",
  red: "text-red-700",
  green: "text-green-700",
  blue: "text-blue-700",
  yellow: "text-yellow-700",
  purple: "text-purple-700",
} as const;

export function getColumnColorBackground(color?: ColumnVariantColor) {
  return backgroundColorMap[color ?? "gray"];
}

export function getColumnColorText(color?: ColumnVariantColor) {
  return textColorMap[color ?? "gray"];
}
