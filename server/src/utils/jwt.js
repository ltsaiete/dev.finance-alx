import jwt from 'jsonwebtoken';

export function signToken(data) {
	const token = jwt.sign(data, process.env.APP_SECRET, { expiresIn: '1d' });

	return token;
}

export function decodeToken(token) {
	const decoded = jwt.verify(token, process.env.APP_SECRET);
	return decoded;
}
