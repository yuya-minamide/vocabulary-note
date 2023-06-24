import { Word } from "../models/Word.js";

export const deleteWordController = async (req, res) => {
	try {
		const wordId = req.params.id;
		const deletedWord = await Word.findByIdAndDelete(wordId);

		if (!deletedWord) {
			return res.status(404).json({ error: "Word not found" });
		}

		res.send({ message: "Word deleted successfully" });
	} catch (error) {
		console.error(err);
		res.status(500).json({ error: "Server error" });
	}
};
