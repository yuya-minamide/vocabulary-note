import styled from "styled-components";

export const SortContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	margin: 60px 0 40px 0;

	button {
		text-decoration: underline;
		background-color: var(--color-bg-white);
		font-size: 1rem;
	}

	@media (max-width: 520px) {
		flex-wrap: wrap;
		gap: 1rem;
		margin: 30px 0 20px 0;

		button:nth-child(5) {
			flex-basis: 100%;
		}
	}
`;
