// infrastructure/prisma/client.js

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

// Crea el adaptador usando la URL de la base de datos
const adapter = new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL,
});

// Crea y exporta una única instancia de Prisma
export const prisma = new PrismaClient({
    adapter,
});
