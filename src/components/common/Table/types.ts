import { Chip } from "@/components/atom/Chip";
import { ComponentProps } from "react";

export interface Column<Record> {
  key: keyof Record;
  title: string;

  width?: number;
  chipVariant?: {
    color: ComponentProps<typeof Chip>["color"];
    value: string;
  };
}

export interface Row<Record> {
  key: string;
  cells: Cell<Record>[];
}

export interface Cell<Record> {
  key: keyof Record;
  value: string;
}
