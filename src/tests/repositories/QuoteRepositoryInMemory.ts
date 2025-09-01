import { Quote } from "@entities/Quote";
import { IQuoteDTO, IQuotesRepository } from "@modules/quotes/interfaces";

class QuoteRepositoryInMemory implements IQuotesRepository {
  private quotes: Quote[] = [];

  async create(data: IQuoteDTO): Promise<void> {
    const quote = new Quote();
    Object.assign(quote, { ...data });
    this.quotes.push(quote);
  }
  async list(): Promise<Quote[]> {
    return this.quotes;
  }
}

export { QuoteRepositoryInMemory };
