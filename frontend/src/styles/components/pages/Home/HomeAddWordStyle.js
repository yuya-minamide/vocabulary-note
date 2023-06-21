import styled from "styled-components";

export const AddWordContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(149, 149, 149, 0.295);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
	overflow: hidden;
`;

export const AddWordCard = styled.div`
	background-color: var(--color-bg-milk-white);
	padding: 30px;
	margin: 0 28%;
	border-radius: 8px;
	text-align: center;
	position: relative;
	width: 50%;

	@media (max-width: 960px) {
		margin: 0 10%;
		width: 70%;

		@media (max-width: 520px) {
			margin: 0;
			width: 100%;
		}
	}

	svg {
		position: absolute;
		right: 14px;
		top: 14px;
		font-size: 1.4rem;

		&:hover {
			cursor: pointer;
		}
	}

	h1 {
		text-align: center;
		margin-bottom: 20px;
	}

	input {
		width: 100%;
		padding: 10px 14px;
		margin-bottom: 20px;
		font-size: 1.2rem;
		border-radius: 10px;
	}

	textarea {
		width: 100%;
		padding: 10px 14px;
		margin-bottom: 20px;
		font-size: 1.2rem;
		border-radius: 10px;
	}

	p {
		text-align: left;
		padding-left: 12px;
		font-size: 1.2rem;
	}
`;

export const SaveButton = styled.button`
	color: var(--color-bg-white);
	background-color: var(--color-bg-green);
	border: solid 1px #fff;
	border-radius: 10px;
	padding: 10px 30px;
	font-size: 1.2rem;
	margin-right: 10px;

	&:hover {
		opacity: 0.9;
	}
`;
