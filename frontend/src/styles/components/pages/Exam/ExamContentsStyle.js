import styled from "styled-components";

export const ExamContainer = styled.div`
	margin-top: 90px;
	text-align: center;
`;

export const Title = styled.h1`
	text-decoration: underline;
`;

export const QuestionNumber = styled.h2`
	text-decoration: underline;
	margin: 16px;
`;

export const ContentsContainer = styled.div`
	background-color: var(--color-bg-milk-white);
	width: 50%;
	margin: 60px auto 0 auto;
	padding: 50px 10px;

	@media screen and (max-width: 520px) {
		width: 100%;
	}
`;

export const Word = styled.h2`
	margin-bottom: 20px;
	font-size: 2rem;
`;

export const Sentence = styled.p`
	margin-bottom: 20px;
`;

export const AnswerButton = styled.button`
	color: var(--color-red);
	font-size: 1.2rem;
	text-decoration: underline;
	margin-bottom: 40px;
`;

export const AnswerButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	button {
		padding: 14px 26px;
		color: var(--color-bg-white);
		border-radius: 12px;

		&:first-child {
			background-color: var(--color-bg-green);
		}

		&:last-child {
			background-color: var(--color-red);
		}

		&:hover {
			opacity: 0.9;
		}
	}
`;
