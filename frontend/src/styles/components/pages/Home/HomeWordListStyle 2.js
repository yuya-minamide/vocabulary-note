import styled from "styled-components";

export const WordListContainer = styled.div`
	border: solid 1px gray;
	border-radius: 5px;
	margin: 10px 10%;
	padding: 10px 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;
	font-size: 1.2rem;

	@media screen and (max-width: 520px) {
		flex-direction: column;
		font-size: 1rem;
	}

	color: var(--color-brown);
	&.green {
		color: var(--color-green);
	}
	&.red {
		color: var(--color-red);
	}
`;

export const ListButton = styled.button`
	margin-left: 20px;
	padding: 10px 20px;
	border-radius: 8px;
	background-color: var(--color-bg-green);
	color: var(--color-bg-white);
	cursor: pointer;

	&:hover {
		opacity: 0.9;
	}

	@media screen and (max-width: 520px) {
		margin-top: 14px;
		padding: 8px 16px;
	}
`;
