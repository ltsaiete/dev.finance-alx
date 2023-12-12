import prisma from '../db';

class UserRepository {
	#client;
	constructor() {
		this.#client = prisma.user;
	}

	async create(name: string, email: string, password: string) {
		await this.#client.create({
			data: {
				name,
				email,
				password
			}
		});
	}
}

export default new UserRepository();
