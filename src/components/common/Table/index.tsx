import { Table as TableBase } from "@/components/atom/Table";
import { Cell, Column, Row } from "./types";
import { useEffect, useRef, useState } from "react";
import { Chip } from "@/components/atom/Chip";
import { getColumnColorText } from "./utils";

interface Props<Record> {
  columns: Column<Record>[];
  rows: Row<Record>[];
}

export function Table<Record = unknown>({ columns, rows }: Props<Record>) {
  const tableRef = useRef<HTMLDivElement>(null);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(false);

  const checkScroll = () => {
    console.log(tableRef.current);

    if (tableRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tableRef.current;
      setShowLeftGradient(scrollLeft > 0);
      setShowRightGradient(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const tableElement = tableRef.current;
    if (tableElement) {
      checkScroll();
      window.addEventListener("resize", checkScroll);
      return () => {
        window.removeEventListener("resize", checkScroll);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative">
      <div
        ref={tableRef}
        className="overflow-x-auto z-10"
        onScroll={checkScroll}
      >
        <TableBase>
          <TableBase.THead className="bg-white">
            <TableBase.Tr>
              {columns.map((column) => (
                <TableBase.Th
                  key={column.key as string}
                  style={{ width: column.width ?? 140 }}
                >
                  {column.title}
                </TableBase.Th>
              ))}
            </TableBase.Tr>
          </TableBase.THead>
          <TableBase.TBody>
            {rows.map((row) => (
              <TableBodyRow key={row.key} row={row} columns={columns} />
            ))}
          </TableBase.TBody>
        </TableBase>
      </div>

      {showLeftGradient && (
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      )}
      {showRightGradient && (
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      )}
    </div>
  );
}

function TableBodyRow<Record>({
  row,
  columns,
}: {
  row: Row<Record>;
  columns: Column<Record>[];
}) {
  const visibleCells = columns
    .map((column) => ({
      cell: row.cells.find((cell) => cell.key === column.key),
      column,
    }))
    .filter((x) => x.cell != null);

  const renderCellValue = (cell: Cell<Record>, column: Column<Record>) => {
    if (column.variants) {
      const variant = column.variants.find((x) => x.value === cell.value);
      const value = variant?.label ?? cell.value;

      if (column.component === "chip") {
        return <Chip color={variant?.color}>{value}</Chip>;
      } else {
        return (
          <p className={`font-medium ${getColumnColorText(variant?.color)}`}>
            {value}
          </p>
        );
      }
    }

    return cell.value;
  };

  return (
    <TableBase.Tr>
      {visibleCells.map(({ cell, column }) => (
        <TableBase.Td key={cell!.key as string}>
          {renderCellValue(cell!, column)}
        </TableBase.Td>
      ))}
    </TableBase.Tr>
  );
}
