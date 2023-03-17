import express from "express";
import {AuthMiddleware} from "../../middleware/auth";
import api from "./api";
import Public from "./public";

const router = express();

router.use("/api",AuthMiddleware, api);
router.use("/", Public);

export default router;
