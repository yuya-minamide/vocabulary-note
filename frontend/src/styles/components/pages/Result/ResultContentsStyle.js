import styled from "styled-components";

export const ResultContainer = styled.div`
	text-align: center;
	margin-top: 130px;

	@media screen and (max-width: 520px) {
		margin-top: 100px;
	}

	h1 {
		@media screen and (max-width: 520px) {
			font-size: 1.6rem;
		}
	}
`;

export const Score = styled.h2`
	margin: 10px 0 30px 0;

	@media screen and (max-width: 520px) {
		font-size: 1rem;
		margin: 10px 0 20px 0;
	}
`;

export const BackButton = styled.button`
	margin-top: 60px;
	padding: 18px 24px;
	background-color: var(--color-bg-green);
	color: var(--color-bg-white);
	border-radius: 12px;
	font-size: 1rem;

	@media screen and (max-width: 520px) {
		margin-top: 40px;
	}

	&:hover {
		opacity: 0.9;
	}
`;
