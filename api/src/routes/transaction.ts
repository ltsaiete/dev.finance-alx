import { FastifyInstance } from 'fastify';
import TransactionController from '../controllers/TransactionController';

export default async function transactionRoutes(fastify: FastifyInstance, opts: any) {
	fastify.decorateRequest('userId', '');
	fastify.post('/', TransactionController.create);
	fastify.get('/month/:month', TransactionController.showByMonth);
	fastify.get('/', TransactionController.list);
	fastify.get('/:id', TransactionController.list);

	fastify.addHook('preHandler', (request, reply, done) => {
		request.userId = '59e40a74-b915-461c-8cef-1006f9408340';
		done();
	});
}
