import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class Login {

    constructor(authRepository) {
        this.authRepository = authRepository;
    }

    async ejecutar({
        correo,
        password,
    }) {

        const usuario =
            await this.authRepository.buscarPorCorreo(correo);

        if (!usuario) {
            throw new Error('Credenciales inválidas');
        }

        const coincide =
            await bcrypt.compare(
                password,
                usuario.password,
            );

        if (!coincide) {
            throw new Error('Credenciales inválidas');
        }

        return jwt.sign(
            {
                id: usuario.id,
                correo: usuario.correo,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h',
            },
        );

    }

}