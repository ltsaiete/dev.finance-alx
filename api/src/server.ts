import Fastify from 'fastify';
import routes from './routes';

const server = Fastify({
	logger: true
});

// register routes
server.register(routes, { prefix: '/api/v1' });

server.listen({ port: 3333 }).then(() => { console.log('Server running on 3333'); });
