import { Router } from "express";
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

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);

export {routes};