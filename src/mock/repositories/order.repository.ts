import { Order } from "@/model/order";
import { orderFactory } from "../factories/order.factory";

const ORDER_DATA_COUNT = 300;
const orders: Order[] = [];

for (let i = 0; i < ORDER_DATA_COUNT; i++) {
  orders.push(orderFactory.create());
}

export const orderRepository = {
  findAll: () => orders,
};
