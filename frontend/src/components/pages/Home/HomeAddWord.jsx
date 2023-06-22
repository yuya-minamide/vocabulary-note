import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import { AddWordCard, AddWordContainer, SaveButton } from "../../../styles/components/pages/Home/HomeAddWordStyle";

export function HomeAddWord({ onClose, onSave }) {
	const userData = useSelector((state) => state.user);
	const userId = userData._id;

	const [data, setData] = useState({
		egword: "",
		jpword: "",
		sentence: "",
		userid: userId,
	});

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		setData((preve) => {
			return {
				...preve,
				[name]: value,
			};
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { egword, jpword, sentence } = data;
		if (egword && jpword && sentence) {
			if (!userId) {
				toast.error("Please log in to save the word!");
				return;
			}

			const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/addword`, {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const resData = await response.json();
			resData.message ? toast.success(resData.message) : toast.error(resData.error);

			setData(() => {
				return {
					egword: "",
					jpword: "",
					sentence: "",
					userid: userId,
				};
			});

			onSave();
		} else {
			toast.error("Please enter required fields");
		}
	};
	return (
		<AddWordContainer>
			<AddWordCard>
				<Toaster position="top-center" />
				<GrClose onClick={onClose} />
				<h1>Add a word</h1>
				<form onSubmit={handleSubmit}>
					<p>🇺🇸</p>
					<input type="text" name="egword" value={data.egword} onChange={handleOnChange} />
					<p>🇯🇵</p>
					<input type="text" name="jpword" value={data.jpword} onChange={handleOnChange} />
					<p>✏️</p>
					<textarea name="sentence" rows="4" value={data.sentence} onChange={handleOnChange}></textarea>
					<SaveButton onClick={handleSubmit}>Save</SaveButton>
				</form>
			</AddWordCard>
		</AddWordContainer>
	);
}
