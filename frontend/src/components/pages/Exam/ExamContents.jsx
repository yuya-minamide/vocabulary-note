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
	InnerContainer,
	QuestionNumber,
	Sentence,
	Title,
	Word,
} from "../../../styles/components/pages/Exam/ExamContentsStyle";

export function ExamContents({ examWord }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { examName } = useParams();
	const capitalizedButtonName = examName.charAt(0).toUpperCase() + examName.slice(1);
	const examCategory = examName.slice(0, -2);
	const totalQuestionNumber = Number(examName.slice(-2));
	const currentQuestionNumber = useSelector((state) => state.exam.currentQuestionIndex);
	const currentAnswers = useSelector((state) => state.exam.selectedAnswers).length;
	const [revealAnswer, setRevealAnswer] = useState(false);

	useEffect(() => {
		if (examWord.length === 0) {
			navigate("/");
			toast.error("Please add words");
		}
	}, [examWord, navigate]);

	const handleAnswer = () => {
		setRevealAnswer(true);
	};

	const wordId = examWord[currentQuestionNumber] ? examWord[currentQuestionNumber]._id : "";
	const word = examWord[currentQuestionNumber];
	let answer;
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
					`/result?examWord=${encodeURIComponent(JSON.stringify(examWord))}&examCategory=${encodeURIComponent(examCategory)}`
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
			<InnerContainer>
				<Title>{capitalizedButtonName}</Title>
				<QuestionNumber>
					{currentQuestionNumber + 1} / {totalQuestionNumber}
				</QuestionNumber>
				<ContentsContainer>
					<div>
						<Word>{revealAnswer ? examWord[currentQuestionNumber]?.jpword : examWord[currentQuestionNumber]?.egword}</Word>
						{revealAnswer && <Sentence>{examWord[currentQuestionNumber]?.sentence}</Sentence>}
					</div>
					<AnswerButton onClick={handleAnswer}>Answer</AnswerButton>
					<AnswerButtonContainer>
						<button onClick={() => handleNextQuestion("iKnow")}>I know well</button>
						<button onClick={() => handleNextQuestion("iDoNotKnow")}>I don't know</button>
					</AnswerButtonContainer>
				</ContentsContainer>
			</InnerContainer>
		</ExamContainer>
	);
}
