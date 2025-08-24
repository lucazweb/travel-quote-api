import { Request, Response } from "express";
import { CreateQuoteUsecase } from "./create-quote";

class CreateQuoteController {
  constructor(private createQuoteUsecase: CreateQuoteUsecase) {}

  handle(request: Request, response: Response) {
    this.createQuoteUsecase.execute({ ...request.body });
    return response.status(201).send();
  }
}

export { CreateQuoteController };
