import { container } from "tsyringe";
import { AuthenticateUsecase } from "../usecases/authenticate/AuthenticateUsecase";
import { Request, Response } from "express";

class AuthenticateController {
  async handle(request: Request, response: Response) {
    const authenticateUserUsecase = container.resolve(AuthenticateUsecase);
    const token = await authenticateUserUsecase.execute(request.body);
    console.log(token);
    response.json(token);
  }
}

export { AuthenticateController };
