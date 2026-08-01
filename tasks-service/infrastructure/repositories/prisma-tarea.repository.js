import { TareaRepository } from '../../domain/ports/tarea.repository.js';
import { prisma } from '../prisma/client.js';

export class PrismaTareaRepository extends TareaRepository {
    constructor() {
        super();
    }

    crear(datos) {
        return prisma.tarea.create({
            data: datos,
        });
    }

    obtenerTodas(userId) {
        return prisma.tarea.findMany({
            where: { userId },
        });
    }

    obtenerPorId(id, userId) {
        return prisma.tarea.findFirst({
            where: {
                id,
                userId,
            },
        });
    }

    async actualizar(id, userId, datos) {
        const tarea = await prisma.tarea.findFirst({
            where: {
                id,
                userId,
            },
        });

        if (!tarea) {
            return null;
        }

        return prisma.tarea.update({
            where: {
                id,
            },
            data: datos,
        });
    }

    async eliminar(id, userId) {
        const tarea = await prisma.tarea.findFirst({
            where: {
                id,
                userId,
            },
        });

        if (!tarea) {
            return null;
        }

        return prisma.tarea.delete({
            where: {
                id,
            },
        });
    }
}
