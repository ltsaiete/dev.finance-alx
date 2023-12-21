import { FastifyInstance, FastifyRegisterOptions, FastifyReply, FastifyRequest } from "fastify";
import UserController from "../controllers/UserController";
import authMiddleware from "../middlewares/auth";


async function userRoutes(fastify: FastifyInstance, options: any) {
	fastify.get('/:id', { preHandler: authMiddleware }, UserController.getUser);

	fastify.post('/', UserController.createUser);

	fastify.delete('/:id', { preHandler: authMiddleware }, UserController.deleteUser);
}

export default userRoutes;
