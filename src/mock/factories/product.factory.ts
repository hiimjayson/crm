import { faker } from "./faker";

export const productFactory = {
  create: () => {
    return {
      id: faker.string.uuid(),
      name: "알파카 폰케이스",
      imageUrl: faker.image.url(),
      createdAt: faker.date.past().toISOString(),
    };
  },
};
