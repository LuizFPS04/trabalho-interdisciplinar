import { Result } from "express-validator";
import { Quiz } from "./quizType";
import { Ranking } from "./rankingType";

export interface User {
  id: number;
  email: string;
  nickname: string;
  password: string;
  name: string;
  birth: Date;
  role?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  quizzes?: Quiz[];
  results?: Result[];
  rankings?: Ranking[];
};

export interface JwtPayload {
  id: number;
  email: string;
  role?: string;
}