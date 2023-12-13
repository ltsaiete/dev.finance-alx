import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

interface ErrorObjectProps {
    code: string,
    expected: string,
    received: string,
    path: Array<string>,
    message: string,
}

class UserController {
	// get especific
	static async getUser(request: FastifyRequest, reply: FastifyReply) {
		return { user: 'Get Especific Users' };
	}

	// create new user
	static async createUser(request: FastifyRequest, reply: FastifyReply) {
		const User = z.object({
			name: z.string({
				required_error: 'Name is required.',
				invalid_type_error: 'Name must be a string.',
			}).min(3, 'Name must have a minimum of 3 characters.').max(254, 'Name must have a maximum of 3 characters.'),
			email: z.string({
				required_error: 'Email is required',
				invalid_type_error: 'Email must be a string.',
			}).email('Email must be a valid email.'),
			password: z.string({
				required_error: 'Password is required.',
				invalid_type_error: 'Password must be a string.',
			}).min(8, 'Password must have a minimum of 8 characters.'),
		});

		const parsedData = User.safeParse(request.body);

		if (!parsedData.success) {
			const errors = JSON.parse(parsedData.error.toString());
			const messages: Array<string> = errors.map((content: ErrorObjectProps) => content.message);

			return reply.status(400).send({ errors: messages.join('\n') });
		}

		const { name, email, password } = parsedData.data;

		return { user: 'Create new user route' };
	}
}


export default UserController;