import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar el .env de la raíz del proyecto
dotenv.config({
    path: path.resolve(__dirname, '../../../.env'),
});

const adapter = new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL,
});

export const prisma = new PrismaClient({
    adapter,
});
