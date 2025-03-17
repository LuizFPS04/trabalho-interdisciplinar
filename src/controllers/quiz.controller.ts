import * as quizService from '../services/quiz.service';
import { Request, Response } from 'express';

export async function createCompleteQuiz(req: Request, res: Response): Promise<any> {
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