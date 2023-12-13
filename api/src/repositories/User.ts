import { userTable } from '../db';

class UserRepository {
	async create(name: string, email: string, password: string) {
		const newUser = await userTable.create({
			data: {
				name,
				email,
				password
			}
		});
		
		return newUser;
	}

	async findByEmail(email: string) {
		const user = await userTable.findFirst({
			where: {
				email: email
			}
		});

		return user;
	}
}

const userRepository = new UserRepository();
export default userRepository;
