import { userTable } from '../db';
import bcrypt from 'bcrypt';

class UserRepository {
	async create(name: string, email: string, password: string) {
		const salt = await bcrypt.genSalt(10);

		const hashedPwd = await bcrypt.hash(password, salt);

		const newUser = await userTable.create({
			data: {
				name,
				email,
				password: hashedPwd
			}
		});

		return newUser;
	}

	async findUser(id: string) {
		const user = await userTable.findFirst({ where: { id: id } });
		return user;
	}

	async findByEmail(email: string) {
		const user = await userTable.findFirst({
			where: {
				email: email
			}
		});

		return user;
	}

	async deleteUser(id: string) {
		await userTable.delete({ where: { id } });
	}
}

const userRepository = new UserRepository();
export default userRepository;
