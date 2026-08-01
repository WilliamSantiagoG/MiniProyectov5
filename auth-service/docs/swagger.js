import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',

        info: {
            title: 'Auth Service',
            version: '1.0.0',
            description: 'Microservicio de autenticación',
        },

        servers: [
            {
                url: 'http://localhost:3001',
            },
        ],

        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
    },

    apis: ['./routes/*.js'],
};

export const swaggerSpec = swaggerJSDoc(options);
