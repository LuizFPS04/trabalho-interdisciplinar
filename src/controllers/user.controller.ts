import * as userService from '../services/user.service';
import { UserFactory } from '../factories/user.factory';
import { Request, Response } from 'express';

export async function createUser(req: Request, res: Response): Promise<any> {
    try {
        const { name, email, nickname, password, birth, role } = req.body;
        const userType = role || 'normal';

        const newUser = UserFactory.createUser(userType, { name, email, nickname, password, birth });

        const createdUser = await userService.createUser(newUser);

        if (!createdUser) {
            throw new Error('User not created');
        }

        return res.status(201).send({
            success: true,
            message: 'User created successfully',
            data: createdUser,
        });
    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getAllUsers(req: Request, res: Response): Promise<any> {
    try {
        const users = await userService.getAllUsers();

        return res.status(200).send({
            success: true,
            message: 'Users fetched successfully',
            data: users,
        });
    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getUserById(req: Request, res: Response): Promise<any> {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(Number(id));

        if (!user) {
            throw new Error('User not found');
        }

        return res.status(200).send({
            success: true,
            message: 'User fetched successfully',
            data: user,
        });
    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getUserByMail(req: Request, res: Response): Promise<any> {
    try {
        const email = req.query.email as string;
        const user = await userService.getUserByMail(email);

        if (!user) {
            throw new Error('User not found');
        }

        return res.status(200).send({
            success: true,
            message: 'User fetched successfully',
            data: user,
        });
    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function getUserByNickname(req: Request, res: Response): Promise<any> {
    try {
        const nickname = req.query.nickname as string;
        const user = await userService.getUserByNickname(nickname);

        if (!user) {
            throw new Error('User not found');
        }

        return res.status(200).send({
            success: true,
            message: 'User fetched successfully',
            data: user,
        });
    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}

export async function updateUser(req: Request, res: Response): Promise<any> {
    try {
        const field = req.params.email || req.params.nickname;
        const { name, email, nickname, password, role } = req.body;
        const userType = role || 'normal';

        const updatedUser = UserFactory.createUser(userType, { name, email, nickname, password });

        const user = await userService.updateUser(field, updatedUser);

        return res.status(200).send({
            success: true,
            message: 'User updated successfully',
            data: user,
        });
    } catch (error: any) {
        console.error(error);
        return res.status(error.status || 500).send({
            success: false,
            message: error.message || 'Internal server error',
        });
    }
}