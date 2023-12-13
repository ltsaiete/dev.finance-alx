import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import userRoutes from "./user";

async function routes(fastify:FastifyInstance, options: any) {
    fastify.get('/status',async (request:FastifyRequest, reply: FastifyReply) => {
        return { status: 'on' };
    });

    // register user routes
    fastify.register(userRoutes, {prefix: '/users'});
}

export default routes;