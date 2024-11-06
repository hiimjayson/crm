import { ColumnVariantColor } from "@/components/common/Table/types";
import {
  getColumnColorBackground,
  getColumnColorText,
} from "@/components/common/Table/utils";
import { PropsWithChildren } from "react";
interface Props extends PropsWithChildren {
  className?: string;
  color?: ColumnVariantColor;
}
export function Chip({
  className = "",
  children,
  color = "gray",
  ...props
}: Props) {
  return (
    <div
      className={`flex items-center justify-center w-fit rounded-full ${getColumnColorBackground(
        color
      )} font-semibold ${getColumnColorText(
        color
      )} px-2 h-7 text-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
