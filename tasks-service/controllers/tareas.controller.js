import { dependencies } from '../application/dependencies.js';

export const crearTarea = async (req, res, next) => {
    try {
        const tarea = await dependencies.crearTarea.execute(
            req.body,
            req.usuario.id,
        );
        res.status(201).json(tarea);
    } catch (err) {
        next(err);
    }
};

export const obtenerTareas = async (req, res, next) => {
    try {
        const tareas = await dependencies.obtenerTareas.execute(
            req.usuario.id,
        );

        res.json(tareas);
    } catch (err) {
        next(err);
    }
};

export const obtenerTareasid = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        const tarea = await dependencies.obtenerTareaPorId.execute(
            id,
            req.usuario.id,
        );

        if (!tarea) {
            return res.status(404).json({
                error: 'Tarea no encontrada',
            });
        }

        res.json(tarea);
    } catch (err) {
        next(err);
    }
};

export const actualizarTarea = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        const tarea = await dependencies.actualizarTarea.execute(
            id,
            req.body,
            req.usuario.id,
        );

        if (!tarea) {
            return res.status(404).json({
                error: 'Tarea no encontrada',
            });
        }

        res.json(tarea);
    } catch (err) {
        next(err);
    }
};

export const eliminarTarea = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        const eliminada = await dependencies.eliminarTarea.execute(
            id,
            req.usuario.id,
        );

        if (!eliminada) {
            return res.status(404).json({
                error: 'Tarea no encontrada',
            });
        }

        res.json({
            mensaje: 'Tarea eliminada correctamente',
        });
    } catch (err) {
        next(err);
    }
};