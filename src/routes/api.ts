import express, { Request, Response } from "express";
import { UserSchema } from "../controllers/api/users.controllers";

const router = express();

router.get("/", async (req: Request, res: Response) => {
  return res.status(200).send({
    status: 200,
    message: "api",
  });
});

router.get("/users", UserSchema.findAll);

export default router;
