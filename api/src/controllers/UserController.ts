import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import userRepository from '../repositories/User';
import UserValidation from '../validations/userValidation';

class UserController {
    // get especific
    static async getUser(request: FastifyRequest, reply: FastifyReply) {
        return { user: 'Get Especific Users' };
    }

    // create new user
    static async createUser(request: FastifyRequest, reply: FastifyReply) {
        const { name, email, password } = UserValidation.parse(request.body);

        const user = await userRepository.findByEmail(email);

        if (user) {
            return reply.status(400).send({ errors: "Email already as an account." });
        }
        
        const newUser = await userRepository.create(name, email, password);

        return { user: newUser };
    }
}


export default UserController;