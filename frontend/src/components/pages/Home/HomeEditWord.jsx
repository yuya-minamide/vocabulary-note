import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import { AddWordCard, AddWordContainer, SaveButton } from "../../../styles/components/pages/Home/HomeAddWordStyle";

export function HomeEditWord({ onClose, onSave, word }) {
	const userData = useSelector((state) => state.user);
	const userId = userData._id;

	const [data, setData] = useState({
		egword: word.egword,
		jpword: word.jpword,
		sentence: word.sentence,
		userid: userId,
	});

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		setData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { egword, jpword, sentence } = data;
		if (egword && jpword && sentence) {
			const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/editword/${word._id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const resData = await response.json();
			resData.message ? toast.success(resData.message) : toast.error(resData.error);

			onSave();
			onClose();
		} else {
			toast.error("Please enter required fields");
		}
	};

	return (
		<AddWordContainer>
			<AddWordCard>
				<Toaster position="top-center" />
				<GrClose onClick={onClose} />
				<h1>Edit Word</h1>
				<form onSubmit={handleSubmit}>
					<p>🇺🇸</p>
					<input type="text" name="egword" value={data.egword} onChange={handleOnChange} />
					<p>🇯🇵</p>
					<input type="text" name="jpword" value={data.jpword} onChange={handleOnChange} />
					<p>✏️</p>
					<textarea name="sentence" rows="4" value={data.sentence} onChange={handleOnChange}></textarea>
					<SaveButton type="submit">Save</SaveButton>
				</form>
			</AddWordCard>
		</AddWordContainer>
	);
}
