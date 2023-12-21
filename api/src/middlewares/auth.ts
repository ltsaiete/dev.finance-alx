import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";
import AuthController from "../controllers/AuthController";

export default function authMiddleware(request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) {
    const token = request.headers.authorization?.split(" ")[1];

    if (!token) { return reply.status(401).send({ error: 'Unauthorized', message: "Access denied" }); }

    const decoded = AuthController.verifyToken(token);

    if (!decoded) { return reply.status(401).send({ error: 'Unauthorized', message: 'Invalid Token' }); }

    request.userId = decoded.userId;
    done();
}
