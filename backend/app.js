import { connectDB } from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.json());
dotenv.config();

connectDB();

app.get("/", (req, res) => {
	res.send("Server is running!");
});

(async () => {
	const authRouter = (await import("./routes/auth.js")).router;

	app.use("/", authRouter);

	const PORT = process.env.PORT || 8080;

	app.listen(PORT, console.log(`This app listening at http://localhost:${PORT}`));
})();
