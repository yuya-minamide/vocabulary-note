import { ExamContents, Footer } from "../../components/index";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CountContainer, Countdown } from "../../styles/pages/Exam/ExamStyle";

export function Exam() {
	const location = useLocation();
	const examWord = location.state?.examWord;
	const [countdown, setCountdown] = useState(3); // State to store the countdown value

	useEffect(() => {
		// Timer to decrement the countdown value every second
		const timer = setInterval(() => {
			setCountdown((prevCountdown) => prevCountdown - 1);
		}, 1000);

		// Cleanup the timer when the component unmounts or countdown reaches 0
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div>
			{countdown > 0 ? (
				<CountContainer>
					<Countdown>{countdown}</Countdown>
				</CountContainer> // Render the countdown value
			) : (
				<>
					<ExamContents examWord={examWord} />
					<Footer />
				</>
			)}
		</div>
	);
}
