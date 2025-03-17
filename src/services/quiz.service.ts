import * as quizRepository from '../repositories/quiz.repository';
import { Quiz } from '@prisma/client';
import { QuizData } from "../types/quizType";

export async function getAllQuizzes(): Promise<Quiz[]> {
    return quizRepository.getAllQuizzes();
}

export async function getQuizById(id: number): Promise<Quiz | null> {
    return quizRepository.getQuizById(id);
}

export async function getQuizWithQuestionsAndAnswers(id: number): Promise<Quiz | null> {
    return quizRepository.getQuizWithQuestionsAndAnswers(id);
}

export async function getQuizByThemeWithQuestionsAndAnswers(theme: string): Promise<Quiz[] | null> {
    return quizRepository.getQuizByThemeWithQuestionsAndAnswers(theme);
}

export async function getQuizByTheme(theme: string): Promise<Quiz[] | null> {
    return quizRepository.getQuizByTheme(theme);
}

export async function createQuiz(quiz: Quiz): Promise<Quiz> {
    return quizRepository.createQuiz(quiz);
}

export async function updateQuiz(id: number, quiz: Quiz): Promise<Quiz> {
    return quizRepository.updateQuiz(id, quiz);
}

export async function deleteQuiz(id: number): Promise<Quiz> {
    return quizRepository.deleteQuiz(id);
}

export async function createQuizWithQuestionsAndAnswers(quizData: QuizData): Promise<Quiz> {
    return quizRepository.createQuizWithQuestionsAndAnswers(quizData);
}