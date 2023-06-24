import { Word } from "../models/Word.js";

export const archiveWordController = async (req, res) => {
	const { id } = req.params;

	try {
		const word = await Word.findById(id);

		if (!word) {
			res.status(404).send({ error: "Word not found" });
			return;
		}

		word.archive = true;
		await word.save();

		res.send({ message: "Word archived successfully" });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Internal server error" });
	}
};
