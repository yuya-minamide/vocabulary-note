import { Word } from "../models/Word.js";

export const editWordController = async (req, res) => {
	const { id } = req.params;
	const { egword, jpword, sentence } = req.body;

	try {
		const updatedWord = await Word.findByIdAndUpdate(id, { egword, jpword, sentence }, { new: true });

		if (!updatedWord) {
			res.status(404).send({ error: "Word not found" });
		}

		res.send({ message: "Word updated successfully" });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Internal server error" });
	}
};
