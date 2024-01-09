import Fastify from 'fastify';
import cors from '@fastify/cors';
import cookie, { FastifyCookieOptions } from '@fastify/cookie';
import routes from './routes';

const server = Fastify({
	logger: true
});

server.register(cors, {
	origin: '*'
});

server.register(cookie, {
	secret: process.env.APP_SECRET,
	parseOptions: {},
}as FastifyCookieOptions);

// register routes
server.register(routes, { prefix: '/api/v1' });

server.listen({ port: 3333 }).then(() => console.log('Server running on 3333'));
