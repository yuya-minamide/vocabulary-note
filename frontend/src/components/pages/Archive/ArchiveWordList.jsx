import { HomeEditWord } from "../../index";
import { useState } from "react";
import toast from "react-hot-toast";
import { ListButton, WordListContainer } from "../../../styles/components/pages/Home/HomeWordListStyle";

export function ArchiveWordList({ words, onUpdate }) {
	const [selectedWord, setSelectedWord] = useState(null);

	const handleEditClick = (word) => {
		setSelectedWord(word);
	};

	const handleCloseEdit = () => {
		setSelectedWord(null);
	};

	const handleRemoveClick = async (word) => {
		try {
			await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/removeword/${word._id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
			});
			onUpdate();
			toast.success("Word moved to list successfully");
		} catch (error) {
			console.error(error);
			toast.error("Failed to move word to list");
		}
	};

	const handleDeleteClick = async (word) => {
		try {
			await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/deleteword/${word._id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			});
			onUpdate();
			toast.success("Word deleted successfully");
		} catch (error) {
			console.error(error);
			toast.error("Failed to delete word");
		}
	};

	return (
		<>
			{words.map((word) => (
				<WordListContainer key={word._id}>
					<div>{word.egword}</div>
					<div>
						<ListButton onClick={() => handleEditClick(word)}>Edit</ListButton>
						<ListButton onClick={() => handleRemoveClick(word)}>Move to list</ListButton>
						<ListButton onClick={() => handleDeleteClick(word)}>Delete</ListButton>
					</div>
				</WordListContainer>
			))}
			{selectedWord && <HomeEditWord onClose={handleCloseEdit} onSave={onUpdate} word={selectedWord} />}
		</>
	);
}
