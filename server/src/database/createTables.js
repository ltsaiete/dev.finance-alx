import sql from './index.js';

async function createTables() {
	await sql`DROP TABLE IF EXISTS transactions;`.then(() => console.log('Dropped table transactions'));
	await sql`DROP TABLE IF EXISTS users;`.then(() => console.log('Dropped table users'));

	await sql`CREATE TABLE IF NOT EXISTS users(
		id TEXT PRIMARY KEY,
		telegramId INTEGER NOT NULL UNIQUE,
		username VARCHAR(255),
		name VARCHAR(255)
	);
	`.then(() => console.log('Successfully created users table;'));

	await sql`CREATE TABLE IF NOT EXISTS transactions(
		id TEXT PRIMARY KEY,
		description VARCHAR(255) NOT NULL,
		amount FLOAT NOT NULL,
		date DATE NOT NULL,
		userId TEXT,
		FOREIGN KEY (userId) REFERENCES users(id)
	);`.then(() => console.log('Successfully created transactions table;'));
}

createTables().then(() => console.log('Finished executing sql statements'));
