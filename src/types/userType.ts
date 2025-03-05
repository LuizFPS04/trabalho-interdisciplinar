export interface User {
    id: number;
    nickname: string;
    email: string;
    password: string;
    name: string;
    birth: Date;
    createdAt?: Date;
    updatedAt?: Date;
    /* quizzes?: QuizType[];
    results?: ResultType[];
    Ranking?: RankingType[]; */
  };
  