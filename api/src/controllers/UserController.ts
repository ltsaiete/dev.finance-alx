import { FastifyReply, FastifyRequest } from "fastify";

interface UserProps {
    name: string;
    email: string;
    password: string;
}

class UserController {
    // get especific
    static async getUser(request: FastifyRequest, reply: FastifyReply) {
        return { user: 'Get Especific Users' };
    }

    // create new user
    static async createUser(request: FastifyRequest, reply: FastifyReply) {
        const { name, email, password } = request.body as UserProps;
        return { user: 'Create new user route' };
    }
}


export default UserController;