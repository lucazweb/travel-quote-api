import "reflect-metadata";
import { DataSource } from "typeorm";
import { Quote } from "../entities/Quote";
import { User } from "@entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "pass123",
  database: "tripquotedb",
  synchronize: false,
  migrations: ["src/database/migrations/**/*.ts"],
  entities: [User, Quote],
});
