import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUsecase } from "../usecases/create-user";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const createUserUsecase = container.resolve(CreateUserUsecase);
    await createUserUsecase.execute({ ...request.body });
    response.status(201).send();
  }
}

export { CreateUserController };
