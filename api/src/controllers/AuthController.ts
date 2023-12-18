import bcrypt from 'bcrypt';
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';
import userRepository from "../repositories/User";
import jwt from 'jsonwebtoken';

class AuthController {
    static async login(request: FastifyRequest, reply: FastifyReply) {
        const authValidation = z.object({
            email: z.string({
                required_error: 'Email is required',
                invalid_type_error: 'Email must be a string.',
            }).email('Email must be a valid email.'),
            password: z.string(),
        });

        const { email, password } = authValidation.parse(request.body);

        const user = await userRepository.findByEmail(email);

        if (!user) {
            return reply.status(404).send({ error: 'User error', message: 'User not found!' });
        }

        const match = await userRepository.verifyUserPassword(password, user.password);

        if (!match) {
            return reply.status(401).send({ error: 'Unauthorized', message: 'Password is wrong!' });
        }

        const SECRET_KEY = process.env.APP_SECRET ?? "";

        const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
            expiresIn: '1h',
        });

        return reply.send({ token, user: { name: user.name, email: user.email } });
    }
}

export default AuthController;