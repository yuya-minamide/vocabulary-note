import { HomeAddWord, HomeSortWord, HomeWordList, Loading, NoWord } from "../../index";
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
	const [selectedLanguage, setSelectedLanguage] = useState("egword");
	const [showLikedWords, setShowLikedWords] = useState(false);
	const [showDislikedWords, setShowDislikedWords] = useState(false);
	const [showAllWords, setShowAllWords] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/getword`);
			const resData = await response.json();

			if (userId) {
				const userWords = resData.filter((word) => word.userid === userId && !word.archive);
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

	const handleSaveClick = async () => {
		setShowAddWord(false);
		// Refetch the updated word data after saving
		const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/getword`);
		const resData = await response.json();

		if (userId) {
			const userWords = resData.filter((word) => word.userid === userId && !word.archive);
			setWords(userWords);
		} else {
			setWords([]);
		}
	};

	const handleJpToEnClick = () => {
		setSelectedLanguage("egword");
	};

	const handleEnToJpClick = () => {
		setSelectedLanguage("jpword");
	};

	const handleLikeClick = () => {
		setShowLikedWords(true);
		setShowDislikedWords(false);
		setShowAllWords(false);
	};

	const handleDislikeClick = () => {
		setShowLikedWords(false);
		setShowDislikedWords(true);
		setShowAllWords(false);
	};

	const handleAllClick = () => {
		setShowLikedWords(false);
		setShowDislikedWords(false);
		setShowAllWords(true);
	};

	return (
		<HomeContainer>
			<HomeSortWord
				words={words}
				setWords={setWords}
				handleSaveClick={handleSaveClick}
				handleJpToEnClick={handleJpToEnClick}
				handleEnToJpClick={handleEnToJpClick}
				handleLikeClick={handleLikeClick}
				handleDislikeClick={handleDislikeClick}
				handleAllClick={handleAllClick}
			/>
			<AddButton>
				<AiOutlineUpload onClick={handleAddButtonClick} />
			</AddButton>
			{showAddWord && <HomeAddWord onClose={handleCloseClick} onSave={handleSaveClick} />}
			{isLoading ? (
				<Loading />
			) : words.length ? (
				<HomeWordList
					words={words}
					onUpdate={handleSaveClick}
					selectedLanguage={selectedLanguage}
					showLikedWords={showLikedWords}
					showDislikedWords={showDislikedWords}
					showAllWords={showAllWords}
				/>
			) : (
				<NoWord />
			)}
		</HomeContainer>
	);
}
