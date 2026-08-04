import { PrismaAuthRepository } from '../infrastructure/repositories/prisma-auth.repository.js';

import { RegistrarUsuario } from '../application/use-cases/auth/registrar-usuario.js';
import { Login } from '../application/use-cases/auth/login.js';

const authRepository = new PrismaAuthRepository();

export const dependencies = {
    registrarUsuario: new RegistrarUsuario(authRepository),

    loginUsuario: new Login(authRepository),
};