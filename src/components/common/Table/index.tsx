import { Table as TableBase } from "@/components/atom/Table";
import { Column, Row } from "./types";
import { useEffect, useRef, useState } from "react";

interface Props<Record> {
  columns: Column<Record>[];
  rows: Row<Record>[];
  freezedColumns?: number;
}

export function Table<Record = unknown>({
  columns,
  rows,
  freezedColumns = 0,
}: Props<Record>) {
  const tableRef = useRef<HTMLDivElement>(null);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(false);

  const freezedCols = columns.slice(0, freezedColumns);

  const checkScroll = () => {
    console.log(tableRef.current);

    if (tableRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tableRef.current;
      setShowLeftGradient(scrollLeft > 0 && freezedColumns > 0);
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
      {freezedColumns > 0 && (
        <div className="absolute left-0 z-20 h-full bg-white">
          <TableBase
            horizontalScroll={false}
            className="border-r border-gray-200"
          >
            <TableBase.THead className="z-30 bg-white">
              <TableBase.Tr>
                {freezedCols.map((column) => (
                  <TableBase.Th
                    key={column.key as string}
                    style={{ width: column.width ?? 140 }}
                    className="border-r"
                  >
                    {column.title}
                  </TableBase.Th>
                ))}
              </TableBase.Tr>
            </TableBase.THead>
            <TableBase.TBody>
              {rows.map((row) => (
                <TableBase.Tr key={row.key}>
                  {row.cells.slice(0, freezedColumns).map((cell) => (
                    <TableBase.Td key={cell.key as string} className="border-r">
                      {cell.value}
                    </TableBase.Td>
                  ))}
                </TableBase.Tr>
              ))}
            </TableBase.TBody>
          </TableBase>
        </div>
      )}

      <div ref={tableRef} className="overflow-x-auto" onScroll={checkScroll}>
        <TableBase>
          <TableBase.THead className="z-10 bg-white">
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
              <TableBodyRow key={row.key} row={row} />
            ))}
          </TableBase.TBody>
        </TableBase>
      </div>

      {showLeftGradient && (
        <div
          className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"
          style={{
            marginLeft:
              freezedColumns > 0
                ? `${freezedCols.reduce(
                    (acc, col) => acc + (col.width || 100),
                    0
                  )}px`
                : 0,
          }}
        />
      )}
      {showRightGradient && (
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      )}
    </div>
  );
}

function TableBodyRow<Record>({ row }: { row: Row<Record> }) {
  return (
    <TableBase.Tr>
      {row.cells.map((cell) => (
        <TableBase.Td key={cell.key as string}>{cell.value}</TableBase.Td>
      ))}
    </TableBase.Tr>
  );
}
