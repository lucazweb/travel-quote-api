import { Quote } from "@modules/quotes/entities/Quote";
import { IQuoteDTO } from "./IQuoteDTO";

interface IQuotesRepository {
  create: (data: IQuoteDTO) => Promise<void>;
  list: () => Promise<Quote[]>;
}

export { IQuotesRepository };
