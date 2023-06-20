import styled from "styled-components";

export const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: var(--color-bg-green);
	color: var(--color-bg-white);
	border-bottom: solid 1px #b7b7b7;
	z-index: 10;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	font-weight: 400;
	font-family: "Kalam", cursive;

	svg {
		margin-right: 6px;
	}

	@media screen and (max-width: 520px) {
		div {
			font-size: 0.7rem;
		}
	}
`;

export const NavContainer = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;

	li {
		margin-right: 18px;

		&:last-child {
			margin-right: 0;
		}

		@media screen and (max-width: 520px) {
			margin-right: 6px;
		}

		a {
			display: flex;
			align-items: center;
			color: var(--color-bg-white);
			transition: all 0.2s ease;

			&:hover {
				color: var(--color-brown);
			}

			svg {
				margin-right: 12px;
				font-size: 1.6rem;
				transition: all 0.2s ease;
			}
		}

		svg {
			font-size: 1.6rem;
			transition: all 0.2s ease;

			&:hover {
				color: var(--color-brown);
			}
		}
	}
`;

export const PersonalContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	background-color: var(--color-bg-milk-white);
	top: 70px;
	right: 0;
	padding: 20px 60px 6px 16px;
`;

export const LoginButton = styled.a`
	cursor: pointer;
	border-bottom: 1px solid black;
	font-size: 1.2rem;
	margin-bottom: 12px;
	color: var(--color-brown) !important;

	&:hover {
		color: var(--color-green) !important;
	}

	@media screen and (max-width: 520px) {
		font-size: 0.8rem;
	}
`;

export const LogoutButton = styled.p`
	cursor: pointer;
	border-bottom: 1px solid black;
	font-size: 1.2rem;
	margin-bottom: 12px;
	color: var(--color-brown);
	transition: all 0.2s ease;

	&:hover {
		color: var(--color-green);
	}

	@media screen and (max-width: 520px) {
		font-size: 0.8rem;
	}
`;
