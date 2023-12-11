import 'dotenv/config.js';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import { validate, parse } from '@tma.js/init-data-node';
import UserRepository from './repositories/user.js';
import TransactionRepository from './repositories/transaction.js';
import { decodeToken, signToken } from './utils/jwt.js';

const server = Fastify();
await server.register(cors);

const userRepository = new UserRepository();
const transactionRepository = new TransactionRepository();

server.get('/status', () => {
	return { status: 'Ok' };
});

server.post('/sessions', async (request, reply) => {
	const { initData } = request.body;

	try {
		validate(initData, process.env.BOT_TOKEN);
	} catch (e) {
		return reply.status(403).send({ status: 'error', message: 'Token is not valid', error: e.message });
	}

	const { user } = parse(initData);
	let savedUser = await userRepository.getUserByTelegramId(user.id);
	if (!savedUser) {
		await userRepository.create(user);
		savedUser = await userRepository.getUserByTelegramId(user.id);
	}

	const token = signToken(savedUser);

	return reply.status(201).send({ token });
});

server.decorateRequest('userId', '');
function getUserId(request, reply, done) {
	const [, token] = request.headers.authorization.split(' ');
	try {
		const user = decodeToken(token);
		request.userId = user.id;
		done();
	} catch (error) {
		return reply.status(403).send({ status: 'error', message: 'Invalid token', error });
	}
}

server.post('/transactions', { preHandler: getUserId }, async (request, reply) => {
	const { userId } = request;
	const { description, amount, date } = request.body;
	await transactionRepository.create({ description, amount, date, userId });
	return reply.status(201).send();
});

server.get('/transactions', { preHandler: getUserId }, async (request, reply) => {
	const { userId } = request;

	const transactions = await transactionRepository.getByUser(userId);

	return reply.send(transactions);
});

server.get('/transactions/balance', { preHandler: getUserId }, async (request, reply) => {
	const { userId } = request;

	const transactions = await transactionRepository.getByUser(userId);

	const incomeAmounts = transactions.filter((transaction) => transaction.amount >= 0);
	const income = incomeAmounts.reduce((total, current) => total + current.amount, 0);
	const expenseAmounts = transactions.filter((transaction) => transaction.amount < 0);
	const expense = expenseAmounts.reduce((total, current) => total + Math.abs(current.amount), 0);

	const total = transactions.reduce((total, current) => total + current.amount, 0);
	return reply.send({ income, expense, total });
});

server.delete('/transactions/:transactionId', { preHandler: getUserId }, async (request, reply) => {
	const { transactionId } = request.params;
	await transactionRepository.deleteTransaction(transactionId);
	return reply.status(204).send();
});

server.listen({ port: 3333 }).then(() => console.log('Server listening in 3333'));
