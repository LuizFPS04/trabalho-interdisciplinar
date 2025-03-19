import { Router } from 'express';
import * as quizController from '../controllers/quiz.controller';

const router = Router();

router.post('/quizzes/complete', quizController.createCompleteQuiz);
router.post('/quizzes', quizController.createQuiz);
router.get('/quizzes', quizController.getAllQuizzes);
router.get('/quizzes/:id', quizController.getQuizById);
router.get('/quizzes/theme', quizController.getQuizByTheme);

router.post('/questions', quizController.createQuestion);
router.get('/questions/quiz/:id', quizController.getQuestionsByQuizId);
router.delete('/questions/:id', quizController.deleteQuestion);

router.post('/answers', quizController.createAnswer);
router.get('/answers/question/:id', quizController.getAnswersByQuestionId);
router.delete('/answers/:id', quizController.deleteAnswer);
router.delete('/quizzes/:id', quizController.deleteQuiz);

export default router;
