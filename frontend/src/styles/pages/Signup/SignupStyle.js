import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	text-align: center;
	align-items: center;
`;

export const FormContainer = styled.div`
	background-color: #bababa2a;
	border: 1px solid #808080;
	border-radius: 10px;
	padding: 40px 100px;
	margin: 0 auto;
	width: 600px;

	@media screen and (max-width: 520px) {
		padding: 80px 20px 0 20px;
		width: 100%;
		height: 100vh;
	}

	h1 {
		margin-bottom: 50px;
	}

	div {
		display: flex;
		flex-direction: column;
		margin-bottom: 30px;

		label {
			text-align: left;
			margin-bottom: 10px;
			font-weight: bold;
		}

		input {
			padding: 8px 12px;
			border: solid 1px #808080;
			border-radius: 6px;
		}
	}

	button {
		background-color: var(--color-bg-green);
		color: #ffffff;
		border: none;
		display: block;
		width: 40%;
		padding: 12px 20px;
		margin: 40px auto 40px auto;
		border-radius: 10px;
		font-size: 1.2rem;

		&:hover {
			opacity: 0.9;
		}
	}

	a {
		text-decoration: underline;
		color: var(--color-red);
	}
`;
