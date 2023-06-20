import dotenv from "dotenv";
import { User } from "../models/User.js";
dotenv.config();

export const loginController = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });

		if (!user) {
			return res.send({ error: "User not exists with this email" });
		}

		const isMatch = await user.matchPassword(password, user.password);

		if (!isMatch) {
			return res.status(400).json({
				error: "Incorrect password",
			});
		}

		const token = await user.generateToken();
		const dataSend = {
			_id: user._id,
			nickName: user.nickName,
			email: user.email,
			password: user.password,
			token: token,
		};
		res.send({ message: "Login is successful", data: dataSend });
	} catch (error) {
		console.error(error);
	}
};
