import { ComponentProps } from 'react';
import { PrimaryButtonContainer, DangerButtonContainer, SecondaryButtonContainer } from './styles';

interface ButtonProps extends ComponentProps<'button'> {
	text: string;
	buttonType?: 'primary' | 'danger' | 'secondary';
}

const ButtonTypesMapping = {
	primary: PrimaryButtonContainer,
	danger: DangerButtonContainer,
	secondary: SecondaryButtonContainer
};

export default function Button({ text, type = 'button', buttonType = 'primary' }: ButtonProps) {
	const Container = ButtonTypesMapping[buttonType];
	return <Container type={type}>{text}</Container>;
}
