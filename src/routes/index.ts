import express from "express";
import quizRouter from './quiz.routes';
import userRouter from './user.routes';

const router = express.Router();

router.use("/v1", quizRouter);
router.use("/v1", userRouter);

export default router;