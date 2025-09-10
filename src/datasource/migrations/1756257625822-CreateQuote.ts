import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateQuote1756257625822 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "quote",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "origin",
            type: "varchar",
          },
          {
            name: "destiny",
            type: "varchar",
          },
          {
            name: "ticketGoing",
            type: "decimal",
          },
          {
            name: "ticketBack",
            type: "decimal",
          },
          {
            name: "goingDate",
            type: "varchar",
          },
          {
            name: "backDate",
            type: "varchar",
          },
          {
            name: "foodExpenses",
            type: "decimal",
          },
          {
            name: "mobilityExpenses",
            type: "decimal",
          },
          {
            name: "leisureExpenses",
            type: "decimal",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("quote");
  }
}
