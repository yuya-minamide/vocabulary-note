import { HomeEditWord } from "../../index";
import { useState } from "react";
import toast from "react-hot-toast";
import { ListButton, WordListContainer } from "../../../styles/components/pages/Home/HomeWordListStyle";

export function HomeWordList({ words, onUpdate, selectedLanguage }) {
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

	return (
		<>
			{words.map((word) => (
				<WordListContainer key={word._id}>
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
