import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import dayjs from 'dayjs';
import transactionRepository from '../repositories/transaction';

export default class TransactionController {
	static async create(request: FastifyRequest, reply: FastifyReply) {
		const TransactionBodySchema = z.object({
			designation: z.string(),
			amount: z.number(),
			type: z.enum(['EXPENSE', 'INCOME']).optional(),
			isDefault: z.boolean().optional(),
			completed: z.boolean().optional()
		});
		const { designation, amount, isDefault, completed, type } = TransactionBodySchema.parse(request.body);
		const userId = request.userId;

		const transaction = await transactionRepository.create({ designation, amount, completed, type, userId });

		if (isDefault)
			await transactionRepository.setDefault({ transactionId: transaction.id, userId: transaction.userId });

		return reply.status(201).send(transaction);
	}

	static async showByMonth(request: FastifyRequest, reply: FastifyReply) {
		const RouteParamsSchema = z.object({
			month: z.coerce.number()
		});
		const { month } = RouteParamsSchema.parse(request.params);
		const userId = request.userId;
		const startDate = dayjs().month(month).startOf('M').toDate();
		const endDate = dayjs().month(month).endOf('M').toDate();

		const transactions = await transactionRepository.findMany({ startDate, endDate, userId });

		return reply.send(transactions);
	}

	static async list(request: FastifyRequest, reply: FastifyReply) {
		const TransactionQuerySchema = z.object({
			completed: z.coerce.boolean().optional(),
			startDate: z.coerce.date().optional(),
			endDate: z.coerce.date().optional(),
			type: z.enum(['EXPENSE', 'INCOME']).optional()
		});
		const { completed, endDate, startDate, type } = TransactionQuerySchema.parse(request.query);
		const userId = request.userId;
		const transactions = await transactionRepository.findMany({ userId, completed, endDate, startDate, type });
		return reply.send(transactions);
	}

	async show(request: FastifyRequest, reply: FastifyReply) {
		const TransactionParamsSchema = z.object({
			id: z.string()
		});
		const { id } = TransactionParamsSchema.parse(request.params);
		const userId = request.userId;
		const transaction = await transactionRepository.findById(id);
		if (transaction?.userId !== userId)
			return reply.status(403).send({ error: 'Error', message: 'User does not own the transaction' });

		return reply.send(transaction);
	}
}
