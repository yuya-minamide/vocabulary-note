import { Word } from "../models/Word.js";

export const removeWordController = async (req, res) => {
	const { id } = req.params;

	try {
		const word = await Word.findById(id);

		if (!word) {
			res.status(404).send({ error: "Word not found" });
			return;
		}

		word.archive = false;
		await word.save();

		res.send({ message: "Word removed successfully" });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Internal server error" });
	}
};
