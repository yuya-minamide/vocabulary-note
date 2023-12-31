import { Link } from "react-router-dom";
import {
	ExamSelectContainer,
	InnerContainer,
	SelectButtonContainer,
	Title,
} from "../../../styles/components/pages/ExamSelect/ExamSelectContentsStyle";

export function ExamSelectContents() {
	const SELECT_CONTENTS = ["Random10", "Random30", "Dislike10", "Dislike30"];

	return (
		<ExamSelectContainer>
			<InnerContainer>
				<Title>Exam selection</Title>
				<SelectButtonContainer>
					{SELECT_CONTENTS.map((content) => (
						<Link key={content} to={`/examstart/${content.toLowerCase()}`}>
							{content}
						</Link>
					))}
				</SelectButtonContainer>
			</InnerContainer>
		</ExamSelectContainer>
	);
}
