import { HTMLProps } from "react";

interface TableProps extends HTMLProps<HTMLTableElement> {
  className?: string;
}
interface THeadProps extends HTMLProps<HTMLTableSectionElement> {
  className?: string;
}
interface TBodyProps extends HTMLProps<HTMLTableSectionElement> {
  className?: string;
}
interface TrProps extends HTMLProps<HTMLTableRowElement> {
  className?: string;
}
interface ThProps extends HTMLProps<HTMLTableCellElement> {
  className?: string;
}
interface TdProps extends HTMLProps<HTMLTableCellElement> {
  className?: string;
}

export function Table({ className = "", children, ...props }: TableProps) {
  return (
    <div className="w-0 min-w-full overflow-x-auto">
      <table className={`min-w-full ${className}`} {...props}>
        {children}
      </table>
    </div>
  );
}

function THead({ className = "", children, ...props }: THeadProps) {
  return (
    <thead
      className={`bg-gray-50 divide-y divide-gray-200  ${className}`}
      {...props}
    >
      {children}
    </thead>
  );
}

function Tr({ className = "", children, ...props }: TrProps) {
  return (
    <tr
      className={`bg-white hover:bg-gray-50 divide-x divide-y divide-gray-200  ${className}`}
      {...props}
    >
      {children}
    </tr>
  );
}

function Th({ className = "", children, ...props }: ThProps) {
  return (
    <th
      className={`px-5 py-2 text-left text-lg font-semibold text-gray-400 uppercase tracking-wider ${className}`}
      {...props}
    >
      {children}
    </th>
  );
}

function TBody({ className = "", children, ...props }: TBodyProps) {
  return (
    <tbody className={`divide-y divide-gray-200 ${className}`} {...props}>
      {children}
    </tbody>
  );
}

function Td({ className = "", children, ...props }: TdProps) {
  return (
    <td
      className={`px-5 py-2 text-lg text-gray-700 whitespace-nowrap ${className}`}
      {...props}
    >
      {children}
    </td>
  );
}

Table.THead = THead;
Table.Tr = Tr;
Table.Th = Th;
Table.TBody = TBody;
Table.Td = Td;
