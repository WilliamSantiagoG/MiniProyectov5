# Mini Proyecto API REST con Microservicios

[![Node.js CI](https://github.com/WilliamSantiagoG/MiniProyectov5/actions/workflows/node.yml/badge.svg)](https://github.com/WilliamSantiagoG/MiniProyectov5/actions/workflows/node.yml)

## Descripción

Proyecto desarrollado con arquitectura de microservicios utilizando Node.js y Express.

El sistema está compuesto por:

- **Gateway**: Punto único de entrada para todas las peticiones HTTP.
- **Auth Service**: Encargado del registro, autenticación y generación de JWT.
- **Tasks Service**: Encargado de la gestión de tareas protegidas mediante JWT.

Cada microservicio implementa **Arquitectura Hexagonal (Ports & Adapters)**, separando la lógica de negocio de la infraestructura.

---

## Tecnologías utilizadas

- Node.js
- Express
- Prisma ORM
- SQLite
- JWT
- Swagger
- Jest
- Supertest
- Winston
- Zod
- ESLint
- Prettier
- Helmet
- CORS
- Express Rate Limit
- http-proxy-middleware

---

# Arquitectura del proyecto

```
MiniProyectov5
│
├── gateway
│
├── auth-service
│
└── tasks-service
```

---

# Responsabilidad de cada servicio

## Gateway

- Punto único de entrada.
- Redirecciona las peticiones HTTP hacia cada microservicio.
- Puerto:

```
http://localhost:3000
```

---

## Auth Service

Responsable de:

- Registro de usuarios.
- Inicio de sesión.
- Generación de JWT.

Puerto interno:

```
http://localhost:3001
```

---

## Tasks Service

Responsable de:

- Crear tareas.
- Consultar tareas.
- Actualizar tareas.
- Eliminar tareas.

Puerto interno:

```
http://localhost:3002
```

---

# Endpoints disponibles

## Auth

Registrar usuario

```
POST http://localhost:3000/auth/api/register
```

Login

```
POST http://localhost:3000/auth/api/login
```

---

## Tasks

Obtener tareas

```
GET http://localhost:3000/tasks/api/tareas
```

Crear tarea

```
POST http://localhost:3000/tasks/api/tareas
```

Obtener una tarea

```
GET http://localhost:3000/tasks/api/tareas/:id
```

Actualizar tarea

```
PUT http://localhost:3000/tasks/api/tareas/:id
```

Eliminar tarea

```
DELETE http://localhost:3000/tasks/api/tareas/:id
```

---

# Documentación Swagger

Auth Service

```
http://localhost:3001/api-docs
```

Tasks Service

```
http://localhost:3002/api-docs
```

---

# Ejecución del proyecto

## 1. Instalar dependencias

### Gateway

```bash
cd gateway
npm install
```

### Auth Service

```bash
cd auth-service
npm install
```

### Tasks Service

```bash
cd tasks-service
npm install
```

---

## 2. Ejecutar los servicios

### Auth Service

```bash
npm run dev
```

Puerto:

```
3001
```

### Tasks Service

```bash
npm run dev
```

Puerto:

```
3002
```

### Gateway

```bash
npm run dev
```

Puerto:

```
3000
```

---

# Pruebas

Cada microservicio cuenta con:

- Pruebas unitarias de los Casos de Uso.
- Pruebas de integración con Supertest.

Ejecutar:

```bash
npm test
```

---

# Calidad de código

Verificar ESLint

```bash
npm run lint
```

Verificar formato

```bash
npm run format:check
```

Formatear automáticamente

```bash
npm run format
```

---

# Integración continua

El proyecto cuenta con un workflow de **GitHub Actions** que ejecuta automáticamente:

- Instalación de dependencias.
- Generación del cliente Prisma.
- ESLint.
- Prettier.
- Jest.

Cada vez que se realiza un **push** sobre la rama **main**.

# Arquitectura del Proyecto

El proyecto sigue una arquitectura basada en microservicios con un API Gateway como punto de entrada.

- API Gateway
- Auth Service
- Tasks Service
- Arquitectura Hexagonal
- Factory
- Observer (EventEmitter)
- Prisma ORM
- SQLite

## Diagrama de Arquitectura

![Arquitectura](docs/architecture-diagram.png)