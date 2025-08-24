import { Request, Response } from "express";
import { ListQuoteUsecase } from "./list-quotes-usecase";

class ListQuoteController {
  constructor(private listQuoteUsecase: ListQuoteUsecase) {}

  handle(_: Request, response: Response) {
    const all = this.listQuoteUsecase.execute();
    return response.json(all);
  }
}

export { ListQuoteController };
