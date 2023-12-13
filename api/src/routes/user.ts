import { FastifyInstance, FastifyRegisterOptions, FastifyReply, FastifyRequest } from "fastify";

interface UserProps {
    name: string;
    email: string;
    password: string;
}

async function userRoutes(fastify: FastifyInstance, options: any) {
    fastify.get('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        return { users: 'Get All Users' };
    });

    fastify.get('/users/:id', async (request: FastifyRequest, reply: FastifyReply) => {
        return { user: 'Get Especific Users' };
    });

    fastify.post('/users', async (request: FastifyRequest, reply: FastifyReply) => {
        const { name, email, password } = request.body as UserProps;
        return { user: 'Create new user route' };
    });

}

export default userRoutes;