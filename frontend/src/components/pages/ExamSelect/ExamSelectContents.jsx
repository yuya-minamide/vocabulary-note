import { Link } from "react-router-dom";
import { ExamSelectContainer, SelectButtonContainer, Title } from "../../../styles/components/pages/ExamSelect/ExamSelectContentsStyle";

export function ExamSelectContents() {
	return (
		<ExamSelectContainer>
			<Title>Exam selection</Title>
			<SelectButtonContainer>
				<Link to={"/"}>Random10</Link>
				<Link to={"/"}>Random30</Link>
				<Link to={"/"}>Dislike10</Link>
				<Link to={"/"}>Dislike30</Link>
			</SelectButtonContainer>
		</ExamSelectContainer>
	);
}
