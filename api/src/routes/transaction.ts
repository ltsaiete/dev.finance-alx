import { FastifyInstance } from 'fastify';
import TransactionController from '../controllers/TransactionController';
import AuthController from '../controllers/AuthController';
import authMiddleware from '../middlewares/auth';

export default async function transactionRoutes(fastify: FastifyInstance, opts: any) {
	fastify.decorateRequest('userId', '');
	// before request handler
	fastify.addHook('preHandler', authMiddleware);

	fastify.post('/', TransactionController.create);
	fastify.get('/month/:month', TransactionController.showByMonth);
	fastify.get('/', TransactionController.list);
	fastify.get('/:id', TransactionController.list);
}
