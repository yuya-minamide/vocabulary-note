import { ListButton, WordListContainer } from "../../../styles/components/pages/Home/HomeWordListStyle";

export function HomeWordList({ words }) {
	return (
		<>
			{words.map((word) => (
				<WordListContainer key={word._id}>
					<div>{word.egword}</div>
					<div>
						<ListButton>Edit</ListButton>
						<ListButton>Achieve</ListButton>
					</div>
				</WordListContainer>
			))}
		</>
	);
}
