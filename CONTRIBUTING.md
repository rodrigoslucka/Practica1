# Guía de Contribución

## 1. Reglas para los Commits

- Usa mensajes de commit claros y en presente. Ejemplo: `fix: corrige error en el formulario`
- Sigue la convención [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/):

Tipos recomendados:

- `feat`: Nueva funcionalidad
- `fix`: Corrección de errores
- `refactor`: Mejora del código sin cambiar funcionalidad
- `docs`: Cambios en la documentación
- `test`: Pruebas añadidas o modificadas
- `chore`: Mantenimiento o tareas menores

## 2. Nombres de Ramas

- **Feature:** `feature/nombre-descriptivo`
- **Corrección:** `fix/nombre-del-bug`
- **Refactor:** `refactor/nombre-mejora`
- **Documentación:** `docs/actualizacion-documento`

## 3. Pull Requests (PRs)

- Una PR debe incluir:
- Descripción del cambio
- Capturas de pantalla si aplica
- Enlace al ticket asociado (si hay uno)

## 4. Formato de Código

- Usar [ESLint](https://eslint.org/) y [Prettier](https://prettier.io/) para mantener un estilo uniforme.
- Ejecutar `npm run lint` antes de hacer un commit.

## 5. Seguridad y Performance

- Evitar credenciales en el código (`.env` debe estar en `.gitignore`).
- Revisar que las dependencias sean seguras antes de agregarlas (`npm audit`).
