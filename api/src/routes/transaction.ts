import { FastifyInstance } from 'fastify';
import TransactionController from '../controllers/TransactionController';

export default async function transactionRoutes(fastify: FastifyInstance, opts: any) {
	fastify.decorateRequest('userId', '');
	fastify.post('/', TransactionController.create);

	fastify.addHook('preHandler', (request, reply, done) => {

		request.userId = '75dd9f71-a388-4cc9-a692-159ada3d5bc0';
		done();
	});
}
