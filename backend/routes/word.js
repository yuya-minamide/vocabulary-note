import { addWordController } from "../controllers/addWordController.js";
//import authentication from "../middleware/auth.js";

import { Router } from "express";

export const router = Router();

router.post("/addword", addWordController);
