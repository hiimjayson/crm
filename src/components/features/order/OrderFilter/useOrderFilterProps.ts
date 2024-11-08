import { FilterItemType } from "@/components/common/Filter/types";
import { useFilterProps } from "@/components/common/Filter/useFilterItems";

export function useOrderFilterProps() {
  return useFilterProps([
    {
      label: "검색어",
      type: FilterItemType.INPUT,
      name: "search",
    },
    {
      label: "주문 상태",
      type: FilterItemType.SELECT,
      name: "status",
      variants: [
        {
          label: "전체",
          value: "ALL",
        },
        {
          label: "주문 완료",
          value: "ORDER_COMPLETED",
        },
        {
          label: "배송 중",
          value: "DELIVERY_IN_PROGRESS",
        },
        {
          label: "배송 완료",
          value: "DELIVERY_COMPLETED",
        },
      ],
    },
    {
      label: "주문 일자",
      type: FilterItemType.DATE_RANGE,
      name: "orderDate",
    },
  ]);
}
