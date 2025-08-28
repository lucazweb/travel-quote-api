import { Repository } from "typeorm";
import Quote, { IQuoteDTO } from "../model/Quote";
import { v4 as uuidv4 } from "uuid";
import { AppDataSource } from "../database";
import { IQuotesRepository } from "./IQuotesRepository";

class QuotesRepository implements IQuotesRepository {
  private repository: Repository<Quote>;

  constructor() {
    this.repository = AppDataSource.getRepository(Quote);
  }

  async create(data: IQuoteDTO): Promise<void> {
    const quote = this.repository.create({
      id: uuidv4(),
      ...data,
    });

    await this.repository.save(quote);
  }

  async list(): Promise<Quote[]> {
    const list = this.repository.find();
    return list;
  }
}

export { QuotesRepository };
