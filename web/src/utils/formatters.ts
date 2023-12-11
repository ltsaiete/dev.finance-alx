export function formatCurrency(amount: number) {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});

	return formatter.format(amount);
}

export function formatDate(date: Date) {
	const formatter = new Intl.DateTimeFormat(['ban', 'id']);

	return formatter.format(date);
}
