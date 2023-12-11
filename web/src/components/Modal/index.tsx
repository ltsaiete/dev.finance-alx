import * as Dialog from '@radix-ui/react-dialog';
import { X } from '@phosphor-icons/react';
import { DialogOverlay, DialogContent, IconButton, DialogTitle } from './styles';
import { PropsWithChildren } from 'react';

interface ModalProps {
	open: boolean;
	onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
	title: string;
}

export default function Modal({ open, onOpenChange, title, children }: PropsWithChildren<ModalProps>) {
	return (
		<Dialog.Root open={open} onOpenChange={onOpenChange}>
			<Dialog.Portal>
				<DialogOverlay />
				<DialogContent>
					<DialogTitle>{title}</DialogTitle>
					{children}
					<Dialog.Close asChild>
						<IconButton className="IconButton" aria-label="Close">
							<X />
						</IconButton>
					</Dialog.Close>
				</DialogContent>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
