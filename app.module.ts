import { json, urlencoded } from "body-parser";
import express from "express";
import Api from "./src/routes/api";
import Public from "./src/routes/public";
import "./src/models/connection.service";
import { decorator } from "./library/decorator";

declare global {
  namespace Express {
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
app.use("/api", Api);
app.use("/", Public);

app.listen(3000, () => {
  console.log(`Server Running in port ${3000}`);
});
