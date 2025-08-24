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
class Quote {
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
