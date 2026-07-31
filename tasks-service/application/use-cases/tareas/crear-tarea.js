import { Tarea } from '../../../domain/entities/tarea.js';

export class CrearTareaUseCase {

    constructor(tareaRepository) {

        this.tareaRepository = tareaRepository;

    }

    async execute(datos, userId) {

        const tarea = new Tarea({

            titulo: datos.titulo,

            descripcion: datos.descripcion ?? '',

            completada: datos.completada,

            prioridad: datos.prioridad,

            userId,

        });

        return this.tareaRepository.crear(tarea);

    }

}