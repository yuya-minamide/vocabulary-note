import { Word } from "../models/Word.js";

export const getWordController = async (req, res) => {
	try {
		const data = await Word.find({});
		res.send(JSON.stringify(data));
	} catch (error) {
		console.error("Error retrieving food data", error);
		res.status(500).json({ error: "Failed to retrieve food data." });
	}
};
