import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

/**
 * ..:: [Param Types]::..
 * Routes Params, 
 * http://localhost:3333/settings/1
 * 
 * Query Params (filters and searches)
 * http://localhost:3333/settings/1?search=result
 * 
 * Body Params (JSON)
 */

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUserName);
routes.put("/settings/:username", settingsController.update);


routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export {routes};