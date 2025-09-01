import { IUserDTO } from "@modules/account/interfaces/IUserRepository";
import { UserRepository } from "@modules/account/repositories/UserRepository";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateUserUsecase {
  constructor(
    @inject("UserRepository")
    private repository: UserRepository
  ) {}

  async execute(data: IUserDTO) {
    const password = await hash(data.password, 8);
    await this.repository.create({ ...data, password });
  }
}

export { CreateUserUsecase };
