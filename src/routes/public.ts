import { Request, Response, Router } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  return res.status(200).send({
    status: 200,
    message: "public",
  });
});

export default router;
