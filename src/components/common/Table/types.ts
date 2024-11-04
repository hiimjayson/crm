import { CSSProperties } from "react";

export interface Column {
  key: string;
  title: string;
  minWidth?: CSSProperties["minWidth"];
}

export interface Row {
  key: string;
  cells: Cell[];
}

export interface Cell {
  key: string;
  value: string;
}
