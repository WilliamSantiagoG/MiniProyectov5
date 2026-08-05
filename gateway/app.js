import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use(cors());

app.use(helmet());

app.use(
    '/auth',
    createProxyMiddleware({
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite: {
            '^/auth': '/api',
        },
    }),
);

app.use(
    '/tasks',
    createProxyMiddleware({
        target: 'http://localhost:3002',
        changeOrigin: true,
        pathRewrite: {
            '^/tasks': '/api',
        },
    }),
);

export default app;
