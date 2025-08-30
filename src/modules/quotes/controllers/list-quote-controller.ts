import { Request, Response } from "express";
import { ListQuoteUsecase } from "@modules/quotes/usecases/list-quotes/list-quotes";
import { container } from "tsyringe";

class ListQuoteController {
  async handle(_: Request, response: Response) {
    const listQuoteUsecase = container.resolve(ListQuoteUsecase);
    const all = await listQuoteUsecase.execute();
    return response.json(all);
  }
}

export { ListQuoteController };
