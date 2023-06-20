import { loginController } from "../controllers/loginConroller.js";
import { signupController } from "../controllers/signupController.js";

import { Router } from "express";

export const router = Router();

router.post("/signup", signupController);
router.post("/login", loginController);
