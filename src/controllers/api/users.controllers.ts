import { Request, Response } from "express";
import { Post } from "../../models/Post";
import { User } from "../../models/User";

class UserController {
  async findAll(req: Request, res: Response): Promise<any> {
    let user: User[] = await User.findAll();
    let post: Post[] = await Post.findAll({
      include: [
        {
          association: "created",
        },
      ],
    });
    return res.status(200).send({
      status: true,
      message: "api",
      data: {
        user,
        post,
      },
    });
  }
}

export const UserSchema = new UserController();
