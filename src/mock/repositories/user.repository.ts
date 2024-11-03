import { userFactory } from "../factories/user.factory";

const USER_DATA_COUNT = 50;
const users = Array.from({ length: USER_DATA_COUNT }, () =>
  userFactory.create()
);

export const UserRepository = {
  getCurrentUser: () => {
    return users[0];
  },
  getUsers: () => {
    return users;
  },
};
