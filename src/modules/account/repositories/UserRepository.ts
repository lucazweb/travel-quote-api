import { Repository } from "typeorm";
import { User } from "@entities/User";
import { IUserDTO, IUserRepository } from "../interfaces/IUserRepository";
import { AppDataSource } from "@database/index";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create(data: IUserDTO): Promise<void> {
    const user = this.repository.create(data);
    await this.repository.save(user);
  }

  async list(): Promise<User[]> {
    return await this.repository.find();
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.repository.findOne({
      where: {
        email,
      },
    });
  }
}

export { UserRepository };
