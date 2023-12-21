import { DefaultArgs } from '@prisma/client/runtime/library';
import prisma from '../db';
import { Prisma, TransactionType } from '@prisma/client';

interface Transaction {
	id?: string;
	designation: string;
	amount: number;
	type?: TransactionType;
	completed?: boolean;
	userId: string;
}

interface DefaultTransactions {
	transactionId: string;
	userId: string;
}

interface FindTransactionsProps {
	type?: TransactionType;
	completed?: boolean;
	userId: string;
	startDate?: Date;
	endDate?: Date;
}

class TransactionRepository {
	#client;

	constructor() {
		this.#client = prisma.transaction;
	}

	async create(data: Transaction) {
		const transaction = await this.#client.create({
			data
		});
		return transaction;
	}

	async findMany({ endDate, startDate, userId, completed, type }: FindTransactionsProps) {
		const transactions = await this.#client.findMany({
			where: {
				userId,
				completed,
				type,
				createdAt: {
					gte: startDate,
					lte: endDate
				}
			},
			orderBy: {
				createdAt: 'asc'
			}
		});

		const balance = {INCOME: 0, EXPENSE: 0, total: 0};
		for (const transaction of transactions) {
			let amount = transaction.amount;
			balance[transaction.type] +=  amount;
			balance.total += amount;
		}

		return {transactions, balance};
	}

	async findById(id: string) {
		const transaction = await this.#client.findFirst({
			where: {
				id
			}
		});

		return transaction;
	}

	async setDefault({ transactionId, userId }: DefaultTransactions) {
		await prisma.defaultTransactions.create({
			data: {
				userId,
				transactionId
			}
		});
	}
}

const transactionRepository = new TransactionRepository();
export default transactionRepository;
