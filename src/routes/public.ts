import express, { Request, Response } from "express";

const router = express();

router.get("/", async (req: Request, res: Response) => {
  return res.status(200).send({
    status: 200,
    message: "public",
  });
});

export default router;
