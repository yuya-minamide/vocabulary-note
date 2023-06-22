import { ListButton, WordListContainer } from "../../../styles/components/pages/Home/HomeWordListStyle";

export function HomeWordList() {
	return (
		<WordListContainer>
			<div>Apple</div>
			<div>
				<ListButton>Edit</ListButton>
				<ListButton>Achieve</ListButton>
			</div>
		</WordListContainer>
	);
}
