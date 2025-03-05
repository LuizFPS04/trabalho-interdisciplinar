import { Request } from "express";
import { User } from "src/types/userType";

declare module "express" {
  export interface Request {
    user?: User;
  }
}
