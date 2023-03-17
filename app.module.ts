import { json, urlencoded } from "body-parser";
import express from "express";
import "./src/models/connection.service";
import { decorator } from "./library/decorator";
import Router from "./src/routes";

declare global {
  namespace Express {
    export interface Request {
      account: {
        token: string;
      };
    }
    export interface Response {
      sendData: (
        status: number,
        message: string,
        data?: Object | Object[],
        errorCode?: string
      ) => void;
    }
  }
}

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(decorator);
app.use("/", Router);

app.listen(3000, () => {
  console.log(`Server Running in port ${3000}`);
});
