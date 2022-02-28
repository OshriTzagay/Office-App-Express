const workerCRUD = require("../controllers/workers-ctrl");
const express = require("express");
const workerRouter = express.Router();

workerRouter.get("/", workerCRUD.getWorkers);
workerRouter.get("/:id", workerCRUD.getWorkerById);
workerRouter.post("/", workerCRUD.AddWorker);
workerRouter.put("/:id", workerCRUD.EditWorker);
workerRouter.delete("/:id", workerCRUD.DeleteWorker);

module.exports = workerRouter;
