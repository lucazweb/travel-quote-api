import QuotesRepository from "../../repositories/QuotesRepositories";

class ListQuoteUsecase {
  constructor(private quoteRepository: QuotesRepository) {}

  execute() {
    return this.quoteRepository.list();
  }
}

export { ListQuoteUsecase };
