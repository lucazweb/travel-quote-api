import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
class Quote {
  @PrimaryColumn()
  id?: string;

  @Column()
  origin: string;

  @Column()
  destiny: string;

  @Column("decimal")
  ticketGoing: number;

  @Column("decimal")
  ticketBack: number;

  @Column()
  goingDate: string;

  @Column()
  backDate: string;

  @Column("decimal")
  foodExpenses: number;

  @Column("decimal")
  mobilityExpenses: number;

  @Column("decimal")
  leisureExpenses: number;
}

export interface IQuoteDTO {
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

export default Quote;
