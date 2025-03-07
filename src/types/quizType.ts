import { User } from "./userType";
import { Ranking } from "./rankingType";
import { Result } from "./resultType";

export interface Quiz {
    id: number;
    title: string;
    theme: string;
    description: string;
    questions: Question[];
    createdAt?: Date;
    updatedAt?: Date;
    users?: User[];
    results?: Result[];
    rankings?: Ranking[];
};

export interface Question {
    id: number;
    content: string;
    answers: Answer[];
    createdAt?: Date;
    updatedAt?: Date;
    quiz?: Quiz;
};

export interface Answer {
    id: number;
    content: string;
    isCorrect: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    question?: Question;
};