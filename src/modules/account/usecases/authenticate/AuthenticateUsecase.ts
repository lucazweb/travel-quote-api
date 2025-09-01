import { UserRepository } from "@modules/account/repositories/UserRepository";
import { AppError } from "@errors/AppError";
import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

@injectable()
class AuthenticateUsecase {
  // authenticate user from session route
  // create jwt token
  constructor(
    @inject("UserRepository")
    private repository: UserRepository
  ) {}

  async execute(credentials: IRequest): Promise<IResponse> {
    const error = "User or password incorrect";
    const user = await this.repository.findByEmail(credentials.email);
    if (!user) throw new AppError(error, 400);

    const passwordMatch = await compare(credentials.password, user.password);
    if (!passwordMatch) throw new AppError(error, 401);

    const token = sign({}, "bf2f90ead9638046e7a6700efd6be1d6", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenResponse: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenResponse;
  }
}

export { AuthenticateUsecase };
