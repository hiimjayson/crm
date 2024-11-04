export interface Column {
  key: string;
  title: string;
}

export interface Row {
  key: string;
  cells: Cell[];
}

export interface Cell {
  key: string;
  value: string;
}
