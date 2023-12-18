import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import userRepository from '../repositories/User';
import UserValidation from '../validations/userValidation';

interface requestParams {
    id: string,
}
class UserController {
    // get especific
    static async getUser(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.params as requestParams;
        const user = await userRepository.findUser(id);

        if (!user) {
            return reply.status(404).send({ errors: "User not found." });
        }

        return { name: user.name, email: user.email };

    }

    // create new user
    static async createUser(request: FastifyRequest, reply: FastifyReply) {
        const { name, email, password } = UserValidation.parse(request.body);

        const user = await userRepository.findByEmail(email);

        if (user) {
            return reply.status(400).send({ errors: "Email already as an account." });
        }
        
        const newUser = await userRepository.create(name, email, password);

        return reply.status(201).send(newUser);
    }

    static async deleteUser(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.params as requestParams;
        const user = await userRepository.findUser(id);

        if (!user) {
            return reply.status(404).send({ errors: "User not found." });
        }

        await userRepository.deleteUser(id);

        return {message: "User deleted."};
    }
}


export default UserController;