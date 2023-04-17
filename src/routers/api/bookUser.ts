import express from "express";
const router = express.Router();

import dataController from "../../controllers/bookUserController";
import apiController from "../../controllers/api/bookUser";

/*
 *Routes
 */
//Index
router.get("/", dataController.index, apiController.index);
//Delete
router.delete("/:id", dataController.destroy, apiController.show);
//create
router.post("/", dataController.create, apiController.show);
//edit
router.put("/:id", dataController.edit, apiController.show);
//show
router.get("/:id", dataController.show, apiController.show);

export default router;
