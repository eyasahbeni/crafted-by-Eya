// server/controllers/projectController.js
const { Project } = require('../models');

module.exports = {
  async getAllProjects(req, res) {
    const projects = await Project.findAll();
    res.json(projects);
  },

  async createProject(req, res) {
    const newProject = await Project.create(req.body);
    res.json(newProject);
  },

  async getProjectById(req, res) {
    const project = await Project.findByPk(req.params.id);
    res.json(project);
  },

  async updateProject(req, res) {
    await Project.update(req.body, { where: { id: req.params.id } });
    res.json({ message: 'Project updated' });
  },

  async deleteProject(req, res) {
    await Project.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Project deleted' });
  }
};
