import Quote, { IQuoteDTO } from "../model/Quote";

interface IQuotesRepository {
  create: (data: IQuoteDTO) => Promise<void>;
  list: () => Promise<Quote[]>;
}

export { IQuotesRepository };
