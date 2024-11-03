"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { CustomerList } from "@/components/customer/CustomerList";

export default function CustomerListPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">회원 내역</h1>
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
    </div>
  );
}
