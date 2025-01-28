# Getting Started with [Fastify-CLI](https://www.npmjs.com/package/fastify-cli)

Welcome to Smackdown, a simple blogging platform built with Fastify, TypeScript, and pnpm. This project was bootstrapped using Fastify-CLI and is designed to provide a fast, scalable backend for a blog with user authentication, post creation, and comment functionality.

## Project Description

Smackdown is a backend for a personal blog system. It allows users to:
- Register and log in to manage their accounts.
- Create, update, and delete blog posts.
- Comment on posts.
- React to posts with likes/dislikes.

It uses Fastify for high performance, TypeScript for type safety, and pnpm as the package manager for efficient dependency management.

## Technologies Used

- **[Fastify](https://www.fastify.io/)**: A fast and low-overhead web framework for Node.js.
- **[TypeScript](https://www.typescriptlang.org/)**: A strongly typed programming language that builds on JavaScript, providing better tooling at development time.
- **[pnpm](https://pnpm.io/)**: A fast, disk space-efficient package manager that uses symlinks to manage dependencies.

## Available Scripts

In the project directory, you can run:

### `pnpm run dev`
Starts the development server with hot-reloading. You can now make changes to your code and see them instantly reflected in the running server.

### `pnpm start`
Runs the project in production mode. Make sure to set up your environment variables and any necessary configurations before using this command.

### `pnpm run test`
Run the test cases to check the health of the application and ensure all features are working as expected.

## Learn More

To learn more about Fastify, check out the [Fastify documentation](https://fastify.dev/docs/latest/). For more details about TypeScript, visit the [TypeScript website](https://www.typescriptlang.org/).

## Project Structure

- **src**: Contains all the source code for the project.
  - **models**: Database models for the application.
  - **routes**: Fastify routes and handlers.
  - **controllers**: Logic for handling API requests.
  - **services**: Business logic for user authentication, post creation, etc.
  - **utils**: Helper functions and utilities.

## Setup

1. Clone the repository.
2. Run `pnpm install` to install dependencies.
3. Configure environment variables in `.env` for database and JWT settings.
4. Run `pnpm run dev` to start the development server.

---

If you encounter any issues, feel free to open an issue or contribute to the repository.

Happy coding! 🎉
