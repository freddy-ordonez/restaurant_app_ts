import { sign, verify } from "jsonwebtoken";

export interface UserToken {
  id: string;
  email: string;
}

const SECRET_KEY = process.env.SECRET_KEY || "";

export const signToken = (user: UserToken): string => {
  return sign(
    {
      user,
    },
    SECRET_KEY,
    {
      expiresIn: "1d",
    }
  );
};

export const verifyToken = (token: string) => {
  try {
    const tokenVerify = verify(token, SECRET_KEY);
    return tokenVerify;
  } catch (error) {
    return null;
  }
};
