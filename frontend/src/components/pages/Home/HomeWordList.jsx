import { HomeEditWord } from "../../index";
import { useState } from "react";
import toast from "react-hot-toast";
import { ListButton, WordListContainer } from "../../../styles/components/pages/Home/HomeWordListStyle";

export function HomeWordList({ words, onUpdate, selectedLanguage, showLikedWords, showDislikedWords, showAllWords }) {
	const [selectedWord, setSelectedWord] = useState(null);

	const handleEditClick = (word) => {
		setSelectedWord(word);
	};

	const handleCloseEdit = () => {
		setSelectedWord(null);
	};

	const handleArchiveClick = async (word) => {
		try {
			await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/archiveword/${word._id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
			});
			onUpdate();
			toast.success("Word archived successfully");
		} catch (error) {
			console.error(error);
			toast.error("Failed to archive word");
		}
	};

	const getCorrectRateColor = (word) => {
		if (word.answertime === 0 && word.correcttime === 0) {
			return "black";
		}
		const correctRate = word.correcttime / word.answertime;
		if (correctRate >= 0.7) {
			return "green";
		} else if (correctRate > 0 && word.answertime > 0) {
			return "red";
		} else {
			return "black";
		}
	};

	const filteredWords = words.filter((word) => {
		if (!showAllWords && showLikedWords && getCorrectRateColor(word) === "green") {
			return true;
		}
		if (!showAllWords && showDislikedWords && getCorrectRateColor(word) === "red") {
			return true;
		}
		return false;
	});

	const renderedWords = filteredWords.length > 0 ? filteredWords : words;

	return (
		<>
			{renderedWords.map((word) => (
				<WordListContainer key={word._id} style={{ color: getCorrectRateColor(word) }}>
					<div>{selectedLanguage === "egword" ? word.egword : word.jpword}</div>
					<div>
						<ListButton onClick={() => handleEditClick(word)}>Edit</ListButton>
						<ListButton onClick={() => handleArchiveClick(word)}>Archive</ListButton>
					</div>
				</WordListContainer>
			))}
			{selectedWord && <HomeEditWord onClose={handleCloseEdit} onSave={onUpdate} word={selectedWord} />}
		</>
	);
}
