import { User } from "./userType";
import { Quiz } from "./quizType";

export type Result = {
    id: number;
    score: number;
    createdAt?: Date;
    updatedAt?: Date;

    user?: User;
    quiz?: Quiz;
}