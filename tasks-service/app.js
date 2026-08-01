import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import router from './routes/tareas.routes.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { limiter } from './middlewares/rateLimiter.js';

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger.js';

const app = express();

app.use(
    cors({
        origin: 'http://127.0.0.1:5500',
    }),
);

app.use(helmet());

app.use(express.json());

app.use(limiter);

// Solo rutas de tareas
app.use('/api', router);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Manejo de errores
app.use(errorHandler);

export default app;
