import { Request, Response } from "express";
import { User } from "../../models/User";

class UserController {
  async findAll(req: Request, res: Response): Promise<any> {
    let user: User[] = await User.findAll({
      include: [
        {
          association: "post",
        },
      ],
    });
    return res.sendData(200, "Data User", user);
  }
}

export const UserSchema = new UserController();
