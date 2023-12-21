import { ComponentProps } from 'react';

interface CheckboxProps extends ComponentProps<'input'> {
	label: string;
	name: string;
}

export default function Checkbox({ label, name, ...props }: CheckboxProps) {
	return (
		<div>
			<input type="checkbox" name={name} id={name} {...props} />
			<label>
				<label htmlFor={name}>{label}</label>
			</label>
		</div>
	);
}
