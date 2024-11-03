import { userFactory } from "../factories/user.factory";

export const UserRepository = {
  getCurrentUser: () => {
    return userFactory.create();
  },
  getUsers: () => {
    return [userFactory.create(), userFactory.create()];
  },
};
