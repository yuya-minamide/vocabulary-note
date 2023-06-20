import styled from "styled-components";

export const FooterContainer = styled.div`
	text-align: center;
	margin-top: 80px;
	border-top: solid 1px #b7b7b7;
	padding: 26px 0;

	p {
		font-size: 0.8rem;

		@media (max-width: 520px) {
			font-size: 0.7rem;
		}
	}
`;
