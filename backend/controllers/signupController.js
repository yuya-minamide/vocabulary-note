import dotenv from "dotenv";
import { User } from "../models/User.js";
dotenv.config();

export const signupController = async (req, res) => {
	try {
		const { nickName, email, password } = req.body;

		const user = await User.findOne({ email });

		if (user) {
			return res.send({ error: "Email id is already registered!" });
		}

		const newUser = await User({
			nickName,
			email,
			password,
		});

		await newUser.save();

		const token = await newUser.generateToken();

		res.status(200).json({
			message: "User created successfully",
			user: {
				fullName: newUser.nickName,
				email: newUser.email,
			},
			token,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Internal server error",
		});
	}
};
