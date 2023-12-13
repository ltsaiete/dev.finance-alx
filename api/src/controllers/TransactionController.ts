import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';



export default class TransactionController {
	static async create(request: FastifyRequest, reply: FastifyReply) {
		const transactionSchema = z.object({
			designation: z.string(),
			amount: z.number()
		});
		console.log('hey');
		const { designation, amount } = transactionSchema.parse(request.body);


		return reply.send('Create a transaction');
	}
}
