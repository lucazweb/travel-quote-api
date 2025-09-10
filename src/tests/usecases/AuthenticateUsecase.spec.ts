import "reflect-metadata";
import { AuthenticateUsecase } from "@modules/account/usecases/authenticate/AuthenticateUsecase";
import { UserRepositoryInMemory } from "@tests/repositories/UserRepositoryInMemory";
import { hash } from "bcrypt";

let userRepositoryInMemory: UserRepositoryInMemory;
let authenticateUsecase: AuthenticateUsecase;

describe("AuthenticateUsecase", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    authenticateUsecase = new AuthenticateUsecase(userRepositoryInMemory);
  });

  it("should allow user authenticate if user exists and credentials are ok ", async () => {
    const password = await hash("12345", 8);
    const dto = {
      name: "Admin",
      email: "adm@tripquote.com",
      password,
    };

    const user = await userRepositoryInMemory.create(dto);
    console.log(user);
    const token = await authenticateUsecase.execute({
      email: user.email,
      password: "12345",
    });

    expect(token).toHaveProperty("token");
  });

  it("should not allow user authenticate if email is wrong ", async () => {
    await expect(async () => {
      const password = await hash("12345", 8);
      const dto = {
        name: "Admin",
        email: "adm@tripquote.com",
        password,
      };

      const user = await userRepositoryInMemory.create(dto);
      console.log(user);
      await authenticateUsecase.execute({
        email: "johndoe@trip.com",
        password: "12345",
      });
    }).rejects.toBeInstanceOf(Error);
  });

  it("should not allow user authenticate if password is wrong ", async () => {
    await expect(async () => {
      const password = await hash("12345", 8);
      const dto = {
        name: "Admin",
        email: "adm@tripquote.com",
        password,
      };

      const user = await userRepositoryInMemory.create(dto);
      console.log(user);
      await authenticateUsecase.execute({
        email: user.email,
        password: "54323",
      });
    }).rejects.toBeInstanceOf(Error);
  });
});
