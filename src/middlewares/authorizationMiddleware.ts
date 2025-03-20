import { Request, Response, NextFunction } from 'express';

export function authorize(roles: string[]): any {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = req.user;

        if (!user) {
            return res.status(401).json({ message: 'User not authenticated.' });
        }

        if (!user.role || !roles.includes(user.role)) {
            return res.status(403).json({
                message: `Access denied. Required permissions: ${roles.join(', ')}`
            });
        }

        next();
    };
}
