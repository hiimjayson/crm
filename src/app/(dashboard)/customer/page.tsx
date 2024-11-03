"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { CustomerList } from "@/components/customer/CustomerList";
import { DashboardLayoutTemplate } from "@/components/templates/DasyboardLayoutTemplate";

export default function CustomerListPage() {
  return (
    <DashboardLayoutTemplate
      title="회원 내역"
      description="회원 내역을 관리합니다."
    >
      <ErrorBoundary
        fallback={
          <div className="p-4 text-red-500">
            사용자 목록을 불러오는데 실패했습니다.
          </div>
        }
      >
        <Suspense fallback={<div className="p-4">로딩 중...</div>}>
          <CustomerList />
        </Suspense>
      </ErrorBoundary>
    </DashboardLayoutTemplate>
  );
}
