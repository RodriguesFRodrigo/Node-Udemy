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
      done: false,
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

  // Rota para atualizar uma Task
  static async updateTask(req, res) {
    const id = req.params.id;

    const task = await Task.findOne({ where: { id: id }, raw: true });

    res.render("tasks/edit", { task });
  }

  // Rota para atualizar uma Tast
  static async updateTaskPost(req, res) {
    const id = req.body.id;

    const task = {
      title: validator.trim(req.body.title),
      description: validator.trim(req.body.description)
    };

    await Task.update(task, { where: { id: id } });

    res.redirect("/tasks");
  }

  static async toggleTaskStatus(req, res) {
    const id = req.body.id;

    const task = {
      done: req.body.done === "0" ? true : false
    };

    await Task.update(task, { where: { id: id } });

    res.redirect("/tasks");
  }
};
