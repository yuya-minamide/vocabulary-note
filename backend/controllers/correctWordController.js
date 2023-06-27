import { Word } from "../models/Word.js";
import mongoose from "mongoose";

export const correctWordController = async (req, res) => {
	const { id } = req.params;
	const { correcttime, answertime } = req.body;

	try {
		const updatedWord = await Word.findByIdAndUpdate(new mongoose.Types.ObjectId(id), { correcttime, answertime }, { new: true });

		if (!updatedWord) {
			res.status(404).send({ error: "Word not found" });
		}

		res.send({ message: "Word updated successfully" });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Internal server error" });
	}
};
