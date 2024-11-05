import { Order, OrderStatus } from "@/model/order";
import { faker } from "./faker";
import { productFactory } from "./product.factory";
import { userFactory } from "./user.factory";
import { getRandomElement } from "@/utils/random";

export const orderFactory = {
  create: (): Order => {
    return {
      id: faker.string.uuid(),
      orderNumber: "2411051028300000",
      createdAt: faker.date.past().toISOString(),
      product: productFactory.create(),
      customer: userFactory.create(),
      option: "블랙 / S",
      orderStatus: getRandomElement(Object.values(OrderStatus)),
    };
  },
};
