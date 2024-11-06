import { ColumnVariantColor } from "./types";

const backgroundColorMap = {
  gray: "bg-gray-100",
  red: "bg-red-100",
  green: "bg-green-100",
  blue: "bg-blue-100",
  yellow: "bg-yellow-100",
  purple: "bg-purple-100",
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
