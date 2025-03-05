import { Request, Response, NextFunction } from 'express';

export function authorize(roles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = req.user;

        if (!user) {
            res.status(401).json({ message: 'Usuário não autenticado.' });
            return;
        }

        if (!roles.includes(user.role)) {
            return res.status(403).json({ message: 'Usuário não autorizado para essa operação.' });
        }

        next();
    };
};
