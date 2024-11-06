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
    <div className={`w-0 min-w-full`}>
      <table
        className={`w-full table-fixed border-collapse ${className}`}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}

function THead({ className = "", children, ...props }: THeadProps) {
  return (
    <thead className={`bg-gray-50 ${className}`} {...props}>
      {children}
    </thead>
  );
}

function Tr({ className = "", children, ...props }: TrProps) {
  return (
    <tr
      className={`bg-white hover:bg-gray-50 transition-colors ${className}`}
      {...props}
    >
      {children}
    </tr>
  );
}

function Th({ className = "", children, ...props }: ThProps) {
  return (
    <th
      className={`pl-4 pr-3 h-10 text-left text-base font-semibold text-gray-500 border-t border-r border-b border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors tracking-wider ${className} text-ellipsis`}
      {...props}
    >
      {children}
    </th>
  );
}

function TBody({ className = "", children, ...props }: TBodyProps) {
  return (
    <tbody className={`${className}`} {...props}>
      {children}
    </tbody>
  );
}

function Td({ className = "", children, ...props }: TdProps) {
  return (
    <td
      className={`pl-4 pr-3 h-11 text-base text-gray-700 border-t border-r border-b border-gray-200 whitespace-nowrap text-ellipsis overflow-hidden ${className}`}
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
