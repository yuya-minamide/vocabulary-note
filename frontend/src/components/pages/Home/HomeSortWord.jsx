import { SortContainer } from "../../../styles/components/pages/Home/HomeSortWordStyle";

export function HomeSortWord({
	words,
	setWords,
	handleJpToEnClick,
	handleEnToJpClick,
	handleLikeClick,
	handleDislikeClick,
	handleAllClick,
}) {
	const handleNewClick = () => {
		const newWordOrder = [...words].sort((a, b) => new Date(b.date) - new Date(a.date));
		setWords(newWordOrder);
	};

	const handleOldClick = () => {
		const oldWordOrder = [...words].sort((a, b) => new Date(a.date) - new Date(b.date));
		setWords(oldWordOrder);
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
				<button onClick={handleAllClick}>All</button>
				<button onClick={handleNewClick}>New</button>
				<button onClick={handleOldClick}>Old</button>
				<button onClick={handleLikeClick}>Like</button>
				<button onClick={handleDislikeClick}>Dislike</button>
				<button onClick={handleShuffleClick}>Shuffle</button>
				<button onClick={handleJpToEnClick}>🇯🇵→🇺🇸</button>
				<button onClick={handleEnToJpClick}>🇺🇸→🇯🇵</button>
			</SortContainer>
		</>
	);
}
