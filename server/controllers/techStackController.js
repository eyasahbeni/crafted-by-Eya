const { TechStack } = require('../models');

// Get all tech stacks
const getAllTechStacks = async (req, res) => {
  try {
    const techStacks = await TechStack.findAll();
    res.json(techStacks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tech stacks' });
  }
};

// Get single tech stack by ID
const getTechStackById = async (req, res) => {
  try {
    const techStack = await TechStack.findByPk(req.params.id);
    if (!techStack) {
      return res.status(404).json({ error: 'Tech stack not found' });
    }
    res.json(techStack);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tech stack' });
  }
};

// Create a new tech stack
const createTechStack = async (req, res) => {
  try {
    const { name } = req.body;
    const newTech = await TechStack.create({ name });
    res.status(201).json(newTech);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create tech stack' });
  }
};

// Update a tech stack
const updateTechStack = async (req, res) => {
  try {
    const { name } = req.body;
    const techStack = await TechStack.findByPk(req.params.id);
    if (!techStack) {
      return res.status(404).json({ error: 'Tech stack not found' });
    }

    techStack.name = name || techStack.name;
    await techStack.save();

    res.json(techStack);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update tech stack' });
  }
};

// Delete a tech stack
const deleteTechStack = async (req, res) => {
  try {
    const techStack = await TechStack.findByPk(req.params.id);
    if (!techStack) {
      return res.status(404).json({ error: 'Tech stack not found' });
    }

    await techStack.destroy();
    res.json({ message: 'Tech stack deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete tech stack' });
  }
};

module.exports = {
  getAllTechStacks,
  getTechStackById,
  createTechStack,
  updateTechStack,
  deleteTechStack,
};
