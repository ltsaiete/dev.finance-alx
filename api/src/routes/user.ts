import { FastifyInstance, FastifyRegisterOptions, FastifyReply, FastifyRequest } from 'fastify';
import UserController from '../controllers/UserController';

async function userRoutes(fastify: FastifyInstance, options: any) {
	fastify.get('/:id', UserController.getUser);

	fastify.post('/', UserController.createUser);
}

export default userRoutes;
