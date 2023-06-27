import { ResultWordList } from "../../index";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearAll } from "../../../redux/examSlice";

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
		<div>
			<h1>Your result</h1>
			<h2>Score</h2>
			<ResultWordList words={selectedWords} examData={examData} />
			<button onClick={handleBackToListClick}>Buck to your list</button>
		</div>
	);
}
