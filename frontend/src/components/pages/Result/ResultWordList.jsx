import { ListContainer, WordContainer } from "../../../styles/components/pages/Result/ResultWordListStyle";

export function ResultWordList({ words, examData }) {
	return (
		<>
			{words.map((word, index) => (
				<ListContainer key={index} style={{ color: examData[index] === "I know" ? "green" : "red" }}>
					<WordContainer>
						<p>{word.egword}</p>
						<p>{word.jpword}</p>
					</WordContainer>
					<div>
						<p>
							Past correct tate: {word.correcttime} / {word.answertime}
						</p>
					</div>
				</ListContainer>
			))}
		</>
	);
}
