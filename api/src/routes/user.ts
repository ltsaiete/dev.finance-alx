import { FastifyInstance, FastifyRegisterOptions, FastifyReply, FastifyRequest } from "fastify";
import UserController from "../Controller/UserController";

async function userRoutes(fastify: FastifyInstance, options: any) {
    fastify.get('/:id', UserController.getUser);

    fastify.post('/', UserController.createUser);

}

export default userRoutes;