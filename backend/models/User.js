import mongoose from "mongoose";
import { generateToken, verifyToken } from "../util/jwtUtil.js";
import { hashPassword, comparePassword } from "../util/passwordUtil.js";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
	nickName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		return next();
	}
	this.password = await hashPassword(this.password);
	next();
});

UserSchema.methods.matchPassword = async function (password) {
	return await comparePassword(password, this.password);
};

UserSchema.methods.generateToken = async function () {
	return generateToken(this._id);
};

UserSchema.methods.verifyToken = async function (token) {
	return verifyToken(token);
};

const User = model("User", UserSchema);

export { User };
