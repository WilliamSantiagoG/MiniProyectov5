import bcrypt from 'bcrypt';
import { prisma } from './client.js';

async function main() {

    const passwordHash = await bcrypt.hash('1234567', 10);

    await prisma.user.create({

        data: {

            nombre: 'Administrador Pedro',

            correo: 'adminPedro@gmail.com',

            password: passwordHash,

        },

    });

    console.log('Seeder del Auth Service ejecutado correctamente');

}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });