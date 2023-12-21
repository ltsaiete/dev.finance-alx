import { FastifyInstance } from "fastify";
import AuthController from "../controllers/AuthController";

async function authRoutes(fastify: FastifyInstance, options: any) {
    fastify.post('/login', AuthController.login);
}

export default authRoutes;