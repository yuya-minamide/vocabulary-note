import { Loading } from "../../index";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { goToNextQuestion, selectAnswer } from "../../../redux/examSlice";
import {
	AnswerButton,
	AnswerButtonContainer,
	ContentsContainer,
	ExamContainer,
	QuestionNumber,
	Sentence,
	Title,
	Word,
} from "../../../styles/components/pages/Exam/ExamContentsStyle";

export function ExamContents() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { examName } = useParams();
	const capitalizedButtonName = examName.charAt(0).toUpperCase() + examName.slice(1);
	const examCategory = examName.slice(0, -2);
	const totalQuestionNumber = Number(examName.slice(-2));
	const currentQuestionNumber = useSelector((state) => state.exam.currentQuestionIndex);
	const currentAnswers = useSelector((state) => state.exam.selectedAnswers).length;
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
		} else {
			navigate("/");
			toast.error("Please add words");
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
		} else {
			navigate("/");
			toast.error("Please add words");
		}
	}, [words, totalQuestionNumber]);

	const handleAnswer = () => {
		setRevealAnswer(true);
	};

	let answer;
	const wordId =
		examCategory === "random"
			? randomWord[currentQuestionNumber]
				? randomWord[currentQuestionNumber]._id
				: ""
			: dislikeWord[currentQuestionNumber]
			? dislikeWord[currentQuestionNumber]._id
			: "";
	const word = examCategory === "random" ? randomWord[currentQuestionNumber] : dislikeWord[currentQuestionNumber];

	const handleNextQuestion = async (buttonType) => {
		if (currentAnswers === totalQuestionNumber - 1) {
			if (buttonType === "iKnow") {
				answer = "I know";
			} else if (buttonType === "iDoNotKnow") {
				answer = "I don't know";
			}

			const updateData = {
				correcttime: answer === "I know" ? word.correcttime + 1 : word.correcttime,
				answertime: word.answertime + 1,
			};

			try {
				const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/answer/${wordId}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(updateData),
				});

				const updatedWord = await response.json();
				console.log("Word updated:", updatedWord);

				dispatch(selectAnswer({ questionIndex: currentQuestionNumber, answer }));
				setRevealAnswer(false);
				navigate(
					`/result?randomWord=${encodeURIComponent(JSON.stringify(randomWord))}&dislikeWord=${encodeURIComponent(
						JSON.stringify(dislikeWord)
					)}&examCategory=${encodeURIComponent(examCategory)}`
				);
			} catch (error) {
				console.error("Error updating word:", error);
			}
		} else {
			if (buttonType === "iKnow") {
				answer = "I know";
			} else if (buttonType === "iDoNotKnow") {
				answer = "I don't know";
			}

			const updateData = {
				correcttime: answer === "I know" ? word.correcttime + 1 : word.correcttime,
				answertime: word.answertime + 1,
			};

			try {
				const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/answer/${wordId}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(updateData),
				});

				const updatedWord = await response.json();
				console.log("Word updated:", updatedWord);

				dispatch(selectAnswer({ questionIndex: currentQuestionNumber, answer }));
				setRevealAnswer(false);
				dispatch(goToNextQuestion());
			} catch (error) {
				console.error("Error updating word:", error);
			}
		}
	};

	return (
		<ExamContainer>
			<Toaster position="top-center" />
			{isLoading ? (
				<Loading />
			) : (
				<div>
					<Title>{capitalizedButtonName}</Title>
					<QuestionNumber>
						{currentQuestionNumber + 1} / {totalQuestionNumber}
					</QuestionNumber>
					<ContentsContainer>
						{examCategory === "random" ? (
							<>
								<Word>
									{revealAnswer ? randomWord[currentQuestionNumber]?.jpword : randomWord[currentQuestionNumber]?.egword}
								</Word>
								{revealAnswer && <Sentence>{randomWord[currentQuestionNumber]?.sentence}</Sentence>}
							</>
						) : (
							<>
								<Word>
									{revealAnswer ? dislikeWord[currentQuestionNumber]?.jpword : dislikeWord[currentQuestionNumber]?.egword}
								</Word>
								{revealAnswer && <Sentence>{dislikeWord[currentQuestionNumber]?.sentence}</Sentence>}
							</>
						)}

						<AnswerButton onClick={handleAnswer}>Answer</AnswerButton>
						<AnswerButtonContainer>
							<button onClick={() => handleNextQuestion("iKnow")}>I know well</button>
							<button onClick={() => handleNextQuestion("iDoNotKnow")}>I don't know</button>
						</AnswerButtonContainer>
					</ContentsContainer>
				</div>
			)}
		</ExamContainer>
	);
}
