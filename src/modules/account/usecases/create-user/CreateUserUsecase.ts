import { IUserDTO } from "@modules/account/interfaces/IUserRepository";
import { UserRepository } from "@modules/account/repositories/UserRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateUserUsecase {
  constructor(
    @inject("UserRepository")
    private repository: UserRepository
  ) {}

  async execute(data: IUserDTO) {
    await this.repository.create(data);
  }
}

export { CreateUserUsecase };
