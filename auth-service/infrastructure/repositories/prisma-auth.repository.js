import { AuthRepository } from '../../domain/ports/auth.repository.js';
import { prisma } from '../prisma/client.js';

export class PrismaAuthRepository extends AuthRepository {

    constructor() {
        super();
    }

    buscarPorCorreo(correo) {
        return prisma.user.findUnique({
            where: {
                correo,
            },
        });
    }

    crear(datos) {
        return prisma.user.create({
            data: datos,
        });
    }

    buscarPorId(id) {
        return prisma.user.findUnique({
            where: {
                id,
            },
        });
    }

}