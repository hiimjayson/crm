import { Table } from "@/components/common/Table";
import { Order } from "@/model/order";
import { orderApi } from "@/remote/order";
import { useSuspenseQuery } from "@tanstack/react-query";

export function OrderList() {
  const { data: orders } = useSuspenseQuery({
    queryKey: ["orders"],
    queryFn: async () => (await orderApi.getOrders())?.data,
  });

  return (
    <Table<Order>
      columns={[
        { key: "orderNumber", title: "주문번호", width: 200 },
        { key: "customer", title: "고객명", width: 140 },
        { key: "orderStatus", title: "주문상태", width: 100 },
        { key: "product", title: "상품명" },
        { key: "option", title: "옵션" },
        { key: "createdAt", title: "주문일시" },
      ]}
      rows={orders?.map((order) => ({
        key: order.id,
        cells: [
          { key: "orderNumber", value: order.orderNumber },
          { key: "customer", value: order.customer.name },
          { key: "orderStatus", value: order.orderStatus },
          { key: "product", value: order.product.name },
          { key: "option", value: order.option },
          { key: "createdAt", value: order.createdAt },
        ],
      }))}
      freezedColumns={3}
    />
  );
}
