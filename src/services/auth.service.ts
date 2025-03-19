import * as userRepository from '../repositories/user.repository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';

// Verificação da variável de ambiente JWT_SECRET
const JWT_SECRET: any = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET não está definido no ambiente");
}

// Gera o token JWT
function generateToken(user: User): string {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: '24h',
  });
}

export async function authenticateUser(email: string, password: string): Promise<string> {
  // Busca o usuário no repositório
  const user = await userRepository.getUserByMail(email);
  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  console.log(user)

  // Compara a senha fornecida com a senha armazenada
  const isPasswordCorrect = await userRepository.comparePassword(password, user.password);
  console.log(isPasswordCorrect)
  if (!isPasswordCorrect) {
    throw new Error('Senha incorreta');
  }

  // Gera o token JWT
  const token = generateToken(user);
  return token;
}
