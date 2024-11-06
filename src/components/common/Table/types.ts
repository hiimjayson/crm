export type ColumnComponent = "text" | "chip";

export type ColumnVariantColor =
  | "gray"
  | "red"
  | "green"
  | "blue"
  | "yellow"
  | "purple";

export interface Column<Record> {
  key: keyof Record;
  title: string;

  component?: ColumnComponent;
  width?: number;
  variants?: {
    color: ColumnVariantColor;
    label?: string;
    value: string;
  }[];
}

export interface Row<Record> {
  key: string;
  cells: Cell<Record>[];
}

export interface Cell<Record> {
  key: keyof Record;
  value: string;
}
