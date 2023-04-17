import express from "express";
const scheduleRouter = express.Router();

import dataController from "../../controllers/scheduleController";
import apiController from "../../controllers/api/schedule";

/*
 *Routes
 */
//Index
scheduleRouter.get("/", dataController.index, apiController.index);
//create
scheduleRouter.post("/", dataController.create, apiController.show);
//Delete
scheduleRouter.delete("/:id", dataController.destroy, apiController.show);
//edit
scheduleRouter.put("/:id", dataController.edit, apiController.show);
//show
scheduleRouter.get("/:id", dataController.show, apiController.show);

export default scheduleRouter;
