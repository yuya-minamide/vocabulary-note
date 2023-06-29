import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
	ExamStartContainer,
	ExplainButtonContainer,
	ExplainContainer,
	InnerContainer,
	StartButtonContainer,
	Title,
} from "../../../styles/components/pages/ExamStart/ExamStartContentsStyle";

export function ExamStartContents() {
	const navigate = useNavigate();
	const { examName } = useParams();
	const capitalizedButtonName = examName.charAt(0).toUpperCase() + examName.slice(1);
	const examCategory = examName.slice(0, -2);
	const totalQuestionNumber = Number(examName.slice(-2));
	const userData = useSelector((state) => state.user);
	const userId = userData._id;
	const [words, setWords] = useState([]);
	const [randomWord, setRandomWord] = useState([]);
	const [dislikeWord, setDislikeWord] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/getword`);
			const resData = await response.json();

			if (userId) {
				const userWords = resData.filter((word) => word.userid === userId && !word.archive);
				setWords(userWords);
			} else {
				setWords([]);
			}
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

	let examWord = examCategory === "random" ? randomWord : dislikeWord;

	const handleStart = () => {
		if (userData.nickName) {
			navigate(`/exam/${examName}`, { state: { examWord } });
		} else {
			toast.error("You need to login to start the exam!");
		}
	};

	return (
		<ExamStartContainer>
			<InnerContainer>
				<Title>{capitalizedButtonName}</Title>
				<StartButtonContainer>
					<button onClick={handleStart}>Start</button>
				</StartButtonContainer>
				<ExplainContainer>
					<p>After clicking START button, you just click I know or I don’t know button</p>
					<ExplainButtonContainer>
						<div>I know</div>
						<div>I don't know</div>
					</ExplainButtonContainer>
				</ExplainContainer>
			</InnerContainer>
		</ExamStartContainer>
	);
}
