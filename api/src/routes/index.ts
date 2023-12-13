import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

async function routes(fastify:FastifyInstance, options: any) {
    fastify.get('/status',async (request:FastifyRequest, reply: FastifyReply) => {
        return { status: 'on' };
    });
}

export default routes;