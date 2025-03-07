import { prismaClient } from "../config/db";
import { Quiz, Question, Answer } from "../types/quizType";

export async function getAllQuizzes(): Promise<Quiz[]> {
    return prismaClient.quiz.findMany();
}

export async function getQuizById(id: number): Promise<Quiz | null> {
    return prismaClient.quiz.findUnique({
        where: {
            id,
        },
    });
}

export async function getQuizByTheme(theme: string): Promise<Quiz[] | null> {
    return prismaClient.quiz.findMany({
        where: {
            theme,
        },
    });
}

export async function createQuiz(quiz: Quiz): Promise<Quiz> {
    return prismaClient.quiz.create({
        data: quiz,
    });
}

export async function updateQuiz(id: number, quiz: Quiz): Promise<Quiz> {
    return prismaClient.quiz.update({
        where: {
            id,
        },
        data: quiz,
    });
}

export async function deleteQuiz(id: number): Promise<Quiz> {
    return prismaClient.quiz.delete({
        where: {
            id,
        },
    });
}

export async function getQuestionsByQuizId(quizId: number): Promise<Question[]> {
    return prismaClient.question.findMany({
        where: {
            quizId,
        },
    });
}

export async function getQuestionById(id: number): Promise<Question | null> {
    return prismaClient.question.findUnique({
        where: {
            id,
        },
    });
}

export async function createQuestion(question: Question): Promise<Question> {
    return prismaClient.question.create({
        data: question,
    });
}

export async function updateQuestion(id: number, question: Question): Promise<Question> {
    return prismaClient.question.update({
        where: {
            id,
        },
        data: question,
    });
}

export async function deleteQuestion(id: number): Promise<Question> {
    return prismaClient.question.delete({
        where: {
            id,
        },
    });
}

export async function getAnswersByQuestionId(questionId: number): Promise<Answer[]> {
    return prismaClient.answer.findMany({
        where: {
            questionId,
        },
    });
}

export async function getAnswerById(id: number): Promise<Answer | null> {
    return prismaClient.answer.findUnique({
        where: {
            id,
        },
    });
}

export async function createAnswer(answer: Answer): Promise<Answer> {
    return prismaClient.answer.create({
        data: answer,
    });
}

export async function updateAnswer(id: number, answer: Answer): Promise<Answer> {
    return prismaClient.answer.update({
        where: {
            id,
        },
        data: answer,
    });
}

export async function deleteAnswer(id: number): Promise<Answer> {
    return prismaClient.answer.delete({
        where: {
            id,
        },
    });
}