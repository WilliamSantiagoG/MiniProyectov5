import { dependencies } from '../config/dependencies.js';

export const registrar = async (req, res, next) => {
    try {
        const usuario = await dependencies.registrarUsuario.ejecutar(req.body);

        res.status(201).json(usuario);
    } catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {
    try {
        const token = await dependencies.loginUsuario.ejecutar(req.body);

        res.json({ token });
    } catch (err) {
        next(err);
    }
};
