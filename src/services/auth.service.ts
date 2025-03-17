// src/services/authService.ts
import * as userRepository from '../repositories/user.repository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../types/userType';

const JWT_SECRET: any = process.env.JWT_SECRET;

// Gera o token JWT
function generateToken(user: User): string {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: '24h',
  });
}

export async function authenticateUser(email: string, password: string): Promise<string | null> {
  const user = await userRepository.getUserByMail(email);
  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  const isPasswordCorrect = await userRepository.comparePassword(password, user.password);
  if (!isPasswordCorrect) {
    throw new Error('Senha incorreta');
  }

  const token = generateToken(user);
  return token;
}
