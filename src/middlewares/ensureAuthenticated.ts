import { AppError } from "@errors/AppError";
import { UserRepository } from "@modules/account/repositories/UserRepository";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

const error = "Token is missing";

export default function (
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) throw new AppError(error, 401);
  const [, token] = authHeader.split(" ");

  if (!token) throw new AppError(error, 401);

  try {
    const { sub: userId } = verify(token, "bf2f90ead9638046e7a6700efd6be1d6");

    const userRepository = new UserRepository();
    const user = userRepository.findById(userId as string);

    if (!user) throw new AppError("User does not exists", 401);

    request.user = {
      id: userId as string,
    };

    next();
  } catch (error) {
    throw new AppError("Invalid token", 401);
  }
}
