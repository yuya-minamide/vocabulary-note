import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
	ExamStartContainer,
	ExplainButtonContainer,
	ExplainContainer,
	StartButtonContainer,
	Title,
} from "../../../styles/components/pages/ExamStart/ExamStartContents";

export function ExamStartContents() {
	const { examName } = useParams();
	const capitalizedButtonName = examName.charAt(0).toUpperCase() + examName.slice(1);

	return (
		<ExamStartContainer>
			<Title>{capitalizedButtonName}</Title>
			<StartButtonContainer>
				<Link to={"/"}>Start</Link>
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
