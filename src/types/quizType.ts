import { User } from "./userType";
import { Ranking } from "./rankingType";
import { Result } from "./resultType";

export interface Quiz {
    id: number;
    title: string;
    theme: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    questions?: Question[];
    users?: User[];
    results?: Result[];
    rankings?: Ranking[];
}

export interface Question {
    id: number;
    content: string;
    createdAt: Date; // Tornar obrigatório
    updatedAt: Date; // Tornar obrigatório
    quizId: number; // Adicionar quizId para relação com Quiz
    quiz?: Quiz; // Relação com Quiz
    answers?: Answer[]; // Relação com Answer
}

export interface Answer {
    id: number;
    content: string;
    isCorrect: boolean;
    createdAt: Date; // Tornar obrigatório
    updatedAt: Date; // Tornar obrigatório
    questionId: number; // Adicionar questionId para relação com Question
    question?: Question; // Relação com Question
}

export interface AnswerData {
    content: string;
    isCorrect: boolean;
}

export interface QuestionData {
    content: string;
    answers: AnswerData[];
}

export interface QuizData {
    title: string;
    theme: string;
    description: string;
    questions: QuestionData[];
}