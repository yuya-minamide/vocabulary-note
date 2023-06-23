import mongoose from "mongoose";

const { Schema, model } = mongoose;

const WordSchema = new Schema({
	egword: {
		type: String,
		required: true,
	},
	jpword: {
		type: String,
		required: true,
	},
	sentence: {
		type: String,
		required: true,
	},
	userid: {
		type: String,
		required: true,
	},
	archive: {
		type: Boolean,
		default: false,
	},
	answertime: {
		type: Number,
		default: 0,
	},
	correcttime: {
		type: Number,
		default: 0,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const Word = model("Word", WordSchema);

export { Word };
