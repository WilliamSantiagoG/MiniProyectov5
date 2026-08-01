import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'prisma/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    schema: path.join(__dirname, 'infrastructure/prisma/schema.prisma'),

    migrations: {
        path: path.join(__dirname, 'infrastructure/prisma/migrations'),
        seed: 'node infrastructure/prisma/seed.js',
    },

    datasource: {
        url: process.env.DATABASE_URL,
    },

    env: {
        dotenv: path.join(__dirname, '../.env'),
    },
});
