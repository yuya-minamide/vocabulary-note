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
	const examWordParam = queryParams.get("examWord");
	const examWord = examWordParam ? JSON.parse(decodeURIComponent(examWordParam)) : [];
	const examData = useSelector((state) => state.exam.selectedAnswers);
	const correctNumber = examData.filter((answer) => answer === "I know").length;

	const selectedWords = examWord;

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
