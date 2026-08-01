import bcrypt from 'bcrypt';

export class RegistrarUsuario {
    constructor(authRepository) {
        this.authRepository = authRepository;
    }

    async ejecutar({ nombre, correo, password }) {
        const existe = await this.authRepository.buscarPorCorreo(correo);

        if (existe) {
            throw new Error('El correo ya está registrado');
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const usuario = await this.authRepository.crear({
            nombre,
            correo,
            password: passwordHash,
        });

        return {
            id: usuario.id,
            nombre: usuario.nombre,
            correo: usuario.correo,
        };
    }
}
