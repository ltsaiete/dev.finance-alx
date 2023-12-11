import { ArrowCircleUp, ArrowCircleDown, CurrencyCircleDollar } from '@phosphor-icons/react';
import { theme } from '../../styles/theme';
import { Container } from './styles';
import { formatCurrency } from '../../utils/formatters';
interface BalanceCardProps {
	title: string;
	amount: number;
	type: 'income' | 'expense' | 'total';
}

const CardIcon = {
	income: <ArrowCircleUp size={32} color={theme.colors.green} />,
	expense: <ArrowCircleDown size={32} color={theme.colors.red} />,
	total: <CurrencyCircleDollar size={32} color={theme.colors.white} />
};

export default function BalanceCard({ title, amount, type }: BalanceCardProps) {
	return (
		<Container $total={type === 'total'}>
			<h3>
				<span>{title}</span>
				{CardIcon[type]}
			</h3>
			<p id="income-display">{formatCurrency(amount)}</p>
		</Container>
	);
}
