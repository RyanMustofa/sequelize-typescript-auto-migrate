import { NextFunction, Request, Response } from "express";

export async function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let auth = req.headers.authorization;
    if (!auth) {
      return res.sendData(401, "authorization not provide");
    }
    let contentAuth = auth.split(" ");
    if (contentAuth[0] !== "Bearer") {
      return res.sendData(401, "type authentication is bearer");
    }

    req.account = {
      token: contentAuth[1],
    };

    next();
  } catch (error: any) {
    return res.sendData(500, error.message, error.stack);
  }
}
