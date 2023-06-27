import { ResultWordList } from "../../index";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearAll } from "../../../redux/examSlice";
import { BackButton, ResultContainer, Score } from "../../../styles/components/pages/Result/ResultContentsStyle";

export function ResultContents() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const randomWordParam = queryParams.get("randomWord");
	const dislikeWordParam = queryParams.get("dislikeWord");
	const examCategoryParam = queryParams.get("examCategory");
	const randomWord = randomWordParam ? JSON.parse(decodeURIComponent(randomWordParam)) : [];
	const dislikeWord = dislikeWordParam ? JSON.parse(decodeURIComponent(dislikeWordParam)) : [];
	const examCategory = examCategoryParam ? decodeURIComponent(examCategoryParam) : "";
	const examData = useSelector((state) => state.exam.selectedAnswers);
	const correctNumber = examData.filter((answer) => answer === "I know").length;

	let selectedWords = [];
	if (examCategory === "random") {
		selectedWords = randomWord;
	} else if (examCategory === "dislike") {
		selectedWords = dislikeWord;
	}

	const handleBackToListClick = () => {
		dispatch(clearAll());
		navigate("/");
	};

	return (
		<ResultContainer>
			<h1>Your result</h1>
			<Score>
				{correctNumber} / {selectedWords.length}
			</Score>
			<ResultWordList words={selectedWords} examData={examData} />
			<BackButton onClick={handleBackToListClick}>Buck to your list</BackButton>
		</ResultContainer>
	);
}
