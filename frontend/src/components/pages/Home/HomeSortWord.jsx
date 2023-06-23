import { useState } from "react";
import { SortContainer } from "../../../styles/components/pages/Home/HomeSortWordStyle";

export function HomeSortWord({ words, setWords, handleJpToEnClick, handleEnToJpClick }) {
	const [isReversed, setIsReversed] = useState(false);

	const handleNewClick = () => {
		const newWordOrder = [...words].sort((a, b) => new Date(b.date) - new Date(a.date));
		setWords(newWordOrder);
		setIsReversed(true);
	};

	const handleOldClick = () => {
		const oldWordOrder = [...words].sort((a, b) => new Date(a.date) - new Date(b.date));
		setWords(oldWordOrder);
		setIsReversed(false);
	};

	const handleShuffleClick = () => {
		setWords((prevWords) => {
			const shuffledWords = [...prevWords];
			for (let i = shuffledWords.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
			}
			return shuffledWords;
		});
	};

	return (
		<>
			<SortContainer>
				<button onClick={handleNewClick} disabled={isReversed}>
					New
				</button>
				<button onClick={handleOldClick} disabled={!isReversed}>
					Old
				</button>
				<button>Like</button>
				<button>Dislike</button>
				<button onClick={handleShuffleClick}>Shuffle</button>
				<button onClick={handleJpToEnClick}>🇯🇵→🇺🇸</button>
				<button onClick={handleEnToJpClick}>🇺🇸→🇯🇵</button>
			</SortContainer>
		</>
	);
}
