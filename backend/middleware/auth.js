import { verifyToken } from "../util/jwtUtil.js";
import User from "../models/User.js";

async function authentication(req, res, next) {
	const { token } = req.headers;

	if (!token) {
		return res.status(401).json({
			error: "Token not found.",
		});
	}

	try {
		const decoded = await verifyToken(token);

		if (!decoded) {
			return res.status(401).json({
				error: "Token is invalid",
			});
		}

		const { _id } = decoded;

		req.user = await User.findById(_id).select("-password");
		next();
	} catch (error) {
		return res.status(500).json({
			error: "Server error",
		});
	}
}

export default authentication;
