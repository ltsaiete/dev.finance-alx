import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userTable = prisma.user;

export default prisma;

export { userTable };