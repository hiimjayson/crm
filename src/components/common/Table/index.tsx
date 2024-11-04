import { Table as TableBase } from "@/components/atom/Table";
import { Column, Row } from "./types";

interface Props {
  columns: Column[];
  rows: Row[];
}

export function Table({ columns, rows }: Props) {
  return (
    <TableBase>
      <TableBase.THead>
        <TableBase.Tr>
          {columns.map((column) => (
            <TableBase.Th
              key={column.key}
              style={{ minWidth: column.minWidth }}
            >
              {column.title}
            </TableBase.Th>
          ))}
        </TableBase.Tr>
      </TableBase.THead>
      <TableBase.TBody>
        {rows.map((row) => (
          <TableBase.Tr key={row.key}>
            {row.cells.map((cell) => (
              <TableBase.Td key={cell.key}>{cell.value}</TableBase.Td>
            ))}
          </TableBase.Tr>
        ))}
      </TableBase.TBody>
    </TableBase>
  );
}
