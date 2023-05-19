const Task = require("../models/Task");
const validator = require("validator");

module.exports = class TaskController {
  // Rota para encaminhar para view localizada na rota /tasks/create
  static createTask(req, res) {
    res.render("tasks/create");
  }

  // Rota para encaminhar para view localizada na rota /tasks/all
  static showTasks(req, res) {
    res.render("tasks/all");
  }

  // Rota para salvar uma Task no banco
  static async createTaskSave(req, res) {
    const task = {
      title: validator.trim(req.body.title),
      description: validator.trim(req.body.description),
      done: false
    };

    await Task.create(task);

    res.redirect("/tasks");
  }
};