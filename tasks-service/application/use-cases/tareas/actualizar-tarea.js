import taskEvents from '../../../shared/events/task.events.js';

export class ActualizarTareaUseCase {
    constructor(tareaRepository) {
        this.tareaRepository = tareaRepository;
    }

    async execute(id, datos, userId) {
        const tareaActual = await this.tareaRepository.obtenerPorId(id, userId);

        if (!tareaActual) {
            return null;
        }

        const { titulo, descripcion, completada, prioridad } = datos;

        const datosActualizar = {
            ...(titulo !== undefined && { titulo }),
            ...(descripcion !== undefined && {
                descripcion,
            }),
            ...(completada !== undefined && {
                completada,
            }),
            ...(prioridad !== undefined && {
                prioridad,
            }),
        };

        const tieneCambios = Object.keys(datosActualizar).some((key) => {
            return tareaActual[key] !== datosActualizar[key];
        });

        if (!tieneCambios) {
            return tareaActual;
        }

        const tareaActualizada = await this.tareaRepository.actualizar(
            id,
            userId,
            datosActualizar,
        );

        if (!tareaActual.completada && tareaActualizada.completada) {
            taskEvents.emit('tareaCompletada', tareaActualizada);
        }

        return tareaActualizada;
    }
}
