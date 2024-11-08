import { Filter } from "@/components/common/Filter";
import { FilterItemType } from "@/components/common/Filter/types";

export function OrderFilter() {
  return (
    <Filter
      items={[
        {
          label: "검색어",
          type: FilterItemType.INPUT,
          value: "",
        },
        {
          label: "주문 상태",
          type: FilterItemType.SELECT,
          value: "",
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
          value: [null, null],
        },
      ]}
    />
  );
}
