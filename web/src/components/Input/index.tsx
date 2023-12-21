import { ComponentProps } from 'react';
import { InputGroup } from './styles';

interface InputProps extends ComponentProps<'input'> {
	label: string;
}

export default function Input({ label, name, type = 'text', ...props }: InputProps) {
	return (
		<InputGroup>
			<label htmlFor={name} className="sr-only">
				{label}
			</label>
			<input type={type} id={name} name={name} placeholder={label} {...props} />
		</InputGroup>
	);
}
