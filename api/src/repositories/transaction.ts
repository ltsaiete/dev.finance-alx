import prisma from '../db';
import { TransactionProps } from '../controllers/TransactionController';

interface Transaction extends TransactionProps {
	userId: string;
}

class TransactionRepository {
	#client;

	constructor() {
		this.#client = prisma.transaction;
	}

	async create(data: Transaction): Promise<Transaction> {
		const transaction = await this.#client.create({
			data
		});
		return transaction;
	}
}

const transactionRepository = new TransactionRepository();
export default transactionRepository;
