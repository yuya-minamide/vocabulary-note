import styled from "styled-components";

export const ResultContainer = styled.ul`
	position: relative;
	li {
		position: fixed;
		list-style: none;
		top: -50px;
		background: #ffdbed;
		border-radius: 0% 70%;
		animation: fall 4s linear infinite, sway 2s ease-in-out infinite alternate;
	}

	@keyframes fall {
		to {
			top: 120%;
		}
	}

	@keyframes sway1 {
		from {
			transform: translateX(0px) rotate(0deg);
		}
		to {
			transform: translateX(200px) rotate(-45deg);
		}
	}

	@keyframes sway2 {
		from {
			transform: translateX(200px) rotate(-45deg);
		}
		to {
			transform: translateX(0px) rotate(0deg);
		}
	}

	li:nth-child(1) {
		left: 0%;
		width: 24px;
		height: 15px;
		animation: fall 10s linear infinite, sway1 3s ease-in-out infinite alternate;
		animation-delay: 2s;
	}

	li:nth-child(2) {
		left: 5%;
		width: 13px;
		height: 9px;
		animation: fall 15s linear infinite, sway1 2s ease-in-out infinite alternate;
		animation-delay: 8s;
	}

	li:nth-child(3) {
		left: 15%;
		width: 16px;
		height: 10px;
		animation: fall 9s linear infinite, sway1 3.5s ease-in-out infinite alternate;
		animation-delay: 13s;
	}

	li:nth-child(4) {
		left: 30%;
		width: 16px;
		height: 10px;
		animation: fall 8s linear infinite, sway2 4s ease-in-out infinite alternate;
		animation-delay: 7s;
	}

	li:nth-child(5) {
		left: 40%;
		width: 16px;
		height: 10px;
		animation: fall 10s linear infinite, sway1 4s ease-in-out infinite alternate;
		animation-delay: 0s;
	}

	li:nth-child(6) {
		left: 55%;
		width: 24px;
		height: 15px;
		animation: fall 11s linear infinite, sway2 3s ease-in-out infinite alternate;
		animation-delay: 3s;
	}

	li:nth-child(7) {
		left: 65%;
		width: 16px;
		height: 10px;
		animation: fall 7s linear infinite, sway2 3.5s ease-in-out infinite alternate;
		animation-delay: 7s;
	}

	li:nth-child(8) {
		left: 50%;
		width: 13px;
		height: 9px;
		animation: fall 7s linear infinite, sway1 3s ease-in-out infinite alternate;
		animation-delay: 3s;
	}

	li:nth-child(9) {
		left: 80%;
		width: 16px;
		height: 10px;
		animation: fall 10s linear infinite, sway2 4s ease-in-out infinite alternate;
		animation-delay: 4s;
	}
`;
