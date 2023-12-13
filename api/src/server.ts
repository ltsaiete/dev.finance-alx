import Fastify from 'fastify';
import userRepository from './repositories/User';
const server = Fastify({
	logger: true
});

// Declare a route
server.get('/', async function handler(request, reply) {
	return { status: 'okay' };
});

server.post('/users', async (request, reply) => {
	const { name, email, password } = request.body;
	// console.log(request.body);
	await userRepository.create(name, email, password);

	return reply.status(201).send();
});

server.listen({ port: 3333 }).then(() => console.log('Server running on 3333'));
