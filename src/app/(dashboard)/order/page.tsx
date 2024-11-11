"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { DashboardLayoutTemplate } from "@/components/templates/DasyboardLayoutTemplate";
import { OrderList } from "@/components/features/order/OrderList";
import { useOrderFilterProps } from "@/components/features/order/OrderFilter/useOrderFilterProps";
import { Filter } from "@/components/common/Filter";
import { ActionBar } from "@/components/common/ActionBar";

export default function OrderListPage() {
  const { filterProps } = useOrderFilterProps();

  return (
    <DashboardLayoutTemplate
      title="주문 내역"
      description="카페24 쇼핑몰의 주문내역이 연동되어 보여집니다."
    >
      <div className="space-y-4">
        <Filter {...filterProps} />

        <ErrorBoundary
          fallback={
            <div className="p-4 text-red-500">
              주문 목록을 불러오는데 실패했습니다.
            </div>
          }
        >
          <Suspense fallback={<div className="p-4">로딩 중...</div>}>
            <ActionBar
              actions={[
                {
                  name: "export",
                  label: "내보내기",
                  buttonVariant: "primary",
                },
                {
                  name: "cancel",
                  label: "취소",
                  buttonVariant: "danger",
                },
              ]}
            />
            <OrderList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </DashboardLayoutTemplate>
  );
}
