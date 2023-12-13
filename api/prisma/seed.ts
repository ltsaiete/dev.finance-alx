import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
async function main() {
	const lewis = await prisma.user.upsert({
		where: { email: 'lewis@gmail.com' },

		update: {},

		create: {
			email: 'lewis@gmail.com',
			name: 'Lewis',
			password: await bcrypt.hash('123456', 10)
		}
	});

	const uss = await prisma.user.upsert({
		where: { email: 'uss@gmail.com' },

		update: {},

		create: {
			email: 'uss@gmail.com',
			name: 'Uss',
			password: await bcrypt.hash('123456', 10)
		}
	});

	console.log({ lewis, uss });
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
