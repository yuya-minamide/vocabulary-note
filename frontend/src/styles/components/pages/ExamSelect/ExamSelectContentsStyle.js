import styled from "styled-components";

export const ExamSelectContainer = styled.div`
	margin-top: 140px;
	text-align: center;
`;

export const Title = styled.h1`
	text-decoration: underline;

	@media (max-width: 520px) {
		font-size: 1.6rem;
	}
`;

export const SelectButtonContainer = styled.div`
	margin-top: 40px;
	padding: 0 20%;

	@media (max-width: 520px) {
		margin-top: 30px;
		padding: 0 10%;
	}

	a {
		display: inline-block;
		margin: 10px;
		padding: 70px 120px;
		font-size: 24px;
		width: 45%;
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
