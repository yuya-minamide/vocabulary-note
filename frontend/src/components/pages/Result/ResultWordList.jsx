export function ResultWordList({ words, examData }) {
	return (
		<div>
			{words.map((word, index) => (
				<div key={index} style={{ color: examData[index] === "I know" ? "green" : "red" }}>
					<div>
						<p>{word.egword}</p>
						<p>{word.jpword}</p>
					</div>
					<div>
						<p>
							Past correct tate: {word.correcttime} / {word.answertime}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
