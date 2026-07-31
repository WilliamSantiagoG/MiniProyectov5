// Pruebas de los Casos de Uso (Use Cases)

import {
    jest,
    describe,
    test,
    expect,
    beforeEach,
} from '@jest/globals';

// Mock del repositorio
const repository = {
    crear: jest.fn(),
    obtenerTodas: jest.fn(),
    obtenerPorId: jest.fn(),
    actualizar: jest.fn(),
    eliminar: jest.fn(),
};

// Importar los casos de uso
import { CrearTareaUseCase } from '../application/use-cases/tareas/crear-tarea.js';
import { ObtenerTareasUseCase } from '../application/use-cases/tareas/obtener-tareas.js';
import { ObtenerTareaPorIdUseCase } from '../application/use-cases/tareas/obtener-tarea-por-id.js';
import { ActualizarTareaUseCase } from '../application/use-cases/tareas/actualizar-tarea.js';
import { EliminarTareaUseCase } from '../application/use-cases/tareas/eliminar-tarea.js';

beforeEach(() => {
    jest.clearAllMocks();
});

describe('Pruebas de los Use Cases de Tareas', () => {

    test('Debe crear una tarea', async () => {

        repository.crear.mockResolvedValue({
            id: 1,
            titulo: 'Aprender Prisma',
            descripcion: '',
            completada: false,
            prioridad: 1,
        });

        const crearTarea = new CrearTareaUseCase(repository);

        const resultado = await crearTarea.execute(
            {
                titulo: 'Aprender Prisma',
                prioridad: 1,
            },
            1,
        );

        expect(resultado.id).toBe(1);
        expect(resultado.titulo).toBe('Aprender Prisma');

    });

    test('Debe obtener todas las tareas', async () => {

        repository.obtenerTodas.mockResolvedValue([
            {
                id: 1,
                titulo: 'Express',
            },
            {
                id: 2,
                titulo: 'Prisma',
            },
        ]);

        const obtenerTareas =
            new ObtenerTareasUseCase(repository);

        const resultado =
            await obtenerTareas.execute(1);

        expect(resultado).toHaveLength(2);

    });

    test('Debe obtener una tarea por id', async () => {

        repository.obtenerPorId.mockResolvedValue({
            id: 3,
            titulo: 'Zod',
        });

        const obtenerPorId =
            new ObtenerTareaPorIdUseCase(repository);

        const resultado =
            await obtenerPorId.execute(3, 1);

        expect(resultado.id).toBe(3);
        expect(resultado.titulo).toBe('Zod');

    });

    test('Debe actualizar una tarea', async () => {

        repository.obtenerPorId.mockResolvedValue({
            id: 1,
            titulo: 'Viejo',
        });

        repository.actualizar.mockResolvedValue({
            id: 1,
            titulo: 'Nuevo',
        });

        const actualizar =
            new ActualizarTareaUseCase(repository);

        const resultado =
            await actualizar.execute(
                100,
                {
                    titulo: 'Nuevo',
                },
                1,
            );

        expect(resultado.titulo).toBe('Nuevo');

    });

    test('No debe actualizar una tarea inexistente', async () => {

        repository.obtenerPorId.mockResolvedValue(null);

        const actualizar =
            new ActualizarTareaUseCase(repository);

        const resultado =
            await actualizar.execute(
                100,
                {
                    titulo: 'Nuevo',
                },
                1,
            );

        expect(resultado).toBeNull();

    });

    test('Debe eliminar una tarea', async () => {

        repository.obtenerPorId.mockResolvedValue({
            id: 1,
        });

        repository.eliminar.mockResolvedValue();

        const eliminar =
            new EliminarTareaUseCase(repository);

        const resultado =
            await eliminar.execute(
                1,
                1,
            );

        expect(resultado).toBe(true);

    });

    test('No debe eliminar una tarea inexistente', async () => {

        repository.obtenerPorId.mockResolvedValue(null);

        const eliminar =
            new EliminarTareaUseCase(repository);

        const resultado =
            await eliminar.execute(
                100,
                1,
            );

        expect(resultado).toBe(false);

    });

});