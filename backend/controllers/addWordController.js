import { Word } from "../models/Word.js";

export const addWordController = async (req, res) => {
	try {
		const data = await Word(req.body);
		await data.save();
		res.send({ message: "Upload successfully!" });
	} catch (error) {
		console.error("Error uploading food", error);
		res.status(500).send({ error: "Failed to upload food." });
	}
};
