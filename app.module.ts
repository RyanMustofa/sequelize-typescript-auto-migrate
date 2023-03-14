import { json, urlencoded } from "body-parser";
import express from "express";
import Api from "./src/routes/api";
import Public from "./src/routes/public";
import "./src/models/connection.service";

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/api", Api);
app.use("/", Public);

app.listen(3000, () => {
  console.log(`Server Running in port ${3000}`);
});
