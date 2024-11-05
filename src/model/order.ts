import { Product } from "@/remote/product";
import { User } from "@/remote/user";

export const OrderStatus = {
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
} as const;
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];

export interface Order {
  id: string;
  orderNumber: string;
  createdAt: string;
  product: Product;
  customer: User;
  option: string;
  orderStatus: OrderStatus;
}
