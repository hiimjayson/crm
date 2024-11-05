import { useState } from "react";

export type CustomerFilterValues = {
  status: string;
  usage: string;
  registrationDateRange: [Date | null, Date | null];
  installationDateRange: [Date | null, Date | null];
  arrivalDate: [Date | null, Date | null];
  baseWarrantyRange: [Date | null, Date | null];
  extendedWarrantyRange: [Date | null, Date | null];
};

export function useCustomerFilter() {
  const [filters, setFilters] = useState<CustomerFilterValues>({
    status: "전체",
    usage: "전체",
    registrationDateRange: [null, null],
    installationDateRange: [null, null],
    arrivalDate: [null, null],
    baseWarrantyRange: [null, null],
    extendedWarrantyRange: [null, null],
  });

  return { filters, setFilters };
}
