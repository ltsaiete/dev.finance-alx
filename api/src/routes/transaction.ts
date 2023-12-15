import { FastifyInstance } from 'fastify';
import TransactionController from '../controllers/TransactionController';

export default async function transactionRoutes(fastify: FastifyInstance, opts: any) {
	fastify.decorateRequest('userId', '');
	fastify.post('/', TransactionController.create);
	fastify.get('/month/:month', TransactionController.showByMonth);

	fastify.addHook('preHandler', (request, reply, done) => {
		request.userId = '757afa69-adbc-40fe-a027-58b672753140';
		done();
	});
}
