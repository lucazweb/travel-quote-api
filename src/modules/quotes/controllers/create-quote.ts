import { Request, Response } from "express";
import { CreateQuoteUsecase } from "@modules/quotes/usecases";
import { container } from "tsyringe";

class CreateQuoteController {
  handle(request: Request, response: Response) {
    const createQuoteUsecase = container.resolve(CreateQuoteUsecase);
    createQuoteUsecase.execute({ ...request.body });
    return response.status(201).send();
  }
}

export { CreateQuoteController };
