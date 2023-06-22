import { addWordController } from "../controllers/addWordController.js";
import { editWordController } from "../controllers/editWordController.js";
import { getWordController } from "../controllers/getWordController.js";
//import authentication from "../middleware/auth.js";

import { Router } from "express";

export const router = Router();

router.get("/getword", getWordController);
router.post("/addword", addWordController);
router.put("/editword/:id", editWordController);
