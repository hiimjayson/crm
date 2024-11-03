import { fakerKO as faker, faker as fakerEN } from "@faker-js/faker";

faker.seed(12345);
fakerEN.seed(12345);

export { faker, fakerEN };
