import styled, { keyframes } from "styled-components";

export const CountContainer = styled.div`
	display: flex;
	height: 100vh;
	align-items: center;
	justify-content: center;
`;

const rotateAnimation = keyframes`
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(360deg);
    }
  `;

export const Countdown = styled.p`
	font-size: 5rem;
	color: var(--color-green);
	animation: ${rotateAnimation} 0.9s infinite;
`;
