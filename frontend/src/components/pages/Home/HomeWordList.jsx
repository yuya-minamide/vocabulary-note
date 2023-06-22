import { HomeEditWord } from "../../index";
import { useState } from "react";
import { ListButton, WordListContainer } from "../../../styles/components/pages/Home/HomeWordListStyle";

export function HomeWordList({ words, onUpdate }) {
	const [selectedWord, setSelectedWord] = useState(null);

	const handleEditClick = (word) => {
		setSelectedWord(word);
	};

	const handleCloseEdit = () => {
		setSelectedWord(null);
	};

	return (
		<>
			{words.map((word) => (
				<WordListContainer key={word._id}>
					<div>{word.egword}</div>
					<div>
						<ListButton onClick={() => handleEditClick(word)}>Edit</ListButton>
						<ListButton>Achieve</ListButton>
					</div>
				</WordListContainer>
			))}
			{selectedWord && <HomeEditWord onClose={handleCloseEdit} onSave={onUpdate} word={selectedWord} />}
		</>
	);
}
