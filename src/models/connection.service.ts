import { Sequelize } from "sequelize-typescript";
import { logger } from "../utils/logger";
import { Post } from "./Post";
import { User } from "./User";
import process from "process";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const connection = new Sequelize({
  dialect: "mysql",
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  models: [User, Post],
});

let force = process.argv[2] === "--force" ? true : false;

connection
  .sync({ force })
  .then(() => {
    if (force) {
      console.log("========================================");
      process.exit();
    } else {
      console.log("Database connected!");
    }
  })
  .catch((err) => logger.error(err));
