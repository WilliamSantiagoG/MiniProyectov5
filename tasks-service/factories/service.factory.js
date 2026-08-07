import { PrismaTareaRepository } from '../infrastructure/repositories/prisma-tarea.repository.js';

import { CrearTareaUseCase } from '../application/use-cases/tareas/crear-tarea.js';
import { ObtenerTareasUseCase } from '../application/use-cases/tareas/obtener-tareas.js';
import { ObtenerTareaPorIdUseCase } from '../application/use-cases/tareas/obtener-tarea-por-id.js';
import { ActualizarTareaUseCase } from '../application/use-cases/tareas/actualizar-tarea.js';
import { EliminarTareaUseCase } from '../application/use-cases/tareas/eliminar-tarea.js';

export function createServices() {
    const tareaRepository = new PrismaTareaRepository();

    return {
        crearTarea: new CrearTareaUseCase(tareaRepository),

        obtenerTareas: new ObtenerTareasUseCase(tareaRepository),

        obtenerTareaPorId: new ObtenerTareaPorIdUseCase(tareaRepository),

        actualizarTarea: new ActualizarTareaUseCase(tareaRepository),

        eliminarTarea: new EliminarTareaUseCase(tareaRepository),
    };
}
