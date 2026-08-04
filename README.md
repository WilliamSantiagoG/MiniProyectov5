
# MiniProyectoV5

[![Node.js CI](https://github.com/WilliamSantiagoG/MiniProyectov5/actions/workflows/node.yml/badge.svg)](https://github.com/WilliamSantiagoG/MiniProyectov5/actions/workflows/node.yml)

## Descripción

MiniProyectoV5 es un sistema desarrollado con arquitectura de microservicios y Arquitectura Hexagonal.

El proyecto está compuesto por dos microservicios independientes:

- **Auth Service**: encargado del registro de usuarios, autenticación y generación de JWT.
- **Tasks Service**: encargado de la administración de tareas protegidas mediante JWT.

Cada microservicio cuenta con:

- Arquitectura Hexagonal
- Prisma ORM
- SQLite
- Swagger
- JWT
- Winston
- Jest
- Supertest
- ESLint
- Prettier

---

# Arquitectura

El proyecto implementa Arquitectura Hexagonal.

```
Controller
        │
        ▼
Use Case
        │
        ▼
Repository (Puerto)
        │
        ▼
Prisma Repository
        │
        ▼
SQLite
```

---

# Estructura del proyecto

```
MiniProyectoV5
│
├── auth-service
│   ├── application
│   ├── controllers
│   ├── domain
│   ├── infrastructure
│   ├── routes
│   └── tests
│
├── tasks-service
│   ├── application
│   ├── controllers
│   ├── domain
│   ├── infrastructure
│   ├── routes
│   └── tests
│
└── .github
```

---

# Tecnologías

- Node.js
- Express
- Prisma ORM
- SQLite
- JWT
- Swagger
- Winston
- Jest
- Supertest
- ESLint
- Prettier

---

# Instalación

Clonar el proyecto

```bash
git clone https://github.com/WilliamSantiagoG/MiniProyectov5.git
```

Entrar al proyecto

```bash
cd MiniProyectoV5
```

Instalar dependencias

```bash
cd auth-service
npm install

cd ../tasks-service
npm install
---

# Ejecutar los microservicios

### Auth Service

```bash
cd auth-service
npm run dev
```

Disponible en:

```
http://localhost:3001
```

---

### Tasks Service

```bash
cd tasks-service
npm run dev
```

Disponible en:

```
http://localhost:3002
```

---

# Documentación Swagger

## Auth Service

```
http://localhost:3001/api-docs
```

## Tasks Service

```
http://localhost:3002/api-docs
```

---

# Ejecutar pruebas

Auth Service

```bash
npm test
```

Tasks Service

```bash
npm test
```

---

# Calidad del código

Ejecutar ESLint

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

# Integración Continua

El proyecto utiliza **GitHub Actions** para ejecutar automáticamente:

- Instalación de dependencias
- Generación del cliente Prisma
- ESLint
- Prettier
- Pruebas unitarias
- Pruebas de integración

Cada vez que se realiza un **push** a la rama **main**, el workflow valida ambos microservicios.

---

# Autor

William Santiago Guerrero

Tecnólogo en Análisis y Desarrollo de Software