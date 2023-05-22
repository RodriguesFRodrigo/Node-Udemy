const Task = require("../models/Task");
const validator = require("validator");

module.exports = class TaskController {
  // Rota para encaminhar para view localizada na rota /tasks/create
  static createTask(req, res) {
    res.render("tasks/create");
  }

  // Rota para encaminhar para view localizada na rota /tasks/all
  static async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true });
    res.render("tasks/all", { tasks });
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

  // Rota para remover uma Task
  static async removeTask(req, res) {
    const id = req.body.id;

    await Task.destroy({ where: { id: id } });

    res.redirect("/tasks");
  }
};