import express from "express";
const userRouter = express.Router();
import { checkToken, dataController } from "../../controllers/userController";

import { apiController } from "../../controllers/api/user";
import ensureLoggedIn from "../../config/ensureLoggedIn";
//Get all users

// Post /api/users/login
userRouter.post("/login", dataController.login, apiController.auth);

// Get /api/users/check-token
userRouter.get("/check-token", ensureLoggedIn, checkToken);

// POST /api/users
userRouter.post("/", dataController.create, apiController.auth);

export default userRouter;
