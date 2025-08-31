import { User } from "@entities/User";

interface IUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IUserRepository {
  create: (data: IUserDTO) => Promise<void>;
  list: () => Promise<User[]>;
}

export { IUserRepository, IUserDTO };
