import { PrismaAuthRepository } from '../infrastructure/repositories/prisma-auth.repository.js';

import { RegistrarUsuario } from '../application/use-cases/auth/registrar-usuario.js';
import { Login } from '../application/use-cases/auth/login.js';

const authRepository = new PrismaAuthRepository();

const registrarUsuario = new RegistrarUsuario(authRepository);

const loginUsuario = new Login(authRepository);

export const registrar = async (req, res, next) => {
    try {
        const usuario = await registrarUsuario.ejecutar(req.body);

        res.status(201).json(usuario);
    } catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {
    try {
        const token = await loginUsuario.ejecutar(req.body);

        res.json({
            token,
        });
    } catch (err) {
        next(err);
    }
};
