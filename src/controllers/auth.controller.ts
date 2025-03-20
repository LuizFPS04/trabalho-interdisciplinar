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
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600 * 24000,
      sameSite: 'strict', 
    });

    res.json({ id: userId, message: 'Login bem-sucedido' });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
}


export function logout(req: Request, res: Response): void {
  res.clearCookie('token');
  res.json({ message: 'Logout bem-sucedido' });
}
