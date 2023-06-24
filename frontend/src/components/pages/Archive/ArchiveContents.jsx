import { ArchiveWordList, Loading, NoWord } from "../../index";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HomeContainer } from "../../../styles/components/pages/Home/HomeContentsStyle";

export function ArchiveContents() {
	const userData = useSelector((state) => state.user);
	const userId = userData._id;
	const [isLoading, setIsLoading] = useState(true);
	const [words, setWords] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/getword`);
			const resData = await response.json();

			if (userId) {
				const userWords = resData.filter((word) => word.userid === userId && word.archive);
				setWords(userWords);
			} else {
				setWords([]);
			}

			setIsLoading(false);
		};
		fetchData();
	}, [userId]);

	const handleSaveClick = async () => {
		// Refetch the updated word data after saving
		const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/getword`);
		const resData = await response.json();

		if (userId) {
			const archiveWords = resData.filter((word) => word.userid === userId && word.archive);
			setWords(archiveWords);
		} else {
			setWords([]);
		}
	};

	return (
		<HomeContainer>
			{isLoading ? <Loading /> : words.length ? <ArchiveWordList words={words} onUpdate={handleSaveClick} /> : <NoWord />}
		</HomeContainer>
	);
}
