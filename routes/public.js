import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// Cadastro
router.post('/cadastro', async (req, res) => {

    try {
        const user = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, salt);

        const userDB = await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: hashPassword
            }
        })
        res.status(201).json(userDB);
    } catch (error) {
      res.status(500).json({ message: 'Errro no servidor, tente novamente' });
    }
});

// Login
router.get('/login', async (req, res) => {
    try {
        const userInfo = req.body;

        // Busca o usuário no banco de dados
        const user = await prisma.user.findUnique({
            where: { email: userInfo.email },
        })

        // Verifica se o usuário existe no banco de dados
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Compara a senha informada com a senha salva no banco de dados
        const isMatch = await bcrypt.compare(userInfo.password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Senha inválida' });
        }

        // Gera um token JWT
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' });

        res.status(200).json(token);
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor, tente novamente' });
    }
});

export default router;