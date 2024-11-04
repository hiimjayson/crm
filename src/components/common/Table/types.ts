export interface Column {
  key: string;
  title: string;
  minWidth?: number;
}

export interface Row {
  key: string;
  cells: Cell[];
}

export interface Cell {
  key: string;
  value: string;
}
