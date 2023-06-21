import { HomeAddWord } from "../../index";
import { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { AddButton, HomeContainer } from "../../../styles/components/pages/Home/HomeContentsStyle";

export function HomeContents() {
	const [showAddWord, setShowAddWord] = useState(false);

	const handleAddButtonClick = () => {
		setShowAddWord(true);
	};

	const handleCloseClick = () => {
		setShowAddWord(false);
	};

	const handleSaveClick = () => {
		setTimeout(() => {
			setShowAddWord(false);
		}, 1000);
	};

	return (
		<HomeContainer>
			<AddButton>
				<AiOutlineUpload onClick={handleAddButtonClick} />
			</AddButton>
			{showAddWord && <HomeAddWord onClose={handleCloseClick} onSave={handleSaveClick} />}
		</HomeContainer>
	);
}
