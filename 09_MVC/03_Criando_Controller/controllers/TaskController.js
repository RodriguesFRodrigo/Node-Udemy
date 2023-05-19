const Task = require("../models/Task");

module.exports = class TaskController {
  // Rota para encaminhar para view localizada na rota /tasks/create
  static createTask(req, res) {
    res.render('/tasks/create');
  }
};