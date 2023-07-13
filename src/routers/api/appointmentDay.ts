import express from "express";
const appointmentDayRouter = express.Router();

import appointmentDayController from "../../controllers/appointmentDayController";
import apiAppointmentDayController from "../../controllers/api/appointmentDay";

/*
 *Routes
 */
//Index
appointmentDayRouter.get(
  "/",
  appointmentDayController.index,
  apiAppointmentDayController.index
);
//create
appointmentDayRouter.post(
  "/",
  appointmentDayController.create,
  apiAppointmentDayController.show
);
//Delete
appointmentDayRouter.delete(
  "/:id",
  appointmentDayController.delete,
  apiAppointmentDayController.show
);
//edit
appointmentDayRouter.put(
  "/:id",
  appointmentDayController.edit,
  apiAppointmentDayController.show
);
//show
appointmentDayRouter.get(
  "/:id",
  appointmentDayController.show,
  apiAppointmentDayController.show
);

export default appointmentDayRouter;
