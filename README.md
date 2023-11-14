# FoodLocalMarketplacePlus

API para el proyecto de Final de la materia de Tecnologias para Moviles que da Eder.

## Requisitos antes de instalar

- Tener node instalado
- Tener PostgreSQL
- Crear base de datos llamada: foodLocal
- Agregar archivo .env y sus variables

### Variables en .env

- DATABASE_URL="postgresql://tuUsuario:tuContraseña@localhost:5432/foodLocal?schema=public"
- ACCESS_TOKEN_SECRET='cda9e69a596155d6508c6f20f152baee27ad9bf41fadfdbb695b347bdef04fbb50ff672af77a3cdef9cc6b4281fbee8d5e841f0a5c7b0d625867b6c28880ca69'
- FRONTEND_URL='http://localhost:5173'
- PORT=3000

## Comandos instalacion

- npm install
- npx prisma db push
- npx prisma db seed

## Comandos para correr API
- npm run dev