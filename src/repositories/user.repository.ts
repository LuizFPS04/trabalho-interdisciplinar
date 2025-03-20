import bcrypt from "bcryptjs";
import { prismaClient } from "../config/db";
import { User } from "@prisma/client";

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

export async function getUserByIdWithDetails(id: number): Promise<User | null> {
    return prismaClient.user.findUnique({
        where: { id },
        include: {
            quizzes: true,
            rankings: true,
            results: true
        },
    });
}

export async function createUser(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    return prismaClient.user.create({
        data: {
            ...userData,
            password: hashedPassword,
        },
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