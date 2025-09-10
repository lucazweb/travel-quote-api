import { User } from "@entities/User";
import {
  IUserDTO,
  IUserRepository,
} from "@modules/account/interfaces/IUserRepository";

class UserRepositoryInMemory implements IUserRepository {
  private repository: User[] = [];

  async create(data: IUserDTO): Promise<User> {
    const user = new User();
    Object.assign(user, { ...data });
    this.repository.push(user);
    return user;
  }

  async list(): Promise<User[]> {
    return this.repository;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.repository.find((user) => user.email == email);
    return user || null;
  }

  async findById(id: string): Promise<User | null> {
    const user = this.repository.find((user) => user.id == id);
    return user || null;
  }
}

export { UserRepositoryInMemory };
