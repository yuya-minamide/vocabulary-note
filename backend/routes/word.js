import { addWordController } from "../controllers/addWordController.js";
import { editWordController } from "../controllers/editWordController.js";
import { getWordController } from "../controllers/getWordController.js";
import { archiveWordController } from "../controllers/archiveWordController.js";
import { removeWordController } from "../controllers/removeWordController.js";
import { deleteWordController } from "../controllers/deleteWordController.js";
//import authentication from "../middleware/auth.js";

import { Router } from "express";

export const router = Router();

router.get("/getword", getWordController);
router.post("/addword", addWordController);
router.put("/editword/:id", editWordController);
router.put("/archiveword/:id", archiveWordController);
router.put("/removeword/:id", removeWordController);
router.delete("/deleteword/:id", deleteWordController);
