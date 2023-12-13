import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import transactionRepository from '../repositories/transaction';

const TransactionSchema = z.object({
	designation: z.string(),
	amount: z.number(),
	type: z.enum(['EXPENSE', 'INCOME']).optional(),
	isDefault: z.boolean().optional(),
	isCompleted: z.boolean().optional()
});

export type TransactionProps = z.infer<typeof TransactionSchema>;

export default class TransactionController {
	static async create(request: FastifyRequest, reply: FastifyReply) {
		const { designation, amount, isDefault, isCompleted, type } = TransactionSchema.parse(request.body);
		const userId = request.userId;

		const transaction = await transactionRepository.create({ designation, amount, isDefault, isCompleted, userId });

		return reply.status(201).send(transaction);
	}
}
