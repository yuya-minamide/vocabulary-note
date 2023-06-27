import styled from "styled-components";

export const ListContainer = styled.div`
	border: solid 1px gray;
	display: flex;
	justify-content: space-between;
	padding: 12px 40px;
	width: 80%;
	margin: 10px auto;

	@media screen and (max-width: 520px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 0.8rem;
	}
`;

export const WordContainer = styled.div`
	display: flex;
	gap: 3rem;
`;
