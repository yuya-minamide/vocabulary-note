import { HomeAddWord, HomeWordList, Loading, NoWord } from "../../index";
import { useEffect, useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { useSelector } from "react-redux";
import { AddButton, HomeContainer } from "../../../styles/components/pages/Home/HomeContentsStyle";

export function HomeContents() {
	const userData = useSelector((state) => state.user);
	const userId = userData._id;
	const [showAddWord, setShowAddWord] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [words, setWords] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/getword`);
			const resData = await response.json();

			if (userId) {
				const userWords = resData.filter((word) => word.userid === userId);
				setWords(userWords);
			} else {
				setWords([]);
			}

			setIsLoading(false);
		};
		fetchData();
	}, [userId]);

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
			{isLoading ? <Loading /> : words.length ? <HomeWordList words={words} /> : <NoWord />}
		</HomeContainer>
	);
}
