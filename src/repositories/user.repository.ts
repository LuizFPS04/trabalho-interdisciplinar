import bcrypt from "bcryptjs";
import { prismaClient } from "../config/db";
import { User } from "../types/userType";

export async function getAllUsers(): Promise<User[]> {
    return prismaClient.user.findMany();
}

export async function getUserById(id: number): Promise<User | null> {
    return prismaClient.user.findUnique({
        where: {
            id,
        },
    });
}

export async function getUserByMail(email: string): Promise<User | null> {
    return prismaClient.user.findUnique({
        where: {
            email,
        },
    });
}

export async function getUserByNickname(nickname: string): Promise<User | null> {
    return prismaClient.user.findUnique({
        where: {
            nickname,
        },
    });
}

export async function createUser(user: User): Promise<User> {
    return prismaClient.user.create({
        data: user,
    });
}

export async function updateUser(id: number, user: User): Promise<User> {
    return prismaClient.user.update({
        where: {
            id,
        },
        data: user,
    });
}

export async function deleteUser(id: number): Promise<User> {
    return prismaClient.user.delete({
        where: {
            id,
        },
    });
}

export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }