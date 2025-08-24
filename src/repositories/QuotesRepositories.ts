import Quote, { IQuoteDTO } from "../model/Quote";
import { v4 as uuidv4 } from "uuid";

class QuotesRepository {
  private quotes: Quote[];
  private static INSTANCE: QuotesRepository;

  constructor() {
    this.quotes = [];
  }

  public static getInstance(): QuotesRepository {
    if (!QuotesRepository.INSTANCE) {
      QuotesRepository.INSTANCE = new QuotesRepository();
    }
    return QuotesRepository.INSTANCE;
  }

  create(data: IQuoteDTO) {
    const quote = new Quote();
    Object.assign(quote, {
      id: uuidv4(),
      ...data,
    });

    this.quotes.push(quote);
  }

  list(): Quote[] {
    return this.quotes;
  }
}

export default QuotesRepository;
