import prisma from '../db';

const transactionRepository = prisma.transaction;
export default transactionRepository;
