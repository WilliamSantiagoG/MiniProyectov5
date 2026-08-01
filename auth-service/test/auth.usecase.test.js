import { jest, describe, test, expect, beforeEach } from '@jest/globals';

// Mock de bcrypt
jest.unstable_mockModule('bcrypt', () => ({
    default: {
        hash: jest.fn(),
        compare: jest.fn(),
    },
}));

// Mock de JWT
jest.unstable_mockModule('jsonwebtoken', () => ({
    default: {
        sign: jest.fn(),
    },
}));

// Importar DESPUÉS de crear los mocks
const bcrypt = (await import('bcrypt')).default;
const jwt = (await import('jsonwebtoken')).default;

const { RegistrarUsuario } =
    await import('../application/use-cases/auth/registrar-usuario.js');

const { Login } = await import('../application/use-cases/auth/login.js');

// Repositorio falso
const repository = {
    buscarPorCorreo: jest.fn(),
    crear: jest.fn(),
};

beforeEach(() => {
    jest.clearAllMocks();
});

describe('Casos de uso de Autenticación', () => {
    test('Debe registrar un usuario', async () => {
        repository.buscarPorCorreo.mockResolvedValue(null);

        bcrypt.hash.mockResolvedValue('passwordHash');

        repository.crear.mockResolvedValue({
            id: 1,
            nombre: 'Administrador',
            correo: 'admin@gmail.com',
            password: 'passwordHash',
        });

        const registrar = new RegistrarUsuario(repository);

        const resultado = await registrar.ejecutar({
            nombre: 'Administrador',
            correo: 'admin@gmail.com',
            password: '123456',
        });

        expect(resultado.id).toBe(1);
        expect(resultado.nombre).toBe('Administrador');
        expect(resultado.correo).toBe('admin@gmail.com');
    });

    test('No debe registrar un correo repetido', async () => {
        repository.buscarPorCorreo.mockResolvedValue({
            id: 1,
            correo: 'admin@gmail.com',
        });

        const registrar = new RegistrarUsuario(repository);

        await expect(
            registrar.ejecutar({
                nombre: 'Administrador',
                correo: 'admin@gmail.com',
                password: '123456',
            }),
        ).rejects.toThrow('El correo ya está registrado');
    });

    test('Debe iniciar sesión correctamente', async () => {
        repository.buscarPorCorreo.mockResolvedValue({
            id: 1,
            correo: 'admin@gmail.com',
            password: 'passwordHash',
        });

        bcrypt.compare.mockResolvedValue(true);

        jwt.sign.mockReturnValue('TOKEN_JWT');

        const login = new Login(repository);

        const token = await login.ejecutar({
            correo: 'admin@gmail.com',
            password: '123456',
        });

        expect(token).toBe('TOKEN_JWT');
    });

    test('No debe iniciar sesión con contraseña incorrecta', async () => {
        repository.buscarPorCorreo.mockResolvedValue({
            id: 1,
            correo: 'admin@gmail.com',
            password: 'passwordHash',
        });

        bcrypt.compare.mockResolvedValue(false);

        const login = new Login(repository);

        await expect(
            login.ejecutar({
                correo: 'admin@gmail.com',
                password: '123456',
            }),
        ).rejects.toThrow('Credenciales inválidas');
    });

    test('No debe iniciar sesión con un correo inexistente', async () => {
        repository.buscarPorCorreo.mockResolvedValue(null);

        const login = new Login(repository);

        await expect(
            login.ejecutar({
                correo: 'otro@gmail.com',
                password: '123456',
            }),
        ).rejects.toThrow('Credenciales inválidas');
    });

    test('Debe generar un JWT', async () => {
        repository.buscarPorCorreo.mockResolvedValue({
            id: 10,
            correo: 'admin@gmail.com',
            password: 'passwordHash',
        });

        bcrypt.compare.mockResolvedValue(true);

        jwt.sign.mockReturnValue('JWT_GENERADO');

        const login = new Login(repository);

        const token = await login.ejecutar({
            correo: 'admin@gmail.com',
            password: '123456',
        });

        expect(jwt.sign).toHaveBeenCalled();

        expect(token).toBe('JWT_GENERADO');
    });
});
