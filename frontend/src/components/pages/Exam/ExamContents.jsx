import { Loading } from "../../index";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { goToNextQuestion } from "../../../redux/examSlice";
import styled from "styled-components";

const ExamContainer = styled.div`
	margin-top: 130px;
	text-align: center;
`;

export function ExamContents() {
	const dispatch = useDispatch();
	const { examName } = useParams();
	const capitalizedButtonName = examName.charAt(0).toUpperCase() + examName.slice(1);
	const examCategory = examName.slice(0, -2);
	const totalQuestionNumber = examName.slice(-2);
	const currentQuestionNumber = useSelector((state) => state.exam.currentQuestionIndex);
	const userData = useSelector((state) => state.user);
	const userId = userData._id;
	const [isLoading, setIsLoading] = useState(true);
	const [words, setWords] = useState([]);
	const [randomWord, setRandomWord] = useState([]);
	const [dislikeWord, setDislikeWord] = useState([]);
	const [revealAnswer, setRevealAnswer] = useState(false);

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

	useEffect(() => {
		if (words.length > 0) {
			const randomWords = [];

			for (let i = 0; i < totalQuestionNumber; i++) {
				const randomIndex = Math.floor(Math.random() * words.length);
				randomWords.push(words[randomIndex]);
			}

			setRandomWord(randomWords);
		}
	}, [words, totalQuestionNumber]);

	useEffect(() => {
		if (words.length > 0) {
			const dislikeWords = [];
			const correctRate = words.correcttime / words.answertime;

			for (let i = 0; i < totalQuestionNumber; i++) {
				if (correctRate < 0.7 && words.answertime > 0) dislikeWords.push(words[i]);
			}

			setDislikeWord(dislikeWords);
		}
	}, [words, totalQuestionNumber]);

	const handleAnswer = () => {
		setRevealAnswer(true);
	};

	const handleNextQuestion = () => {
		dispatch(goToNextQuestion());
		setRevealAnswer(false);
	};

	return (
		<ExamContainer>
			{isLoading ? (
				<Loading />
			) : (
				<div>
					<h1>{capitalizedButtonName}</h1>
					<h2>
						{currentQuestionNumber + 1} / {totalQuestionNumber}
					</h2>
					<div>
						{examCategory === "random" ? (
							<>
								<h2>
									{revealAnswer ? randomWord[currentQuestionNumber]?.jpword : randomWord[currentQuestionNumber]?.egword}
								</h2>
								{revealAnswer && <p>{randomWord[currentQuestionNumber]?.sentence}</p>}
							</>
						) : (
							<>
								<h2>
									{revealAnswer ? dislikeWord[currentQuestionNumber]?.jpword : dislikeWord[currentQuestionNumber]?.egword}
								</h2>
								{revealAnswer && <p>{dislikeWord[currentQuestionNumber]?.sentence}</p>}
							</>
						)}

						<button onClick={handleAnswer}>Answer</button>
						<div>
							<button onClick={handleNextQuestion}>I know</button>
							<button onClick={handleNextQuestion}>I don't know</button>
						</div>
					</div>
				</div>
			)}
		</ExamContainer>
	);
}
