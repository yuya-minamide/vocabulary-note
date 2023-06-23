import styled from "styled-components";

export const SortContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	button {
		text-decoration: underline;
		background-color: var(--color-bg-white);
		font-size: 1rem;
	}

	@media (max-width: 520px) {
		flex-wrap: wrap;
		gap: 1rem;

		button:nth-child(5) {
			flex-basis: 90%;
		}
	}
`;
