import { Request, Response } from 'express';
import * as authService from '../services/auth.service';

export async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;

    const userAuth = await authService.authenticateUser(email, password);
    const token = userAuth.token;
    const userId = userAuth.id;

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ id: userId, message: 'Successful login' });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
}


export function logout(req: Request, res: Response): void {
  res.clearCookie('token', {
    httpOnly: true,
    secure: true,
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  });
  res.json({ message: 'Successful logout' });
}
