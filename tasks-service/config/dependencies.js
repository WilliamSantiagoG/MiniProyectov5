import { PrismaTareaRepository } from '../infrastructure/repositories/prisma-tarea.repository.js';

import { CrearTareaUseCase } from '../application/use-cases/tareas/crear-tarea.js';
import { ObtenerTareasUseCase } from '../application/use-cases/tareas/obtener-tareas.js';
import { ObtenerTareaPorIdUseCase } from '../application/use-cases/tareas/obtener-tarea-por-id.js';
import { ActualizarTareaUseCase } from '../application/use-cases/tareas/actualizar-tarea.js';
import { EliminarTareaUseCase } from '../application/use-cases/tareas/eliminar-tarea.js';

const repository = new PrismaTareaRepository();

export const dependencies = {
    crearTarea: new CrearTareaUseCase(repository),

    obtenerTareas: new ObtenerTareasUseCase(repository),

    obtenerTareaPorId: new ObtenerTareaPorIdUseCase(repository),

    actualizarTarea: new ActualizarTareaUseCase(repository),

    eliminarTarea: new EliminarTareaUseCase(repository),
};