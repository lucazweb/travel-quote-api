import { Quote } from "@modules/quotes/entities/Quote";
import { IQuotesRepository } from "@modules/quotes/interfaces";
import { CreateQuoteUsecase } from "@modules/quotes/usecases";
import { QuoteRepositoryInMemory } from "@tests/repositories/QuoteRepositoryInMemory";

let quoteRepository: IQuotesRepository;
let createQuoteUsecase: CreateQuoteUsecase;

describe("CreateQuoteUsecase tests", () => {
  beforeAll(() => {
    quoteRepository = new QuoteRepositoryInMemory();
    createQuoteUsecase = new CreateQuoteUsecase(quoteRepository);
  });

  it("should allow create quotes correctly ", async () => {
    const quote = new Quote();
    Object.assign(quote, {
      origin: "Salvador, BA",
      destiny: "Rio de Janeiro, RJ",
      ticketGoing: 345,
      ticketBack: 234,
      goingDate: "2025-08-22T02:00:00.171Z",
      backDate: "2025-08-31T02:00:00.171Z",
      foodExpenses: 230,
      mobilityExpenses: 332,
      leisureExpenses: 400,
    });

    createQuoteUsecase.execute(quote);
    const quoteList = await quoteRepository.list();
    const createdQuote = quoteList.find((q) => q.goingDate === quote.goingDate);
    expect(createdQuote).toHaveProperty("id");
  });
});
