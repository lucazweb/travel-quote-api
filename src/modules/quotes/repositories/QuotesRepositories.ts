import { Repository } from "typeorm";
import { Quote } from "@entities/Quote";
import { v4 as uuidv4 } from "uuid";
import { AppDataSource } from "@database/index";
import { IQuotesRepository } from "../interfaces/IQuotesRepository";
import { IQuoteDTO } from "../interfaces/IQuoteDTO";

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
