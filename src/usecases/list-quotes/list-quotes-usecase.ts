import { inject, injectable } from "tsyringe";
import { QuotesRepository } from "../../repositories/QuotesRepositories";

@injectable()
class ListQuoteUsecase {
  constructor(
    @inject("QuotesRepository")
    private quoteRepository: QuotesRepository
  ) {}

  execute() {
    return this.quoteRepository.list();
  }
}

export { ListQuoteUsecase };
