import { User } from "@/remote/user";
import { faker, fakerEN } from "./faker";

export const userFactory = {
  create: (): User => {
    return {
      id: faker.string.uuid(),
      uNumber: faker.number.int(),
      email: `${fakerEN.person.lastName().toLowerCase()}@${
        faker.internet.email().split("@")[1]
      }`,
      name: faker.person.fullName(),
      team: faker.company.name(),
      role: faker.person.jobTitle(),
      createdAt: faker.date.past().toISOString(),
    };
  },
};
