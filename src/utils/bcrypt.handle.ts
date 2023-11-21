import { hash, compare } from "bcrypt";
import { saltRounds } from "../config/config";

export const encrypt = async (password: string): Promise<string> => {
  const salt = await hash(password, saltRounds);
  return salt;
};

export const verify = async (password: string, hash: string): Promise<boolean> => {
  const result = await compare(password, hash);
  return result;
};
