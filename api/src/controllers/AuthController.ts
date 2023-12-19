import bcrypt from 'bcrypt';
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';
import userRepository from "../repositories/User";
import jwt from 'jsonwebtoken';

interface TokenVerifier {
    userId: string;
}

class AuthController {
    static #SECRET_KEY = process.env.APP_SECRET ?? "";

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

        const token = jwt.sign({ userId: user.id }, AuthController.#SECRET_KEY, {
            expiresIn: '1h',
        });

        return reply.send({ token, user: { name: user.name, email: user.email } });
    }

    static verifyToken(token: string) {
        try {
            return jwt.verify(token, AuthController.#SECRET_KEY) as TokenVerifier;
        } catch (error) {
            return null;
        }
    }
}

export default AuthController;