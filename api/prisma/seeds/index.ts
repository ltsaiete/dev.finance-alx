import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { defaultTransactionSeeds, transactionSeeds } from './transactions';

const prisma = new PrismaClient();
async function main() {
	const lewis = await prisma.user.upsert({
		where: { email: 'lewis@gmail.com' },

		update: {},

		create: {
			id: '59e40a74-b915-461c-8cef-1006f9408340',
			email: 'lewis@gmail.com',
			name: 'Lewis',
			password: await bcrypt.hash('123456', 10)
		}
	});

	const uss = await prisma.user.upsert({
		where: { email: 'uss@gmail.com' },

		update: {},

		create: {
			id: 'a1649867-b565-4e5a-80b6-44f97bd50626',
			email: 'uss@gmail.com',
			name: 'Uss',
			password: await bcrypt.hash('123456', 10)
		}
	});

	const transactions = await prisma.transaction.createMany({
		data: transactionSeeds
	});

	const defaultTransactions = await prisma.defaultTransactions.createMany({
		data: defaultTransactionSeeds
	});

	console.log(lewis, uss, transactions, defaultTransactions);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})

	.catch(async (e) => {
		console.error(e);

		await prisma.$disconnect();

		process.exit(1);
	});
