import { Result } from "express-validator";
import { Quiz } from "./quizType";
import { Ranking } from "./rankingType";

export interface User {
    id: number;
    nickname: string;
    email: string;
    password: string;
    name: string;
    birth: Date;
    role?: string;
    createdAt?: Date;
    updatedAt?: Date;
    quizzes?: Quiz[];
    results?: Result[];
    Ranking?: Ranking[];
  };
  