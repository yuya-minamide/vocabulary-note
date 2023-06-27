import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
	ExamStartContainer,
	ExplainButtonContainer,
	ExplainContainer,
	StartButtonContainer,
	Title,
} from "../../../styles/components/pages/ExamStart/ExamStartContentsStyle";

export function ExamStartContents() {
	const { examName } = useParams();
	const capitalizedButtonName = examName.charAt(0).toUpperCase() + examName.slice(1);
	const userData = useSelector((state) => state.user);
	const navigate = useNavigate();

	const handleStart = () => {
		if (userData.nickName) {
			navigate(`/exam/${examName}`);
		} else {
			toast.error("You need to login to start the exam!");
		}
	};

	return (
		<ExamStartContainer>
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
		</ExamStartContainer>
	);
}
