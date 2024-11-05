import { Order, OrderStatus } from "@/model/order";
import { faker } from "./faker";
import { productFactory } from "./product.factory";
import { userFactory } from "./user.factory";
import { getRandomElement } from "@/utils/random";

export const orderFactory = {
  create: (): Order => {
    return {
      id: faker.string.uuid(),
      orderNumber: faker.string.uuid(),
      createdAt: faker.date.past().toISOString(),
      product: productFactory.create(),
      customer: userFactory.create(),
      option: faker.string.uuid(),
      orderStatus: getRandomElement(Object.values(OrderStatus)),
    };
  },
};
