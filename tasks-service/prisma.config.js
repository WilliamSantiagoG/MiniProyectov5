import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, env } from 'prisma/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar el .env de la raíz del proyecto
dotenv.config({
    path: path.resolve(__dirname, '../.env'),
});

export default defineConfig({
    schema: 'infrastructure/prisma/schema.prisma',

    migrations: {
        path: 'infrastructure/prisma/migrations',
        seed: 'node infrastructure/prisma/seed.js',
    },

    datasource: {
        url: env('DATABASE_URL'),
    },
});
