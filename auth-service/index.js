import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import app from './app.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, '../.env'),
});

const PORT = process.env.PORT_AUTH || 3001;

app.listen(PORT, () => {
    console.log(`Auth Service ejecutándose en http://localhost:${PORT}`);
});