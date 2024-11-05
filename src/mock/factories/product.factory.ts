import { getRandomElement } from "@/utils/random";
import { faker } from "./faker";

export const productFactory = {
  create: () => {
    return {
      id: faker.string.uuid(),
      name: `${getRandomElement([
        "알파카",
        "호랑이",
        "앵무새",
        "코끼리",
      ])} ${getRandomElement(["폰케이스", "벽시계", "스트랩", "팔찌"])}`,
      imageUrl: faker.image.url(),
      createdAt: faker.date.past().toISOString(),
    };
  },
};
