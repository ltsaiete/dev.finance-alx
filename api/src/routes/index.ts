import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import userRoutes from './user';
import transactionRoutes from './transaction';

async function routes(fastify: FastifyInstance, options: any) {
	fastify.get('/status', async (request: FastifyRequest, reply: FastifyReply) => {
		return { status: 'on' };
	});

	// register user routes
	fastify.register(userRoutes, { prefix: '/users' });
	fastify.register(transactionRoutes, { prefix: '/transactions' });

	fastify.setErrorHandler(function (error, request, reply) {
		if (error instanceof z.ZodError) {
			const message = error.issues.reduce((msg, issue) => {
				return msg + `${String(issue.path[0])} ${issue.message.replace('String', '')}\n`;
			}, '');

			console.log(message);
			reply.status(400).send({ error: 'Validation error', message });
		} else {
			reply.send(error);
		}
	});
}

export default routes;
