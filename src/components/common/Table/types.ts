export interface Column<Record> {
  key: keyof Record;
  title: string;
  width?: number;
}

export interface Row<Record> {
  key: string;
  cells: Cell<Record>[];
}

export interface Cell<Record> {
  key: keyof Record;
  value: string;
}
