// user.routes.ts
import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import * as authController from '../controllers/auth.controller';

// Ajustando as importações dos middlewares
import { validateCreateUser } from '../middlewares/validationMiddleware'; // Importando ambos os middlewares
import { authMiddleware } from '../middlewares/authMiddleware'; // Ajuste o nome do arquivo
import { authorize } from '../middlewares/authorizationMiddleware'; // Ajuste o nome do arquivo

const router = Router();

// **Rotas de Autenticação**
router.post('/login', authController.login); // Login
router.post('/logout', authController.logout); // Logout

// **Rotas de Usuário**
router.post('/user', validateCreateUser, userController.createUser); // Criar usuário (com validação)
router.get('/user', authMiddleware, authorize(['admin']), userController.getAllUsers); // Obter todos os usuários (com autenticação e autorização)
router.get('/user/:id', authMiddleware, userController.getUserById); // Obter um usuário por ID (com autenticação)
router.get('/user/details', authMiddleware, userController.getUserWithDetails); // Obter um usuário por email ou nickname (com autenticação)
router.get('/user/email', authMiddleware, userController.getUserByMail); // Obter usuário por email (com autenticação)
router.get('/user/nickname', authMiddleware, userController.getUserByNickname); // Obter usuário por nickname (com autenticação)
router.put('/user', authMiddleware, authorize(['admin', 'normal']), userController.updateUser); // Atualizar um usuário (com autenticação e autorização)
router.delete('/user', authMiddleware, authorize(['admin']), userController.deleteUser); // Deletar um usuário (com autenticação e autorização)

export default router;
