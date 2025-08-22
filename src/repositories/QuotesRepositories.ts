import Quote from "../model/Quote";
import { v4 as uuidv4 } from "uuid";

interface IQuoteDTO {
  id?: string;
  origin: string;
  destiny: string;
  ticketGoing: number;
  ticketBack: number;
  goingDate: string;
  backDate: string;
  foodExpenses: number;
  mobilityExpenses: number;
  leisureExpenses: number;
}

class QuotesRepository {
  quotes: Quote[];

  constructor() {
    this.quotes = [];
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
