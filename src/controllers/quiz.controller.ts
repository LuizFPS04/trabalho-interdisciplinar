import * as quizService from '../services/quiz.service';
import { Request, Response } from 'express';

export async function createCompleteQuiz(req: Request, res: Response): Promise<any> {
    try {

        const body = req.body;

        const createdQuiz = await quizService.createQuizWithQuestionsAndAnswers(body);

        if (!createdQuiz) {
            throw new Error('Quiz not created');
        }

        return res.status(201).send({
            success: true,
            message: 'Quiz created successfully',
            data: createdQuiz,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function createQuiz(req: Request, res: Response): Promise<any> {
    try {

        const body = req.body;

        const createdQuiz = await quizService.createQuiz(body);

        if (!createdQuiz) {
            throw new Error('Quiz not created');
        }

        return res.status(201).send({
            success: true,
            message: 'Quiz created successfully',
            data: createdQuiz,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getAllQuizzes(req: Request, res: Response): Promise<any> {
    try {
        const quizzes = await quizService.getAllQuizzes();

        return res.status(200).send({
            success: true,
            message: 'Quizzes fetched successfully',
            data: quizzes,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getQuizById(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;
        const quiz = await quizService.getQuizById(Number(id));

        if (!quiz) {
            throw new Error('Quiz not found');
        }

        return res.status(200).send({
            success: true,
            message: 'Quiz fetched successfully',
            data: quiz,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getQuizByTheme(req: Request, res: Response): Promise<any> {
    try {

        const theme: any = req.query.theme;

        const quiz = await quizService.getQuizByThemeWithQuestionsAndAnswers(theme);

        return res.status(200).send({
            success: true,
            message: 'Quiz fetched successfully',
            data: quiz,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function createQuestion(req: Request, res: Response): Promise<any> {
    try {

        const body = req.body;

        const question = await quizService.createQuestion(body);

        if (!question) {
            throw new Error('Question not created');
        }

        return res.status(201).send({
            success: true,
            message: 'Question created successfully',
            data: question,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getQuestionsByQuizId(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        const question = await quizService.getQuestionsByQuizId(Number(id));

        return res.status(200).send({
            success: true,
            message: 'Question fetched successfully',
            data: question,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function deleteQuestion(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        const question = await quizService.deleteQuestion(Number(id));

        return res.status(200).send({
            success: true,
            message: 'Question deleted successfully',
            data: question,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function createAnswer(req: Request, res: Response): Promise<any> {
    try {

        const body = req.body;

        const answer = await quizService.createAnswer(body);

        if (!answer) {
            throw new Error('Answer not created');
        }

        return res.status(201).send({
            success: true,
            message: 'Answer created successfully',
            data: answer,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getAnswersByQuestionId(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        const answers = await quizService.getAnswersByQuestionId(Number(id));

        return res.status(200).send({
            success: true,
            message: 'Answer fetched successfully',
            data: answers,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function deleteAnswer(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        const answer = await quizService.deleteAnswer(Number(id));

        return res.status(200).send({
            success: true,
            message: 'Answer deleted successfully',
            data: answer,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function deleteQuiz(req: Request, res: Response): Promise<any> {
    try {

        const { id } = req.params;

        const quiz = await quizService.deleteQuiz(Number(id));

        return res.status(200).send({
            success: true,
            message: 'Quiz deleted successfully',
            data: quiz,
        });

    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}