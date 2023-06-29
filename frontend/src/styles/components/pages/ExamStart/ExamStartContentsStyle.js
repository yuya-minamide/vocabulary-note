import styled from "styled-components";

export const ExamStartContainer = styled.div`
	padding-top: 80px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80vh;
`;

export const InnerContainer = styled.div`
	width: 100%;
`;

export const Title = styled.h1`
	text-decoration: underline;

	@media (max-width: 520px) {
		font-size: 1.6rem;
	}
`;

export const StartButtonContainer = styled.div`
	margin-top: 40px;
	padding: 0 20%;

	@media (max-width: 520px) {
		margin-top: 30px;
		padding: 0 10%;
	}

	button {
		display: inline-block;
		margin: 10px;
		padding: 50px 70px;
		font-size: 24px;
		width: 35%;
		background-color: var(--color-bg-green);
		color: var(--color-bg-white);
		border-radius: 10px;

		@media (max-width: 960px) {
			padding: 40px 70px;
			font-size: 16px;
			width: 45%;

			@media (max-width: 520px) {
				width: 100%;
				margin: 5px;
			}
		}

		&:hover {
			opacity: 0.9;
		}
	}
`;

export const ExplainContainer = styled.div`
	margin-top: 60px;

	@media (max-width: 520px) {
		p {
			margin: 40px 50px 20px;
			font-size: 0.6rem;
		}
	}
`;

export const ExplainButtonContainer = styled.div`
	margin-top: 16px;
	display: flex;
	justify-content: center;
	gap: 1rem;

	div {
		padding: 10px 18px;
		border-radius: 8px;
		color: var(--color-bg-white);

		&:first-child {
			background-color: var(--color-bg-green);
		}

		&:last-child {
			background-color: var(--color-red);
		}
	}
`;
