export class Tarea {
    constructor({
        id,
        titulo,
        descripcion = '',
        completada = false,
        prioridad = 1,
        userId,
        creado,
    }) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completada = completada;
        this.prioridad = prioridad;
        this.userId = userId;
        this.creado = creado;
    }
}
