import { orderRepository } from "@/mock/repositories/order.repository";
import { ApiResponse } from "./typings";
import { Order } from "@/model/order";

type OrderListResponse = ApiResponse<Order[]>;

export const orderApi = {
  getOrders: async (): Promise<OrderListResponse> => {
    return {
      success: true,
      data: orderRepository.findAll(),
    };
  },
};
