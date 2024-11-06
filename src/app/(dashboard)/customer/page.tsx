"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { CustomerList } from "@/components/features/customer/CustomerList";
import { DashboardLayoutTemplate } from "@/components/templates/DasyboardLayoutTemplate";
import {
  CustomerFilter,
  useCustomerFilter,
} from "@/components/features/customer/CustomerFilter";

export default function CustomerListPage() {
  const { filters, setFilters } = useCustomerFilter();

  return (
    <DashboardLayoutTemplate
      title="회원 내역"
      description="시스템에 등록된 모든 회원 정보를 조회합니다."
    >
      <div className="space-y-8">
        <CustomerFilter filters={filters} onFiltersChange={setFilters} />
        <ErrorBoundary
          fallback={
            <div className="p-4 text-red-500">
              사용자 목록을 불러오는데 실패했습니다.
            </div>
          }
        >
          <Suspense fallback={<div className="p-4">로딩 중...</div>}>
            <CustomerList filters={filters} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </DashboardLayoutTemplate>
  );
}
