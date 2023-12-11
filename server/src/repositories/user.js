import { randomUUID } from 'crypto';
import sql from '../database/index.js';

export default class UserRepository {
	async getUserByTelegramId(telegramId) {
		const user = await sql`SELECT * FROM USERS WHERE telegramId = ${telegramId}`;

		return user[0];
	}

	async create(user) {
		const id = randomUUID();
		const { id: telegramId, username = '', firstName: name = '' } = user;
		await sql`INSERT INTO users (id, telegramId, username, name)
			values(${id}, ${telegramId}, ${username}, ${name})`;
	}
}
