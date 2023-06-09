const express = require("express");
const router = express.Router();

const TaskController = require("../controllers/TaskController");

router.get("/", TaskController.showTasks);
router.get("/add", TaskController.createTask); 
router.post("/remove", TaskController.removeTask);
router.get("/edit/:id", TaskController.updateTask);
router.post("/edit", TaskController.updateTaskPost);
router.post("/add", TaskController.createTaskSave); 

module.exports = router;