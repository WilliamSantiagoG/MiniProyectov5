import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import authRouter from './routes/auth.routes.js';

import { limiter } from './middlewares/rateLimiter.js';
import { errorHandler } from './middlewares/errorHandler.js';

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger.js';

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(limiter);

// ÚNICAMENTE las rutas de autenticación
app.use('/api', authRouter);

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec),
);

app.use(errorHandler);

export default app;