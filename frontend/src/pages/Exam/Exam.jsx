import { ExamContents, Footer } from "../../components/index";
import { useLocation } from "react-router-dom";

export function Exam() {
	const location = useLocation();
	const examWord = location.state?.examWord;
	return (
		<div>
			<ExamContents examWord={examWord} />
			<Footer />
		</div>
	);
}
