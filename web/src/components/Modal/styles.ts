import styled, { keyframes } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

const overlayShow = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
		}
`;

const contentShow = keyframes`
	0% {
		opacity: 0;
		transform: translate(-50%, -48%) scale(.96);
	}

	100% {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1);
	}
`;

export const DialogOverlay = styled(Dialog.Overlay)`
	background-color: rgba(0, 0, 0, 0.7);
	position: fixed;
	inset: 0;
	animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const DialogContent = styled(Dialog.Content)`
	background-color: ${(props) => props.theme.colors.background};
	border-radius: 0.4rem;
	box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90vw;
	max-width: 450px;
	max-height: 85vh;
	padding: 25px;
	animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
	&:focus {
		outline: none;
	}
`;

export const IconButton = styled.button`
	all: unset;
	font-family: inherit;
	border-radius: 100%;
	display: inline-flex;
	height: 2.4rem;
	width: 2.4rem;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.colors.textTitle};
	position: absolute;
	top: 10px;
	right: 10px;
	&:hover {
		background-color: ${(props) => props.theme.colors.textBase}1A;
	}
	&:focus {
		box-shadow: 0 0 0 2px ${(props) => props.theme.colors.textBase}CC;
	}
`;

export const DialogTitle = styled(Dialog.Title)`
	font-weight: 500;
	margin-bottom: 1.6rem;
`;
