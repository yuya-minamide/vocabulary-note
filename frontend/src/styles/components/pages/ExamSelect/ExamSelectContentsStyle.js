import styled from "styled-components";

export const ExamSelectContainer = styled.div`
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
		margin-top: 60px;
	}
`;

export const SelectButtonContainer = styled.div`
	margin-top: 40px;
	padding: 0 20%;

	@media screen and (max-width: 960px) {
		padding: 0 10%;

		@media (max-width: 520px) {
			margin-top: 30px;
		}
	}

	a {
		display: inline-block;
		margin: 10px;
		padding: 50px 70px;
		font-size: 24px;
		width: 45%;
		background-color: var(--color-bg-green);
		color: var(--color-bg-white);
		border-radius: 10px;

		&:hover {
			opacity: 0.9;
		}

		@media (max-width: 960px) {
			padding: 40px 70px;
			font-size: 16px;
			width: 45%;

			@media (max-width: 520px) {
				width: 100%;
				margin: 5px;
			}
		}
	}
`;
